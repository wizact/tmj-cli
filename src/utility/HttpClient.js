"use strict";
var request = require("request");
var Promise = require("bluebird");
var requestAsync = Promise.promisifyAll(request);
var HttpClient = (function () {
    function HttpClient() {
    }
    HttpClient.prototype.get = function (uri, header) {
        var _this = this;
        var getOptions = {};
        if (!!header) {
            getOptions.headers = { "Authorization": header };
        }
        return requestAsync.getAsync(uri, getOptions)
            .then(function (result) {
            if ((result !== undefined &&
                result).headers["content-type"] !== null &&
                ((result.headers["content-type"]).indexOf("application/json") < 0)) {
                return result.body;
            }
            var response = _this.transform(result.body);
            return response;
        })
            .catch(function (err) {
            throw new Error(err);
        });
    };
    HttpClient.prototype.post = function (uri, requestBody) {
        var _this = this;
        var postOptions = {};
        postOptions.body = JSON.stringify(requestBody);
        return requestAsync.postAsync(uri, postOptions)
            .then(function (result) {
            var response = _this.transform(result.body);
            return response;
        })
            .catch(function (err) {
            throw new Error(err);
        });
    };
    HttpClient.prototype.transform = function (responseBody) {
        return JSON.parse(responseBody);
    };
    return HttpClient;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HttpClient;
//# sourceMappingURL=HttpClient.js.map