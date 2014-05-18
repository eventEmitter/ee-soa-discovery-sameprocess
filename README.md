# ee-soa-discovery-sameprocess

Static discovery for the EE SOA, returns always the local process as result

## installation

	npm install ee-soa-discovery-sameprocess

## build status

[![Build Status](https://travis-ci.org/eventEmitter/ee-soa-discovery-sameprocess.png?branch=master)](https://travis-ci.org/eventEmitter/ee-soa-discovery-sameprocess)


## usage

This module will always respond that the service can be found in the same process, it ignores any input prvided.


	var   Discovery = require('ee-soa-discovery-sameprocess')
		, instance 	= new Discovery();


	instance.discover('appID', 'serviceID', function(err, response){
		log(response.transport === 'local'); // always true
	});