var server = require('../../src/server.js');
var should = require('chai').should();

describe('index.js',function(){
	it('should exists',function(){
		server.should.not.be.undefined;
	});
});

describe('index.js functionality',function(){
	var http = require('http');

	beforeEach(function(){
		server.createServer();
		server.startListening(8080);
	});

	afterEach(function(){
		server.stopListening();
	});

	it('should run the server',function(done){
		http.get('http://localhost:8080',function(response){
			response.statusCode.should.be.equal(200);
			done();
		});
	});
});

describe('test',function(){
	it('should work',function(){
		(1+1).should.be.equal(2);
	});
});