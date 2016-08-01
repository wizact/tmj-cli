"use strict";
var express = require("express");
var ProxyModule_1 = require("../ProxyModule");
exports.router = express.Router();
exports.router.route("/:categoryId?").get(function (req, res, next) {
    var categoryId = (req.params && req.params.categoryId) ? req.params.categoryId : 5000;
    var catClient = new ProxyModule_1.CategoryProxy.CategoryClient();
    catClient.retrieveGeneralCategory(categoryId).then(function (result) {
        res.status(result.StatusCode).json(result.Response);
    });
});
//# sourceMappingURL=category.js.map