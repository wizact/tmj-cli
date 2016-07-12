"use strict";
var request = require("request");
var Promise = require("bluebird");
var requestAsync = Promise.promisifyAll(request);
requestAsync.getAsync("https://api.tmsandbox.co.nz/v1/Categories/5000.json", function (error, response, body) {
    console.log(response);
    var bodyResponse = JSON.parse(body);
    console.log(bodyResponse.Name);
});
//# sourceMappingURL=app.js.map