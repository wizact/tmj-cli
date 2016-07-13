"use strict";
var HttpClient_1 = require("../utility/HttpClient");
var RetrieveCategoryProxy;
(function (RetrieveCategoryProxy) {
    var RetrieveCategoryClient = (function () {
        function RetrieveCategoryClient() {
            RetrieveCategoryClient.httpClient = new HttpClient_1.default();
        }
        RetrieveCategoryClient.prototype.get = function (categoryNumber) {
            return RetrieveCategoryClient.httpClient.get("https://api.tmsandbox.co.nz/v1/Categories/" + categoryNumber + ".json");
        };
        return RetrieveCategoryClient;
    }());
    RetrieveCategoryProxy.RetrieveCategoryClient = RetrieveCategoryClient;
})(RetrieveCategoryProxy = exports.RetrieveCategoryProxy || (exports.RetrieveCategoryProxy = {}));
//# sourceMappingURL=RetrieveCategoryProxy.js.map