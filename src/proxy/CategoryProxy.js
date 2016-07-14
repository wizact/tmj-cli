"use strict";
var HttpClient_1 = require("../utility/HttpClient");
var ConfigManager_1 = require("../utility/ConfigManager");
var CategoryProxy;
(function (CategoryProxy) {
    var CategoryClient = (function () {
        function CategoryClient(configManager) {
            CategoryClient.httpClient = new HttpClient_1.default();
            CategoryClient.configManager = configManager || new ConfigManager_1.ConfigManager.Configuration();
            CategoryClient.configData = CategoryClient.configManager.get();
        }
        CategoryClient.prototype.retrieveGeneralCategory = function (categoryNumber) {
            var servicePath = "Categories";
            var apiUri = CategoryClient.configData.ApiUri;
            return CategoryClient.httpClient.get(apiUri + "/v1/" + servicePath + "/" + categoryNumber + ".json");
        };
        CategoryClient.prototype.retrieveJobCategory = function () {
            var servicePath = "Categories";
            var apiUri = CategoryClient.configData.ApiUri;
            return CategoryClient.httpClient.get(apiUri + "/v1/" + servicePath + "/Jobs.json");
        };
        CategoryClient.prototype.retrieveCategoryDetail = function (categoryNumber) {
            var servicePath = "Categories";
            var apiUri = CategoryClient.configData.ApiUri;
            return CategoryClient.httpClient.get(apiUri + "/v1/" + servicePath + "/" + categoryNumber + "/Details.json");
        };
        return CategoryClient;
    }());
    CategoryProxy.CategoryClient = CategoryClient;
})(CategoryProxy = exports.CategoryProxy || (exports.CategoryProxy = {}));
//# sourceMappingURL=CategoryProxy.js.map