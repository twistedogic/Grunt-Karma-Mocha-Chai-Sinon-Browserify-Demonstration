describe('test',function(){
	it('should work',function(){
		true.should.be.equal(true);
		false.should.not.be.undefined;
		[1,3,4].should.be.deep.equal([1,3,4]);
	});
});