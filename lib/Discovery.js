!function(){

    var   Class             = require('ee-class')
        , log               = require('ee-log')
        , DiscoveryResponse = require('ee-soa-discovery-response');



    module.exports = new Class({

        discover: function(application, service, callback) {
            callback(null, new DiscoveryResponse({
                transport: DiscoveryResponse.localTransport
            }));
        }
    });
}();
