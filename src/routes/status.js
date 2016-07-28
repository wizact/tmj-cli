"use strict";
var express = require("express");
exports.router = express.Router();
exports.router.route("/:node?").get(function (req, res, next) {
    var nodeValue = (req.params && req.params.node) ? req.params.node : "";
    var date = new Date();
    var message = { "status": date + " " + nodeValue };
    console.log(req["user"]);
    res.json(message);
});
//# sourceMappingURL=status.js.map