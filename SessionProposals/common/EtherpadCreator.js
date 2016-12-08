var etherpadLiteClient = require('etherpad-lite-client');
var padContentBuilder = require("./padContentBuilder");
var ETHERPADS_ID_CHAR_SIZE_LIMIT = 50;
var ETHERPAD_ID_PREFIX = "2017_Test_Session";

exports.create = function(proposal, overwrite) {
  var padContent = padContentBuilder.build(proposal);
  var padId = getPadId(proposal.sessionInfo.title);
  var url = "http://etherpad.alliedmedia.org/p/" + padId;
  var callback = function (padIdClosure, padContentClosure, overwrite) {
      return function(error, data)
      {
        createPadCallback(error, data, padIdClosure, padContentClosure, overwrite)
      };
    }(padId, padContent, overwrite);
  ep.createPad({padID: padId}, callback);
  return url;
}

var ep = etherpadLiteClient.connect({
  apikey: '9e7d36e7a4a510484d523f29753a8c0079bdb008ec64e7749911c76e4118a185',
  host: 'etherpad.alliedmedia.org',
  port: 80
});

function getPadId(title) {
    return (ETHERPAD_ID_PREFIX + "_" + title.replace(/\W+/g, '_').toLowerCase()).substring(0,ETHERPADS_ID_CHAR_SIZE_LIMIT);
}

function createPadCallback(error, data, padId, padContent, overwrite) {
  if(error)
  {
    console.log(error);
    if(!overwrite)
      return;
  }
  if(data) {
    console.log(data);
    if(!overwrite)
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
    console.log(error);
  }
  if(data) {
    console.log(data);
  }
}




