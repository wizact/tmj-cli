"use strict";
var express = require("express");
var ProxyModule_1 = require("../ProxyModule");
exports.router = express.Router();
exports.router.route("/").get(function (req, res, next) {
    var wlClient = new ProxyModule_1.WatchlistProxy.WatchlistClient(req["user"]);
    wlClient.retrieveWatchlist().then(function (result) {
        res.status(result.StatusCode).json(result.Response);
    });
});
//# sourceMappingURL=watchlist.js.map