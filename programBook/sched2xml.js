const https = require('https');
const fs = require('fs');

var options = {
  hostname: 'amc2017.sched.com',
  port: 443,
  path: '/api/session/export?api_key=97830babbb84c1f6f78b8011ed5d434e&fields=name,event_type&format=json&strip_html=Y&custom_data=Yes',
  method: 'GET',
  headers: {'user-agent': 'node/123'}
};

var body = "";
var req = https.request(options, (res) => {

  res.setEncoding('utf-8')
  res.on('data', (d) => {
    body += d;
  });

  res.on('end', onEnd)
});
req.end();

req.on('error', (e) => {
  console.error(e);
});

var filename = "events.xml";
fs.writeFileSync(filename,"");
function onEnd() {
	var events = JSON.parse(body);
	console.log(events.length);
	appendData('<?xml version="1.0" encoding="utf-8"?>\n<flow>\n<sessions>');
	var numEvents = events.length;
	for(var i = 0; i < numEvents; i++) {
		var event = events[i];
    console.log(event);
    break;
		appendNode("sesh_type", event.subject);
		appendNode("session_title", event.name);
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



function parseTPSNGInfo(event) {

  

  var link = event['View Practice Space Info'] || event['View Track Info'] || null;
  if (link) {
    var start = link.search(">") + 1;
    var end = link.search("</a>");
    return link.substring(start, end);
  }
  return "**********";
}

function getPresenters (event){

  if('speakers' in event){
    var names = event['speakers'].map(function(speaker){return speaker['name']});
    var nameString = names.join(", ");
    return nameString;
  }
   if('volunteers' in event){
    var extractName = function(speaker){ 
      var end = speaker.name.search('\\(');
      if(end == -1) { end = speaker.name.length}
      return speaker.name.substring(0, end).trim();
    }
    var names = event['volunteers'].map(extractName);
    var nameString = names.join(", ");
    return nameString;
  }

  return "*****************";
}
