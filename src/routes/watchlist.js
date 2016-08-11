"use strict";
var express = require("express");
var ProxyModule_1 = require("../ProxyModule");
exports.router = express.Router();
exports.router.route("/").get(function (req, res, next) {
    var wlClient = new ProxyModule_1.WatchlistProxy.WatchlistClient(req["user"]);
    wlClient.retrieveWatchlist().then(function (result) {
        res.status(result.StatusCode).json(result.Response);
    }).catch(function (err) {
        res.status(400).json(err.message);
    });
});
exports.router.route("/:listingId").post(function (req, res, next) {
    var wlClient = new ProxyModule_1.WatchlistProxy.WatchlistClient(req["user"]);
    wlClient.addWatchlist(req.params.listingId).then(function (result) {
        res.status(result.StatusCode).json(result.Response);
    }).catch(function (err) {
        res.status(400).json(err.message);
    });
});
exports.router.route("/:listingId").delete(function (req, res, next) {
    var wlClient = new ProxyModule_1.WatchlistProxy.WatchlistClient(req["user"]);
    wlClient.removeWatchlist(req.params.listingId).then(function (result) {
        res.status(result.StatusCode).json(result.Response);
    }).catch(function (err) {
        res.status(400).json(err.message);
    });
});
//# sourceMappingURL=watchlist.js.map