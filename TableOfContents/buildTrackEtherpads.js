
var Tabletop = require('tabletop'),
    etherpadLiteClient = require('etherpad-lite-client'),
    fs = require('fs');

var ep = etherpadLiteClient.connect({
  apikey: '9e7d36e7a4a510484d523f29753a8c0079bdb008ec64e7749911c76e4118a185',
  host: 'etherpad.alliedmedia.org',
  port: 443
});



var trackNamePadMap = JSON.parse(fs.readFileSync('TpsngNamePadMap.json', 'utf8'));
//console.log(trackNamePadMap);


Tabletop.init({
  key: "17oclTki8oaYwsRsqyYDm0i3oiEKsNy__ZQEUlSv8pmc",
  callback: processSessionsSheet,
  prettyColumnNames: false,
  simpleSheet: false
});

function processSessionsSheet(data, tabletop) {
	var sheet = data['Form Responses 1'];
  	var rows = sheet.elements;
  	var urls = [];

  	for (var trackName in trackNamePadMap) {
  		var trackInfo = trackNamePadMap[trackName]
  		var padContent = buildPadContent(trackName, trackInfo, rows);
  		ep.setHTML({padID: trackInfo["padId"], html: padContent}, function(){})

	}
}

function buildPadContent(trackName, trackInfo, rows) {
			padContent = "<!DOCTYPE html><html><head><title></title></head><body>";

			padContent += "<strong>" + trackInfo["title"]+"</strong>";
			padContent += "<br>";
			padContent += trackInfo["subtitle"];
			padContent += "<br><br>";
			padContent += trackInfo["description"];
			padContent += "<br><br>";

			padContent += "Coordinators: " 
			var numCoordinators = trackInfo["coordinators"].length;
			for(var i = 0; i <trackInfo["coordinators"].length - 1; i++) {
				padContent += trackInfo["coordinators"][i] + ", "
			};
			padContent += trackInfo["coordinators"][numCoordinators-1];
		
			padContent += "<br><br><br>";

			padContent += fs.readFileSync('html/trackInstructions.html', 'utf8');
			padContent += "<br><br>"
	  		
	  		padContent += "------------------------------------------------------------------------------------------------------------------------";
			padContent += "<br>";
			padContent += "<strong>Session Proposals</strong>";
			padContent += "<br>";
			padContent += "------------------------------------------------------------------------------------------------------------------------";
			padContent += "<br>";
	  		var numberOfRows = rows.length;

	  		for(var i = 0; i < numberOfRows; i++) {
			var row = rows[i];
  			if(row['towhattrackareyouproposing'].startsWith(trackName)) {
  				padContent += "<strong>" + row['sessiontitle'] + "</strong>";
  				padContent += "<br>";
  				padContent += row['etherpadurl'];
  				padContent += "<br><br>"
  			}
		}
		padContent += "</body></html>";
		return padContent;
}