/* shimmed dependencies */
var $ = require('jquery');
var _ = require('underscore');

/* required */
var main = require('../../src/main');

describe('test',function(){
	it('should work',function(){
		_.should.not.be.undefined;
	});
});

describe('main',function(){
	it('should filter',function(){
		main.filter([1,2,3,4,5],[4,5]).should.be.deep.equal([4,5]);
	})
})