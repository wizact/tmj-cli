"use strict";
var ProxyModule_1 = require("./ProxyModule");
var ConfigManager_1 = require("./utility/ConfigManager");
var config = new ConfigManager_1.ConfigManager.Configuration();
config.setEnvrionment(ConfigManager_1.ConfigManager.Environment.Sandbox);
var categoryClient = new ProxyModule_1.CategoryProxy.CategoryClient();
var https = require("https");
var fs = require("fs");
var qs = require("query-string");
var options = {
    key: fs.readFileSync("./src/cert/key.pem"),
    cert: fs.readFileSync("./src/cert/cert.pem")
};
https.createServer(options, function (req, res) {
    res.writeHead(200);
    var queryParams = qs.parse(req.url.replace("/", "").replace("?", ""));
    var authResponse = queryParams;
    if (!!(authResponse.oauth_token) && !!(authResponse.oauth_verifier)) {
        res.end(authResponse.oauth_token + ", " + authResponse.oauth_verifier);
    }
    else {
        res.end("Something went wrong!");
    }
}).listen(8080);
//# sourceMappingURL=app.js.map