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
            console.log(result.statusCode);
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
var httpClient = new HttpClient();
httpClient.get("https://api.tmsandbox.co.nz/v1/Categories/5000.json").then(function (result) { return console.log(result); });
//# sourceMappingURL=app.js.map