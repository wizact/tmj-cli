"use strict";
var HttpClient_1 = require("../utility/HttpClient");
var CategoryProxy;
(function (CategoryProxy) {
    var CategoryClient = (function () {
        function CategoryClient() {
            CategoryClient.httpClient = new HttpClient_1.default();
        }
        CategoryClient.prototype.retrieveGeneralCategory = function (categoryNumber) {
            var ApiPath = "Categories";
            return CategoryClient.httpClient.get("https://api.tmsandbox.co.nz/v1/" + ApiPath + "/" + categoryNumber + ".json");
        };
        return CategoryClient;
    }());
    CategoryProxy.CategoryClient = CategoryClient;
})(CategoryProxy = exports.CategoryProxy || (exports.CategoryProxy = {}));
//# sourceMappingURL=CategoryProxy.js.map