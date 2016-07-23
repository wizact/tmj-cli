"use strict";
var HttpClient_1 = require("./HttpClient");
var TMAuthData_1 = require("./TMAuthData");
var ConfigManager_1 = require("../utility/ConfigManager");
var TMAuth = (function () {
    function TMAuth(configManager) {
        TMAuth.configManager = configManager || new ConfigManager_1.ConfigManager.Configuration();
        TMAuth.configData = TMAuth.configManager.get();
        TMAuth.httpClient = new HttpClient_1.default();
        this.authData = {
            consumerKey: TMAuth.configData.ConsumerKey,
            consumerSecret: TMAuth.configData.ConsumerSecret,
            authVersion: TMAuthData_1.AuthVersion,
            signatureMethod: TMAuthData_1.SignatureMethodType
        };
    }
    TMAuth.prototype.generateNounce = function () {
        return Math.floor(Math.random() * 167772150).toString(16);
    };
    TMAuth.prototype.getEpoch = function () {
        return (new Date).getTime().toString();
    };
    TMAuth.prototype.getRequestTokenHeader = function () {
        return "OAuth oauth_consumer_key=" + this.authData.consumerKey + ", oauth_version=" + this.authData.authVersion + ", oauth_timestamp=" + this.getEpoch() + ", oauth_nonce=" + this.generateNounce() + ", oauth_signature_method=" + TMAuthData_1.SignatureMethodType + ", oauth_signature=" + TMAuth.configData.ConsumerSecret + "%26";
    };
    TMAuth.prototype.RequestToken = function () {
        var requestTokenUri = TMAuth.configData.OAuthRequestTokenUri + "?" + TMAuthData_1.Scope;
        var header = this.getRequestTokenHeader();
        return TMAuth.httpClient.get(requestTokenUri, header).then(function (rt) {
            var response = {};
            return response;
        });
    };
    return TMAuth;
}());
exports.TMAuth = TMAuth;
//# sourceMappingURL=TMAuth.js.map