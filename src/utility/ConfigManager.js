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
            this.loadConfigFile(configPath);
        };
        Configuration.prototype.getConfigPath = function () {
            var scriptPath = process.argv[1];
            var dirPath = path.dirname(scriptPath);
            var relativePath = "";
            for (var index = 0; index < 5; index++) {
                var upFolder = "..";
                var configPath = path.normalize("" + dirPath + path.sep + relativePath + "tmj-cli.json");
                if (fs.existsSync(configPath)) {
                    return configPath;
                }
                relativePath = relativePath + ".." + path.sep;
            }
            throw new Error("tmj-cli config file cannot be found.");
        };
        Configuration.prototype.loadConfigFile = function (configPath) {
            var loadedConfig = JSON.parse(fs.readFileSync(configPath, "utf8"));
            Configuration.localConfig[Environment.Sandbox] = loadedConfig["sandbox"];
            Configuration.localConfig[Environment.Production] = loadedConfig["production"];
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