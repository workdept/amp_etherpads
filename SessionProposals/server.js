var convertFromSheets = require('./SheetsToFormResponse.js')

console.log("Attempting to start server");
var HttpDispatcher = require('httpdispatcher');
var http = require('http');

console.log("attempting to start server");

var dispatcher = new HttpDispatcher();

dispatcher.onGet('/', function(request, response){
	response.end('wassssup!\n');
});

dispatcher.onPost('/proposal', function(request, response){
   
   var sheetsInfo = JSON.parse(request.body);

   var response = convertFromSheets.convert(sheetsInfo);

   var response = convertToFormResponse(JSON.parse(request.body));
   response.end(JSON.stringify(JSON.parse(request.body)));

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

