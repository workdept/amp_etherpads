var Tabletop = require('tabletop'),
    etherpadLiteClient = require('etherpad-lite-client');

var padContentBuilder = require("./padContentBuilder");


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
  for(var i = 0; i < numberOfRows; i++) {
    
    var row = rows[i];
    var padId = getPadId(row);
    var padContent = padContentBuilder.build(row);
    console.log("http://etherpad.alliedmedia.org/p/" + padId);
    var callback = function (padIdClosure, padContentClosure) {
            return function(error, data)
            {
              createPadCallback(error, data, padIdClosure, padContentClosure)
            };
        }(padId, padContent);
    ep.createPad({padID: padId}, callback);
    
  }
}


function getPadId(row) {
  var title = getTitle(row);
  return convertTitleToUrl(title);
}


function getTitle(row) {
  return row['nameofyourtpsng'];
}

function convertTitleToUrl(title) {
  return ("2017_TPSNG_" + title.replace(/\W+/g, '_').toLowerCase()).substring(0,ETHERPADS_ID_CHAR_SIZE_LIMIT);
}


function createPadCallback(error, data, padId, padContent) {
  if(error)
  {
    console.error("error form creating etherpad")
    console.error(error);
    return;
  }
  if(data) {
    console.log("data from creating etherpad")
    console.log(data);
    return;
  }

  ep.setHTML({
      padID: padId,
      html: padContent
    }, setTextCallback);
}


function setTextCallback(error, data) {
  if(error)
  {
    console.error(error);
  }
  if(data) {
    console.log(data);
  }
}

function buildEtherPadUrl() {}

Tabletop.init({
  key: "1dtciN2yY2KOHiT4YGPRaSM_5evhus79E9__vXwCQB2o",
  callback: processSessionsSheet,
  prettyColumnNames: false,
  simpleSheet: false
});


