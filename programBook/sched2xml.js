
const fs = require('fs');

var csv = require("fast-csv");
 

var filename = "events.xml";
fs.writeFileSync(filename,"");
appendData('<?xml version="1.0" encoding="utf-8"?>\n<flow>\n<sessions>');

csv
 .fromPath("events.csv")
 .on("data", function(data){
     appendEvent(data[2], data[5]);
 })
 .on("end", function(){

    appendData("\n</sessions>\n</flow>\n");
 });




function appendEvent(title, type) {
		appendNode("sesh_type", type);
		appendNode("session_title", title);
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