var etherpadLiteClient = require('etherpad-lite-client');


var ep = etherpadLiteClient.connect({
  apikey: '9e7d36e7a4a510484d523f29753a8c0079bdb008ec64e7749911c76e4118a185',
  host: 'etherpad.alliedmedia.org',
  port: 443
});
ep.listAllPads(callback);

function callback(a, listOfPads) {
	var list =listOfPads["padIDs"];
	for(var i = 0; i < list.length; i++) {

		if(true)//list[i].startsWith("2016_TEST0227_SESSION")) 
		{
			//console.log("delete");
			ep.getRevisionsCount({padID: list[i]}, deleteCallback);
		}
		else{
			//console.log("no delete")
		}
	}
}

function deleteCallback(a, b, c, d) {
console.log(a);
}


function listCallback(a,b) {
	console.log(b);
}