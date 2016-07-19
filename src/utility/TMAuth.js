"use strict";
var TMAuthData_1 = require("./TMAuthData");
var ConfigManager_1 = require("../utility/ConfigManager");
var TMAuth = (function () {
    function TMAuth(configManager) {
        TMAuth.configManager = configManager || new ConfigManager_1.ConfigManager.Configuration();
        TMAuth.configData = TMAuth.configManager.get();
        console.log(TMAuth.configData.ApiUri);
    }
    TMAuth.prototype.generateNounce = function () {
        var randomNumber = Math.random() * 10000;
        return randomNumber.toString();
    };
    TMAuth.prototype.RequestToken = function () {
        var requestTokenAuthHeader = {
            consumerKey: TMAuth.configData.ConsumerKey,
            consumerSecret: TMAuth.configData.ConsumerSecret,
            authVersion: TMAuthData_1.AuthVersion,
            nounce: this.generateNounce(),
            signatureMethod: TMAuthData_1.SignatureMethodType
        };
    };
    return TMAuth;
}());
exports.TMAuth = TMAuth;
//# sourceMappingURL=TMAuth.js.map