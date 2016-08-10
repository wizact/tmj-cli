"use strict";
var express = require("express");
var ProxyModule_1 = require("../ProxyModule");
exports.router = express.Router();
exports.router.route("/").post(function (req, res, next) {
    var listingClient = new ProxyModule_1.ListingProxy.ListingClient(req["user"]);
    listingClient.createListingFee(req.body).then(function (result) {
        res.status(result.StatusCode).json(result.Response);
    }).catch(function (err) {
        res.status(400).json(err.message);
    });
});
exports.router.route("/").put(function (req, res, next) {
    var listingClient = new ProxyModule_1.ListingProxy.ListingClient(req["user"]);
    listingClient.editListingFee(req.body).then(function (result) {
        res.status(result.StatusCode).json(result.Response);
    }).catch(function (err) {
        res.status(400).json(err.message);
    });
});
exports.router.route("/relist").post(function (req, res, next) {
    var listingClient = new ProxyModule_1.ListingProxy.ListingClient(req["user"]);
    listingClient.relistListingFee(req.body).then(function (result) {
        res.status(result.StatusCode).json(result.Response);
    }).catch(function (err) {
        res.status(400).json(err.message);
    });
});
exports.router.route("/relistWithEdit").post(function (req, res, next) {
    var listingClient = new ProxyModule_1.ListingProxy.ListingClient(req["user"]);
    listingClient.relistWithEditListingFee(req.body).then(function (result) {
        res.status(result.StatusCode).json(result.Response);
    }).catch(function (err) {
        res.status(400).json(err.message);
    });
});
//# sourceMappingURL=fee.js.map