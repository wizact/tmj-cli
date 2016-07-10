"use strict";
var request = require("request");
request.get("https://api.tmsandbox.co.nz/v1/Categories/5000.json", function (error, response, body) {
    console.log(response);
    var bodyResponse = JSON.parse(body);
    console.log(bodyResponse.Name);
});
console.log("test");
//# sourceMappingURL=app.js.map