"use strict";
var express = require("express");
var ProxyModule_1 = require("../ProxyModule");
exports.router = express.Router();
exports.router.route("/:memberId(\\d+)").get(function (req, res, next) {
    var memberId = req.params.memberId;
    var memberClient = new ProxyModule_1.MemberProxy.MemberClient(req["user"]);
    memberClient.retrieveMember(memberId).then(function (result) {
        res.status(result.StatusCode).json(result.Response);
    });
});
exports.router.route("/summary").get(function (req, res, next) {
    var memberClient = new ProxyModule_1.MemberProxy.MemberClient(req["user"]);
    memberClient.retrieveMemberSummary().then(function (result) {
        res.status(result.StatusCode).json(result.Response);
    });
});
//# sourceMappingURL=member.js.map