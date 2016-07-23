"use strict";
var ProxyModule_1 = require("./ProxyModule");
var ConfigManager_1 = require("./utility/ConfigManager");
var config = new ConfigManager_1.ConfigManager.Configuration();
config.setEnvrionment(ConfigManager_1.ConfigManager.Environment.Sandbox);
var categoryClient = new ProxyModule_1.CategoryProxy.CategoryClient();
var TMAuth_1 = require("./utility/TMAuth");
var tmAuth = new TMAuth_1.TMAuth();
tmAuth.RequestToken().then(function (rt) {
    console.log(tmAuth.GetAuthorizeUri(rt));
}).catch(function (e) { throw e; });
//# sourceMappingURL=app.js.map