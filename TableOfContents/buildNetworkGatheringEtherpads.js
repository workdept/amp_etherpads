var sleep = require('sleep');
var Tabletop = require('tabletop'),
    etherpadLiteClient = require('etherpad-lite-client'),
    fs = require('fs');

var ep = etherpadLiteClient.connect({
  apikey: '9e7d36e7a4a510484d523f29753a8c0079bdb008ec64e7749911c76e4118a185',
  host: 'etherpad.alliedmedia.org',
  port: 80
});



var trackNamePadMap = JSON.parse(fs.readFileSync('TpsngNamePadMap.json', 'utf8'));
//console.log(trackNamePadMap);



var padIds = [
	"2017_NG_Intergalactic_Conspiracy_Of_Childcare",
	"2017_NG_AMP_Sponsored_Projects",
	"2017_NG_FemTechNet",
	"2017_NG_Trans_Visible",
	"2017_NG_Abundant_Bodies",
	"2017_NG_Reimagining_Movement_Resource_Strategies",
	"2017_NG_What_Feeds_Us",
	"2017_NG_Radical_Community_Spaces",
	"2017_NG_MAG_Net",
	"2017_NG_RAD_Care_Beyond_Social_Justice",
	"2017_NG_Collective_Knowledge",
	"2017_NG_Families_United_4_Justice",
	"2017_NG_No_Perfect_Victims",
	"2017_NG_Groundswell_Oral_History_For_Social_Change",
	"2017_NG_Detroit_Puerto_Rico_Solidarity_Exchange",
]
var NGNames = [
	"Intergalactic Conspiracy of Childcare Collectives",
	"AMP Sponsored Projects",
	"FemTechNet",
	"Trans*Visible",
	"Abundant Bodies",
	"Reimagining Movement Resource Strategies",
	"What Feeds Us?",
	"Radical Community Spaces",
	"MAG-Net",
	"RAD Care Beyond Social Justice",
	"Collective Knowledge",
	"Families United 4 Justice",
	"No Perfect Victims",
	"Groundswell: Oral History for Social Change",
	"Detroit/Puerto Rico Solidarity Exchange"
]

for (var i = 0; i < padIds.length; i++){
  		var padContent = buildPadContent(NGNames[i]);
  		ep.setHTML({padID: padIds[i], html: padContent}, function(a, b, c){console.log(a); console.log(b)})
}

function buildPadContent(title) {
		padContent = "<!DOCTYPE html><html><head><title></title></head><body>";
		padContent += "<strong>" + title +"</strong>"
		padContent += "<br><br>"
		padContent += fs.readFileSync('html/networkGatheringInstructions.html', 'utf8');
		padContent += "</body></html>";
		return padContent;
}