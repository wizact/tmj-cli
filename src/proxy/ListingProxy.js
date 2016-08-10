"use strict";
var HttpClient_1 = require("../utility/HttpClient");
var ConfigManager_1 = require("../utility/ConfigManager");
var TMAuth_1 = require("../utility/TMAuth");
var ListingProxy;
(function (ListingProxy) {
    var ListingClient = (function () {
        function ListingClient(user, configManager) {
            ListingClient.httpClient = new HttpClient_1.default();
            ListingClient.configManager = configManager || new ConfigManager_1.ConfigManager.Configuration();
            ListingClient.configData = ListingClient.configManager.get();
            this.userAuthHeader = new TMAuth_1.TMAuth(ListingClient.configManager).GetUserAuthHeader(user);
        }
        ListingClient.prototype.createListing = function (request) {
            var servicePath = "Selling";
            var apiUri = ListingClient.configData.ApiUri;
            return ListingClient.httpClient.post(apiUri + "/v1/" + servicePath + ".json", request, this.userAuthHeader);
        };
        ListingClient.prototype.createListingFee = function (request) {
            var servicePath = "Selling/Fees";
            var apiUri = ListingClient.configData.ApiUri;
            return ListingClient.httpClient.post(apiUri + "/v1/" + servicePath + ".json", request, this.userAuthHeader);
        };
        ListingClient.prototype.editListing = function (request) {
            var servicePath = "Selling/Edit";
            var apiUri = ListingClient.configData.ApiUri;
            return ListingClient.httpClient.post(apiUri + "/v1/" + servicePath + ".json", request, this.userAuthHeader);
        };
        ListingClient.prototype.editListingFee = function (request) {
            var servicePath = "Selling/EditFees";
            var apiUri = ListingClient.configData.ApiUri;
            return ListingClient.httpClient.post(apiUri + "/v1/" + servicePath + ".json", request, this.userAuthHeader);
        };
        ListingClient.prototype.relistListingFee = function (request) {
            var servicePath = "Selling/RelistFees";
            var apiUri = ListingClient.configData.ApiUri;
            return ListingClient.httpClient.post(apiUri + "/v1/" + servicePath + ".json", request, this.userAuthHeader);
        };
        ListingClient.prototype.relistWithEditListingFee = function (request) {
            var servicePath = "Selling/RelistWithEditsFees";
            var apiUri = ListingClient.configData.ApiUri;
            return ListingClient.httpClient.post(apiUri + "/v1/" + servicePath + ".json", request, this.userAuthHeader);
        };
        ListingClient.prototype.sellSimilarListing = function (request) {
            var servicePath = "Selling/Similar";
            var apiUri = ListingClient.configData.ApiUri;
            return ListingClient.httpClient.post(apiUri + "/v1/" + servicePath + ".json", request, this.userAuthHeader);
        };
        ListingClient.prototype.relistListing = function (request) {
            var servicePath = "Selling/Relist";
            var apiUri = ListingClient.configData.ApiUri;
            return ListingClient.httpClient.post(apiUri + "/v1/" + servicePath + ".json", request, this.userAuthHeader);
        };
        ListingClient.prototype.relistWithEditListing = function (request) {
            var servicePath = "Selling/RelistWithEdits";
            var apiUri = ListingClient.configData.ApiUri;
            return ListingClient.httpClient.post(apiUri + "/v1/" + servicePath + ".json", request, this.userAuthHeader);
        };
        ListingClient.prototype.withdrawListing = function (request) {
            var servicePath = "Selling/Withdraw";
            var apiUri = ListingClient.configData.ApiUri;
            return ListingClient.httpClient.post(apiUri + "/v1/" + servicePath + ".json", request, this.userAuthHeader);
        };
        return ListingClient;
    }());
    ListingProxy.ListingClient = ListingClient;
})(ListingProxy = exports.ListingProxy || (exports.ListingProxy = {}));
//# sourceMappingURL=ListingProxy.js.map