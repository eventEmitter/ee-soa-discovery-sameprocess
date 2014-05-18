
	
	var   Class 		= require('ee-class')
		, log 			= require('ee-log')
		, assert 		= require('assert');



	var   Discovery = require('../')
		, discovery;

	

	describe('The Discovery', function(){
		it('should not crash', function(){
			discovery = new Discovery();
		});

		it('should return a result', function(done){
			discovery.discover('someApp', 'someService', function(err, response){
				if (err) done(err);
				else {
					assert.equal(response.transport, 13); 
					done();
				}
			});
		});		
	});
	