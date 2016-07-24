"use strict";
var HttpClient_1 = require("./HttpClient");
var qs = require("query-string");
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
            signatureMethod: TMAuthData_1.SignatureMethodType,
            callbackUrl: TMAuth.configData.CallBackUrl
        };
    }
    TMAuth.prototype.generateNounce = function () {
        return Math.floor(Math.random() * 167772150).toString(16);
    };
    TMAuth.prototype.getEpoch = function () {
        return (new Date).getTime().toString();
    };
    TMAuth.prototype.getRequestTokenHeader = function () {
        return "OAuth oauth_callback=" + this.authData.callbackUrl + ", oauth_consumer_key=" + this.authData.consumerKey + ", oauth_version=" + this.authData.authVersion + ", oauth_timestamp=" + this.getEpoch() + ", oauth_nonce=" + this.generateNounce() + ", oauth_signature_method=" + TMAuthData_1.SignatureMethodType + ", oauth_signature=" + TMAuth.configData.ConsumerSecret + "%26";
    };
    TMAuth.prototype.RequestToken = function () {
        var requestTokenUri = TMAuth.configData.OAuthRequestTokenUri + "?" + TMAuthData_1.Scope;
        var header = this.getRequestTokenHeader();
        return TMAuth.httpClient.get(requestTokenUri, header).then(function (rt) {
            var response = {};
            var qsParts = qs.parse(rt);
            response.oauth_token = qsParts["oauth_token"];
            response.oauth_token_secret = qsParts["oauth_token_secret"];
            if (qsParts.oauth_token === undefined ||
                qsParts.oauth_token_secret === undefined) {
                throw new Error(rt);
            }
            return response;
        });
    };
    TMAuth.prototype.GetAuthorizeUri = function (authRequestTokenResponse) {
        var authorizeUri = TMAuth.configData.OAuthAuthorizeUri + "?oauth_token=" + authRequestTokenResponse.oauth_token;
        return authorizeUri;
    };
    TMAuth.prototype.getAccessTokenHeader = function (oAuthToken, oAuthVerifier, oAuthTokenSecret) {
        return "OAuth oauth_verifier=" + oAuthVerifier + ", oauth_consumer_key=" + TMAuth.configData.ConsumerKey + ", oauth_token=" + oAuthToken + ", oauth_version=" + this.authData.authVersion + ", oauth_timestamp=" + this.getEpoch() + ", oauth_nonce=" + this.generateNounce() + ", oauth_signature_method=" + TMAuthData_1.SignatureMethodType + ", oauth_signature=" + TMAuth.configData.ConsumerSecret + "%26" + oAuthTokenSecret;
    };
    TMAuth.prototype.AccessToken = function (oAuthToken, oAuthVerifier) {
        var accessTokenUri = "" + TMAuth.configData.OAuthAccessTokenUri;
        var oAuthTokenSecret = "";
        var header = this.getAccessTokenHeader(oAuthToken, oAuthVerifier, oAuthTokenSecret);
    };
    return TMAuth;
}());
exports.TMAuth = TMAuth;
//# sourceMappingURL=TMAuth.js.map