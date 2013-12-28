var http = require('http');
var serverInstance;

app = exports = module.exports = {};

app.createServer = function(callback){
	serverInstance = http.createServer(callback || function(req,res){
		res.writeHead(200,{'Content-Type':'text/plain'});
		res.end('Hello');
	});
};

app.startListening =  function(port){
	serverInstance.listen(port);
};

app.stopListening = function(){
	serverInstance.close();
};