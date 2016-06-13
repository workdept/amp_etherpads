
var Tabletop = require('tabletop');
var syncRequest = require('sync-request');

function processSessionsSheet (data, tabletop) {

  
  var sheet = data['Form Responses 1'];
  var rows = sheet.elements;
  var numberOfRows = rows.length;
  var urls = new Array(rows.length);
  for(var i = 0; i < rows.length; i++) {
    var row = rows[i];

    var encodedUri = encodeURI(row['pre-filledurldataunencoded']);

   var request = require('sync-request');
	var res = request('GET', "http://tinyurl.com/api-create.php?url="+ encodedUri);
	console.log(res.getBody('utf-8'));
	}
}

Tabletop.init({
  key: "17oclTki8oaYwsRsqyYDm0i3oiEKsNy__ZQEUlSv8pmc",
  callback: processSessionsSheet,
  prettyColumnNames: false,
  simpleSheet: false
});