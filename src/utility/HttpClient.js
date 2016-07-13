"use strict";
var request = require("request");
var Promise = require("bluebird");
var requestAsync = Promise.promisifyAll(request);
var HttpClient = (function () {
    function HttpClient() {
    }
    HttpClient.prototype.get = function (uri) {
        var _this = this;
        return requestAsync.getAsync(uri)
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