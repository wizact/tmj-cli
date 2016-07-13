"use strict";
var ProxyModule_1 = require("./ProxyModule");
var ConfigManager_1 = require("./utility/ConfigManager");
var config = new ConfigManager_1.ConfigManager.Configuration();
config.setEnvrionment(ConfigManager_1.ConfigManager.Environment.Sandbox);
var t = new ProxyModule_1.CategoryProxy.CategoryClient();
t.retrieveGeneralCategory(5000).then(function (res) { return console.log(res.Name); });
//# sourceMappingURL=app.js.map