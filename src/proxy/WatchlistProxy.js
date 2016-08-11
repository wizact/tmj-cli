"use strict";
var HttpClient_1 = require("../utility/HttpClient");
var ConfigManager_1 = require("../utility/ConfigManager");
var TMAuth_1 = require("../utility/TMAuth");
var WatchlistProxy;
(function (WatchlistProxy) {
    var WatchlistClient = (function () {
        function WatchlistClient(user, configManager) {
            WatchlistClient.httpClient = new HttpClient_1.default();
            WatchlistClient.configManager = configManager || new ConfigManager_1.ConfigManager.Configuration();
            WatchlistClient.configData = WatchlistClient.configManager.get();
            this.userAuthHeader = new TMAuth_1.TMAuth(WatchlistClient.configManager).GetUserAuthHeader(user);
        }
        WatchlistClient.prototype.retrieveWatchlist = function () {
            var servicePath = "MyTradeMe/Watchlist/All";
            var apiUri = WatchlistClient.configData.ApiUri;
            return WatchlistClient.httpClient.get(apiUri + "/v1/" + servicePath + ".json", this.userAuthHeader);
        };
        WatchlistClient.prototype.addWatchlist = function (listingId) {
            var servicePath = "MyTradeMe/WatchList/";
            var apiUri = WatchlistClient.configData.ApiUri;
            return WatchlistClient.httpClient.post(apiUri + "/v1/" + servicePath + listingId + ".json", null, this.userAuthHeader);
        };
        WatchlistClient.prototype.removeWatchlist = function (listingId) {
            var servicePath = "MyTradeMe/WatchList/";
            var apiUri = WatchlistClient.configData.ApiUri;
            return WatchlistClient.httpClient.delete(apiUri + "/v1/" + servicePath + listingId + ".json", this.userAuthHeader);
        };
        return WatchlistClient;
    }());
    WatchlistProxy.WatchlistClient = WatchlistClient;
})(WatchlistProxy = exports.WatchlistProxy || (exports.WatchlistProxy = {}));
//# sourceMappingURL=WatchlistProxy.js.map