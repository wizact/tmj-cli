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
//# sourceMappingURL=listing.js.map