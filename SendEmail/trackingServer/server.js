var port = (process.env.PORT || 8192);
fs = require('fs');
http = require('http');
url = require('url');


http.createServer(function(req, res){
  var request = url.parse(req.url, true);
  var action = request.pathname;

  if (action.includes('/logo.png')) {
    var name = action.split('/')[1];
    fs.appendFileSync('./data.txt', name+"\n");
    var img = fs.readFileSync('./logo.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
  } else if (action == '/data') {
    var dataAsString = fs.readFileSync('./data.txt').toString('utf-8');
    var dataArray = dataAsString.split('\n');
    var dataHash = {}
    for(var index in dataArray) {
      var name = dataArray[index];
      var count = (name in dataHash)? ++dataHash[name] : 1;
      dataHash[name] = count;
    }
    var toOutput = "";
    for (var name in dataHash) {
        toOutput += name + " " + dataHash[name] + '\n'
    }
    res.writeHead(200, {'Content-Type': 'text/plain' });
    res.end(toOutput + "\n");
  } else if (action == '/raw_data') {
    var dataAsString = fs.readFileSync('./data.txt');
    res.writeHead(200, {'Content-Type': 'text/plain' });
    res.end(dataAsString + "\n");
  } else { 
   res.writeHead(200, {'Content-Type': 'text/plain' });
   res.end('Hello World \n');
 }
}).listen(port)