"use strict";
var express = require("express");
var ProxyModule_1 = require("../ProxyModule");
exports.router = express.Router();
exports.router.route("/").get(function (req, res, next) {
    var catClient = new ProxyModule_1.CategoryProxy.CategoryClient();
    catClient.retrieveJobCategory().then(function (result) {
        res.status(result.StatusCode).json(result.Response);
    }).catch(function (err) {
        res.status(500).json(err.message);
    });
});
exports.router.route("/:categoryId").get(function (req, res, next) {
    var categoryId = (req.params && req.params.categoryId) ? req.params.categoryId : 5000;
    var catClient = new ProxyModule_1.CategoryProxy.CategoryClient();
    catClient.retrieveGeneralCategory(categoryId).then(function (result) {
        res.status(result.StatusCode).json(result.Response);
    }).catch(function (err) {
        res.status(400).json(err.message);
    });
});
exports.router.route("/:categoryId/detail").get(function (req, res, next) {
    var categoryId = req.params.categoryId;
    var catClient = new ProxyModule_1.CategoryProxy.CategoryClient();
    catClient.retrieveCategoryDetail(categoryId).then(function (result) {
        res.status(result.StatusCode).json(result.Response);
    }).catch(function (err) {
        res.status(400).json(err.message);
    });
});
//# sourceMappingURL=category.js.map