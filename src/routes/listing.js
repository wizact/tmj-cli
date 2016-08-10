"use strict";
var express = require("express");
var ProxyModule_1 = require("../ProxyModule");
exports.router = express.Router();
exports.router.route("/").post(function (req, res, next) {
    var listingClient = new ProxyModule_1.ListingProxy.ListingClient(req["user"]);
    listingClient.createListing(req.body).then(function (result) {
        res.status(result.StatusCode).json(result.Response);
    }).catch(function (err) {
        res.status(400).json(err.message);
    });
});
exports.router.route("/").put(function (req, res, next) {
    var listingClient = new ProxyModule_1.ListingProxy.ListingClient(req["user"]);
    listingClient.editListing(req.body).then(function (result) {
        res.status(result.StatusCode).json(result.Response);
    }).catch(function (err) {
        res.status(400).json(err.message);
    });
});
exports.router.route("/").delete(function (req, res, next) {
    var listingClient = new ProxyModule_1.ListingProxy.ListingClient(req["user"]);
    req.body.Type = 2;
    listingClient.withdrawListing(req.body).then(function (result) {
        res.status(result.StatusCode).json(result.Response);
    }).catch(function (err) {
        res.status(400).json(err.message);
    });
});
exports.router.route("/clone").post(function (req, res, next) {
    var listingClient = new ProxyModule_1.ListingProxy.ListingClient(req["user"]);
    listingClient.sellSimilarListing(req.body).then(function (result) {
        res.status(result.StatusCode).json(result.Response);
    }).catch(function (err) {
        res.status(400).json(err.message);
    });
});
exports.router.route("/relist").post(function (req, res, next) {
    var listingClient = new ProxyModule_1.ListingProxy.ListingClient(req["user"]);
    listingClient.relistListing(req.body).then(function (result) {
        res.status(result.StatusCode).json(result.Response);
    }).catch(function (err) {
        res.status(400).json(err.message);
    });
});
exports.router.route("/relistWithEdit").post(function (req, res, next) {
    var listingClient = new ProxyModule_1.ListingProxy.ListingClient(req["user"]);
    listingClient.relistWithEditListing(req.body).then(function (result) {
        res.status(result.StatusCode).json(result.Response);
    }).catch(function (err) {
        res.status(400).json(err.message);
    });
});
//# sourceMappingURL=listing.js.map