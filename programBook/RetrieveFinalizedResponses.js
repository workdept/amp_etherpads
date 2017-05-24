/*Title
Track
Seshtype
Audience
Description
Hashtag
Presorgs*/


var Tabletop = require('tabletop'),
    fs = require('fs'),
    FromTabletop = require('./TabletopToFormResponse.js');
   


function processSessionsSheet (data, tabletop) {

  
  var sheet = data['Form Responses 1'];
  var rows = sheet.elements;
  var numberOfRows = rows.length;
  var finalizedProposals = [];

  for(var index in rows) {
    var proposal = FromTabletop.convert(rows[index]);
    var title = proposal.sessionInfo.title
    if(stringNotEmpty(title))
      finalizedProposals.push(proposal);
  }

  finalizedProposals.sort(function(a, b){return cleanString(a.sessionInfo.title) > cleanString(b.sessionInfo.title)? 1 : -1;});

  writeToFile(finalizedProposals);
}

function cleanString(data) {
  var result =  data.trim().toLowerCase().replace(/"/g, '');
  console.log(result);
  return result;
}

Tabletop.init({
  key: "1ImIaV3EU6g6CTsJzIRJszd7df9JfX2kTDazwbQz7KM0",
  callback: processSessionsSheet,
  prettyColumnNames: true,
  simpleSheet: false
});





  var filename = "events.xml";
function writeToFile(proposals) {

  fs.writeFileSync(filename,"");
  appendData('<?xml version="1.0" encoding="utf-8"?>\n<flow>\n<sessions>');
  for(var index in proposals) {
    var proposal = proposals[index]
    appendNode("title", proposal.sessionInfo.title);
    appendNode("track", proposal.sessionInfo.track_practice_space);
    appendNode("seshtype", proposal.sessionInfo.content_type);
    appendNode("audience", proposal.sessionInfo.audience);
    appendNode("description", proposal.sessionInfo.one_liner);
    appendNode("hashtag", proposal.sessionInfo.hashtag);
    appendNode("presorgs", getPresenters(proposal.presenters));

  }
  appendData("\n</sessions>\n</flow>\n");
}

function appendNode(name, value) {
  appendData('\n\t');
  appendData('<' + name + '>')
  appendData(encodeXml(value));
  appendData('</'+name+'>');
}

function appendData(data) {
  fs.appendFileSync(filename, data);
}

function encodeXml(s) {
  if(s) {
    return (s
        .replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')
        .replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/\t/g, '&#x9;').replace(/\n/g, '&#xA;').replace(/\r/g, '&#xD;')
    );
  }
  else return "";

}


function getPresenters(presenters) {
  var presentersString = "";
  for (var index in presenters) {
    var presenter = presenters[index];
    var name = presenter.name;
    if (name != null && name != undefined && name != "") 
      presentersString += presenter.name + ","
  }
  return presentersString.slice(0, -1);
}

function stringNotEmpty(data) {
  return data != null && data != undefined && data != "";
}

