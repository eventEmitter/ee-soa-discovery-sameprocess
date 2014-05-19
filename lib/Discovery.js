!function(){

    var   Class             = require('ee-class')
        , log               = require('ee-log')
        , DiscoveryResponse = require('ee-soa-discovery-response')
        , SOADiscovery      = require('ee-soa-discovery');



    module.exports = new Class({
        inherits: SOADiscovery


        , discover: function(application, service, callback) {
            callback(null, new DiscoveryResponse({
                  status: DiscoveryResponse.statuses.Found
                , transport: DiscoveryResponse.transports.Local
            }));
        }
    });
}();
