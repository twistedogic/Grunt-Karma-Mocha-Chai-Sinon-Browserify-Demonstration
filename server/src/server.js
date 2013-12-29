var http = require('http');
var serverInstance;

app = exports = module.exports = {};

app.createServer = function(callback){
	serverInstance = http.createServer(callback || function(req,res){
		res.writeHead(200,{'Content-Type':'text/plain'});
		res.end('Hello');
	});
	return this;
};

app.startListening =  function(port){
	serverInstance.listen(port);
	console.log("Server started at port: ",port);
	return this;
};

app.stopListening = function(){
	serverInstance.close();
	return this;
};