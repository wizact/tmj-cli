"use strict";
var HttpClient_1 = require("../utility/HttpClient");
var ConfigManager_1 = require("../utility/ConfigManager");
var TMAuth_1 = require("../utility/TMAuth");
var MemberProxy;
(function (MemberProxy) {
    var MemberClient = (function () {
        function MemberClient(user, configManager) {
            MemberClient.httpClient = new HttpClient_1.default();
            MemberClient.configManager = configManager || new ConfigManager_1.ConfigManager.Configuration();
            MemberClient.configData = MemberClient.configManager.get();
            this.userAuthHeader = new TMAuth_1.TMAuth(MemberClient.configManager).GetUserAuthHeader(user);
        }
        MemberClient.prototype.retrieveMember = function (memberId) {
            var servicePath = "Member";
            var apiUri = MemberClient.configData.ApiUri;
            return MemberClient.httpClient.get(apiUri + "/v1/" + servicePath + "/" + memberId + "/Profile.json", this.userAuthHeader);
        };
        MemberClient.prototype.retrieveMemberSummary = function () {
            var servicePath = "MyTradeMe/Summary";
            var apiUri = MemberClient.configData.ApiUri;
            return MemberClient.httpClient.get(apiUri + "/v1/" + servicePath + ".json?return_member_profile=true", this.userAuthHeader);
        };
        return MemberClient;
    }());
    MemberProxy.MemberClient = MemberClient;
})(MemberProxy = exports.MemberProxy || (exports.MemberProxy = {}));
//# sourceMappingURL=MemberProxy.js.map