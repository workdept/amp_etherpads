var Tabletop = require('tabletop'),
    etherpadLiteClient = require('etherpad-lite-client');

var ep = etherpadLiteClient.connect({
  apikey: '9e7d36e7a4a510484d523f29753a8c0079bdb008ec64e7749911c76e4118a185',
  host: 'etherpad.alliedmedia.org',
  port: 8080
});

var ETHERPADS_ID_CHAR_SIZE_LIMIT = 50;

function processSessionsSheet (data, tabletop) {

  
  var sheet = data['Form Responses 1'];
  var rows = sheet.elements;
  var numberOfRows = rows.length;

  var info = []
  for(var i = 0; i < numberOfRows; i++) {
    
    var row = rows[i];
    var padId = getPadId(row);
    ep.getChatHistory({padID: padId}, function(a){console.log(a)});
  }
  //console.log(info)
}


function getPadId(row) {
  var title = getTitle(row);
  return convertTitleToUrl(title);
}


function getTitle(row) {
  return row['nameofyourtpsng'];
}

function getType(row) {
  return row['areyouproposingatrackpracticespaceornetworkgathering'];
}

function convertTitleToUrl(title) {
  return ("2017_TPSNG_" + title.replace(/\W+/g, '_').toLowerCase()).substring(0,ETHERPADS_ID_CHAR_SIZE_LIMIT);
}

Tabletop.init({
  key: "1dtciN2yY2KOHiT4YGPRaSM_5evhus79E9__vXwCQB2o",
  callback: processSessionsSheet,
  prettyColumnNames: false,
  simpleSheet: false
});


