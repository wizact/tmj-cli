"use strict";
var express = require("express");
var ProxyModule_1 = require("../ProxyModule");
exports.router = express.Router();
exports.router.route("/:memberId").get(function (req, res, next) {
    var memberId = req.params.memberId;
    var memberClient = new ProxyModule_1.MemberProxy.MemberClient(req["user"]);
    memberClient.retrieveMember(memberId).then(function (result) {
        res.status(result.StatusCode).json(result.Response);
    });
});
//# sourceMappingURL=member.js.map