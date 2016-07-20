"use strict";
var path = require("path");
var fs = require("fs");
var ConfigManager;
(function (ConfigManager) {
    (function (Environment) {
        Environment[Environment["NotSet"] = 0] = "NotSet";
        Environment[Environment["Sandbox"] = 1] = "Sandbox";
        Environment[Environment["Production"] = 2] = "Production";
    })(ConfigManager.Environment || (ConfigManager.Environment = {}));
    var Environment = ConfigManager.Environment;
    var Configuration = (function () {
        function Configuration() {
            Configuration.localConfig[Environment.Sandbox] = { ApiUri: "https://api.tmsandbox.co.nz/", ConsumerKey: "", ConsumerSecret: "" };
            Configuration.localConfig[Environment.Production] = { ApiUri: "https://api.trademe.co.nz/", ConsumerKey: "", ConsumerSecret: "" };
        }
        Configuration.prototype.setEnvrionment = function (env) {
            if (Configuration.currentEnv !== Environment.NotSet) {
                throw new Error("Cannot reset environment");
            }
            if (env === Environment.NotSet) {
                throw new Error("Invalid environment");
            }
            Configuration.currentEnv = env;
            var configPath = this.getConfigPath();
            console.log(fs.readFileSync(configPath, "utf8"));
        };
        Configuration.prototype.getConfigPath = function () {
            var scriptPath = process.argv[1];
            var dirPath = path.dirname(scriptPath);
            return path.normalize("" + dirPath + path.sep + ".." + path.sep + "tmj-cli.json");
        };
        Configuration.prototype.get = function () {
            if (Configuration.currentEnv === Environment.NotSet) {
                throw new Error("Envrionment should be set first");
            }
            return Configuration.localConfig[Configuration.currentEnv];
        };
        Configuration.localConfig = {};
        Configuration.currentEnv = Environment.NotSet;
        return Configuration;
    }());
    ConfigManager.Configuration = Configuration;
})(ConfigManager = exports.ConfigManager || (exports.ConfigManager = {}));
//# sourceMappingURL=ConfigManager.js.map