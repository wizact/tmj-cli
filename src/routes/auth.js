"use strict";
var express = require("express");
var jwt = require("jsonwebtoken");
var ConfigManager_1 = require("../utility/ConfigManager");
var TMAuth_1 = require("../utility/TMAuth");
exports.router = express.Router();
exports.router.route("/RequestToken").get(function (req, res, next) {
    var tmAuth = new TMAuth_1.TMAuth();
    tmAuth.RequestToken().then(function (rt) {
        var sess = req.session;
        if (rt.oauth_token_secret === "" || rt.oauth_token === "") {
            res.status(400).json("Cannot request token from TM oAuth");
        }
        sess["tokenSecret"] = rt.oauth_token_secret;
        res.status(200).end(tmAuth.GetAuthorizeUri(rt));
    }).catch(function (e) { throw e; });
});
exports.router.route("/AccessToken").get(function (req, res, next) {
    var oauthToken = req.query["oauth_token"];
    var oauthVerifier = req.query["oauth_verifier"];
    var tmAuth = new TMAuth_1.TMAuth();
    var sess = req.session;
    var authResponse = {
        oauth_token: oauthToken,
        oauth_verifier: oauthVerifier
    };
    var tokenSecret = sess["tokenSecret"];
    if (tokenSecret === undefined || tokenSecret === "") {
        res.status(400).json("Session expired");
    }
    if (!!(authResponse.oauth_token) && !!(authResponse.oauth_verifier)) {
        tmAuth.AccessToken(authResponse, tokenSecret).then(function (tokens) {
            var tokenBearerSignature = {
                oauth_token: tokens.oauth_token,
                oauth_token_secret: tokens.oauth_token_secret
            };
            var secretKey = new ConfigManager_1.ConfigManager.Configuration().get().SecretKey;
            var signature = jwt.sign(tokenBearerSignature, "text secret value", { algorithm: "HS256" });
            res.status(200).json(signature);
        }).catch(function (err) {
            res.status(400).json(err.message);
        });
    }
    else {
        res.status(400).json("Failed to authorize from TM oAuth");
    }
});
//# sourceMappingURL=auth.js.map