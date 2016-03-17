var Tabletop = require('tabletop'),
    etherpadLiteClient = require('etherpad-lite-client'),
    fs = require('fs');





var ep = etherpadLiteClient.connect({
  apikey: '9e7d36e7a4a510484d523f29753a8c0079bdb008ec64e7749911c76e4118a185',
  host: 'etherpad.alliedmedia.org',
  port: 443
});


var padId = "TEST_03_16_2016";
ep.createPad({padID: padId}, callback);

function callback()  {

  var padContent = '<!DOCTYPE HTML><html><body>euaoeu<br>google<br><a href="http&#x3a;&#x2F;&#x2F;google&#x2e;com">http:&#x2F;&#x2F;google.com</a><br><br><br></body></html>' ;

ep.getHTML({
      padID: '2016_Master_Table_of_Contents'
    }, doNothing);
  }

  function doNothing(a,b,c,d) {
console.log(a);
console.log(b);
console.log(c);
  }

