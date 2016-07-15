"use strict";
var HttpClient_1 = require("../utility/HttpClient");
var ConfigManager_1 = require("../utility/ConfigManager");
var ListingProxy;
(function (ListingProxy) {
    var ListingClient = (function () {
        function ListingClient(configManager) {
            ListingClient.httpClient = new HttpClient_1.default();
            ListingClient.configManager = configManager || new ConfigManager_1.ConfigManager.Configuration();
            ListingClient.configData = ListingClient.configManager.get();
        }
        ListingClient.prototype.createListing = function (request) {
            var servicePath = "Selling";
            var apiUri = ListingClient.configData.ApiUri;
            return ListingClient.httpClient.post(apiUri + "/v1/" + servicePath + ".json", request);
        };
        return ListingClient;
    }());
    ListingProxy.ListingClient = ListingClient;
})(ListingProxy = exports.ListingProxy || (exports.ListingProxy = {}));
//# sourceMappingURL=ListingProxy.js.map