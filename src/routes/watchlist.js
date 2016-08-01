"use strict";
var express = require("express");
var WatchlistProxy_1 = require("../proxy/WatchlistProxy");
exports.router = express.Router();
exports.router.route("/").get(function (req, res, next) {
    var wlClient = new WatchlistProxy_1.WatchlistProxy.WatchlistClient(req["user"]);
    wlClient.retrieveWatchlist().then(function (result) {
        res.status(result.StatusCode).json(result.Response);
    });
});
//# sourceMappingURL=watchlist.js.map