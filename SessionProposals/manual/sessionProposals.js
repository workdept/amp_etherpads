var Tabletop = require('tabletop'),
    etherpadLiteClient = require('etherpad-lite-client'),
    fs = require('fs'),
    FromTabletop = require('./TabletopToFormResponse.js'),
    EtherpadCreator = require('../common/EtherpadCreator.js')




var dateString = new Date().toString().slice(0, 24).replace(/\W+/g, '_');


var LOG_FILENAME = "logs/" + dateString + ".log";
var URL_FILENAME = "urls/" + dateString + ".txt";


if (!fs.existsSync("logs")){
    fs.mkdirSync("logs");
}
if (!fs.existsSync("urls")){
    fs.mkdirSync("urls");
}


var ETHERPAD_ID_PREFIX = "2016_Session";




var ep = etherpadLiteClient.connect({
  apikey: '9e7d36e7a4a510484d523f29753a8c0079bdb008ec64e7749911c76e4118a185',
  host: 'etherpad.alliedmedia.org',
  port: 80
});

var ETHERPADS_ID_CHAR_SIZE_LIMIT = 50;

function processSessionsSheet (data, tabletop) {

  
  var sheet = data['Form Responses 1'];
  var rows = sheet.elements;
  var numberOfRows = rows.length;
  var urls = [];

  for(var index in rows) {
    var proposal = FromTabletop.convert(rows[index]);
    var url = EtherpadCreator.create(proposal, false);
    console.log(url);
  }




}


  function outputUrls(urls) {
    var urlString = urls.reduce(function(previousValue, currentValue, currentIndex, array) {
      return previousValue + '\n' + currentValue });

    fs.writeFileSync(URL_FILENAME, urlString);
  }


function getPadId(row, num) {
  var title = "_" + getTitle(row);
  return convertTitleToUrl(title);
}


function getTitle(row) {
  var typeToRowMap = 
  {
    'Track': 'sessiontitle', 
    'Practice Space': 'whatisthetitleofyourpracticespacesession'
  };
  var type = rowUtils.getType(row);
  var titleRow = typeToRowMap[type];
  var title = row[titleRow];

  return title;
}

function convertTitleToUrl(title) {
  return (ETHERPAD_ID_PREFIX + title.replace(/\W+/g, '_').toLowerCase()).substring(0,ETHERPADS_ID_CHAR_SIZE_LIMIT);
}


function createPadCallback(error, data, padId, padContent) {
  if(error)
  {
    fs.appendFile(LOG_FILENAME, "ERROR \t creating " + padId + "\t" + JSON.stringify(error) + "\n");
    return;
  }
  if(data) {
    fs.appendFile(LOG_FILENAME, "INFO \t creating " + padId + "\t" + JSON.stringify(data) + "\n");
    return;
  }

  var callback = function (padIdClosure, padContentClosure) {
            return function(error, data)
            {
              setTextCallback(error, data, padIdClosure, padContentClosure)
            };
  }(padId, padContent);

  ep.setHTML({
      padID: padId,
      html: padContent
    }, callback);
}


function setTextCallback(error, data, padIdClosure, padContentClosure) {
  if(error)
  {    
    fs.appendFile(LOG_FILENAME, "ERROR \t Setting content for " + padId + "\t" + JSON.stringify(error) + "\n");
  }
  if(data) {
    fs.appendFile(LOG_FILENAME, "INFO \t Setting content for " + padId + "\t" + JSON.stringify(data) + "\n");
  }
}


Tabletop.init({
  key: "1ImIaV3EU6g6CTsJzIRJszd7df9JfX2kTDazwbQz7KM0",
  callback: processSessionsSheet,
  prettyColumnNames: true,
  simpleSheet: false
});


