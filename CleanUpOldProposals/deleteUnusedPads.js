var sleep = require('sleep')
var etherpadLiteClient = require('etherpad-lite-client');


var ep = etherpadLiteClient.connect({
  apikey: '9e7d36e7a4a510484d523f29753a8c0079bdb008ec64e7749911c76e4118a185',
  host: 'etherpad.alliedmedia.org',
  port: 80
});
ep.listAllPads(callback);

function callback(a, listOfPads) {
	var list = ["2017_Test_Session_launch_of_the_the_resistance_han", "2017_Test_Session_pnk_portable_network_kits_"]
	

	for(var i = 0; i < list.length; i++) {

			console.log(list[i]);
			//sleep.sleep(1);
			ep.deletePad({padID: list[i]}, deleteCallback);

	}
}

function deleteCallback(a, b, c, d) {
console.log(a);
}


function listCallback(a,b) {
	console.log(b);
}