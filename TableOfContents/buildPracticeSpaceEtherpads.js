
var Tabletop = require('tabletop'),
    etherpadLiteClient = require('etherpad-lite-client'),
    fs = require('fs');

var ep = etherpadLiteClient.connect({
  apikey: '9e7d36e7a4a510484d523f29753a8c0079bdb008ec64e7749911c76e4118a185',
  host: 'etherpad.alliedmedia.org',
  port: 443
});



var practiceSpaceNamePadMap = JSON.parse(fs.readFileSync('PracticeSpaceNamePadMap.json', 'utf8'));

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

  	for (var practiceSpaceName in practiceSpaceNamePadMap) {
  		var practiceSpaceInfo = practiceSpaceNamePadMap[practiceSpaceName]
  		var padContent = buildPadContent(practiceSpaceName, practiceSpaceInfo, rows);
  		ep.setHTML({padID: practiceSpaceInfo["padId"], html: padContent}, function(){})

	}
}

function buildPadContent(practiceSpaceName, practiceSpaceInfo, rows) {
			padContent = "<!DOCTYPE html><html><head><title></title></head><body>";

			padContent += "<strong>" + practiceSpaceInfo["title"]+"</strong>";
			padContent += "<br>";
			padContent += practiceSpaceInfo["subtitle"];
			padContent += "<br><br>";
			padContent += practiceSpaceInfo["description"];
			padContent += "<br><br>";

			padContent += "Coordinators: " 
			var numCoordinators = practiceSpaceInfo["coordinators"].length;
			for(var i = 0; i <practiceSpaceInfo["coordinators"].length - 1; i++) {
				padContent += practiceSpaceInfo["coordinators"][i] + ", "
			};
			padContent += practiceSpaceInfo["coordinators"][numCoordinators-1];
		
			padContent += "<br><br><br>";

			padContent += fs.readFileSync('html/practiceSpaceInstructions.html', 'utf8');
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
  			if(row['whichpracticespaceareyouproposingfor'].startsWith(practiceSpaceName)) {
  				padContent += "<strong>" + row['whatisthetitleofyourpracticespacesession'] + "</strong>";
  				padContent += "<br>";
  				padContent += row['etherpadurl'];
  				padContent += "<br><br>"
  			}
		}
		padContent += "</body></html>";
		return padContent;
}