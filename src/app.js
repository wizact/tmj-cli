"use strict";
var ProxyModule_1 = require("./ProxyModule");
var ConfigManager_1 = require("./utility/ConfigManager");
var config = new ConfigManager_1.ConfigManager.Configuration();
config.setEnvrionment(ConfigManager_1.ConfigManager.Environment.Sandbox);
var categoryClient = new ProxyModule_1.CategoryProxy.CategoryClient();
var https = require("https");
var fs = require("fs");
var options = {
    key: fs.readFileSync("./cert/key.pem"),
    cert: fs.readFileSync("./cert/cert.pem")
};
https.createServer(options, function (req, res) {
    res.writeHead(200);
    res.end("hello world\n");
}).listen(8000);
//# sourceMappingURL=app.js.map