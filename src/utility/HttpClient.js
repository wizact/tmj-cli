"use strict";
var request = require("request");
var Promise = require("bluebird");
var CanonicalResponse_1 = require("../schema/CanonicalResponse");
var requestAsync = Promise.promisifyAll(request);
var HttpClient = (function () {
    function HttpClient() {
    }
    HttpClient.prototype.get = function (uri, header) {
        var _this = this;
        var getOptions = this.createRequestOptions();
        getOptions = this.setAuthHeader(getOptions, header);
        return requestAsync.getAsync(uri, getOptions)
            .then(function (result) {
            var cr = new CanonicalResponse_1.CanonicalResponse();
            cr.StatusCode = result.statusCode;
            cr.Response = _this.map(result);
            return cr;
        })
            .catch(function (err) {
            throw new Error(err);
        });
    };
    HttpClient.prototype.post = function (uri, requestBody, header) {
        var _this = this;
        var postOptions = this.createRequestOptions();
        postOptions = this.setAuthHeader(postOptions, header);
        postOptions = this.setBody(postOptions);
        return requestAsync.postAsync(uri, postOptions)
            .then(function (result) {
            var cr = new CanonicalResponse_1.CanonicalResponse();
            cr.StatusCode = result.statusCode;
            cr.Response = _this.map(result);
            return cr;
        })
            .catch(function (err) {
            throw new Error(err);
        });
    };
    HttpClient.prototype.createRequestOptions = function () {
        var requestOptions = {};
        return requestOptions;
    };
    HttpClient.prototype.setAuthHeader = function (requestOptions, header) {
        if (!!header) {
            requestOptions.headers = { "Authorization": header };
        }
        return requestOptions;
    };
    HttpClient.prototype.setBody = function (requestOptions, body) {
        if (!!body) {
            requestOptions.body = JSON.stringify(body);
        }
        return requestOptions;
    };
    HttpClient.prototype.map = function (responseBody) {
        if ((responseBody !== undefined &&
            responseBody).headers["content-type"] !== null &&
            ((responseBody.headers["content-type"]).indexOf("application/json") < 0)) {
            return responseBody.body;
        }
        var response = this.transform(responseBody.body);
        return response;
    };
    HttpClient.prototype.transform = function (responseBody) {
        return JSON.parse(responseBody);
    };
    return HttpClient;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HttpClient;
//# sourceMappingURL=HttpClient.js.map