
	
	var   Class 			= require('ee-class')
		, log 				= require('ee-log')
		, assert 			= require('assert')
        , DiscoveryResponse = require('ee-soa-discovery-response');



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
					assert.equal(response.status, DiscoveryResponse.statuses.Found); 
					assert.equal(response.transport, DiscoveryResponse.transports.Local); 
					done();
				}
			});
		});		
	});
	