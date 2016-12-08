var HttpDispatcher = require('httpdispatcher');
var FromSheets = require('./SheetsToFormResponse.js')
var etherpadCreator = require('../common/EtherpadCreator.js');

console.log("Attempting to start server");
var http = require('http');

console.log("attempting to start server");

var dispatcher = new HttpDispatcher();

dispatcher.onGet('/', function(request, response){
	response.end('wassssup!\n');
});

dispatcher.onPost('/proposal', function(request, response){
   
   var sheetsInfo = JSON.parse(request.body);
   var proposal = FromSheets.convert(sheetsInfo);
   var url = etherpadCreator.create(proposal, overwrite=false);
   response.end(url);
});


const PORT=9002; 

function handleRequest(request, response){
	  try {
        //log the request on console
        console.log(request.url);
        //Disptach
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log ("starting server on " + PORT);
});

