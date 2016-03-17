
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



var padIds = [
	"2016_NG_MAG_Net",
	"2016_NG_Design_Justice",
	"2016_NG_Complex_Movements_Translocal_Cohort",
	"2016_NG_Envisioning_Our_Herstory_Actualizing_Our",
	"2016_NG_Getting_Proud_Disability_Justice_and",
	"2016_NG_Say_Her_Name_Black_Trans_Lives_Matter",
	"2016_NG_Strategies_for_Staying_Power",
	"2016_NG_Uplifting_Women_s_Voices_in_Hip_Hop",
	"2016_NG_transTRUTH_National_Youth_Council"]
var NGNames = [
"MAG-Net Network Gathering",
"Design Justice Network Gathering",
"Complex Movements Translocal Cohort Network Gathering",
"Envisioning Our Herstory, Actualizing Our Humanity Network Gathering",
"Getting Proud: Disability Justice and Collective Access Network Gathering",
"Say Her Name/ Black Trans Lives Matter Network Gathering",
"Strategies for Staying Power Network Gathering",
"Uplifting Women's Voices in Hip Hop Network Gathering",
"#transTRUTH National Youth Council Network Gathering"
]


for (var i = 0; i < padIds.length; i++){
  		var padContent = buildPadContent(NGNames[i]);
  		ep.setHTML({padID: padIds[i], html: padContent}, function(){})
}

function buildPadContent(title) {
		padContent = "<!DOCTYPE html><html><head><title></title></head><body>";
		padContent += "<strong>" + title +"</strong>"
		padContent += "<br><br>"
		padContent += fs.readFileSync('html/networkGatheringInstructions.html', 'utf8');
		padContent += "</body></html>";
		return padContent;
}