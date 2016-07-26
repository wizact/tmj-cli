"use strict";
var bodyParser = require("body-parser");
var express = require("express");
var fs = require("fs");
var https = require("https");
var session = require("express-session");
var authRoute = require("./routes/auth");
var statusRoute = require("./routes/status");
var ConfigManager_1 = require("./utility/ConfigManager");
var config = new ConfigManager_1.ConfigManager.Configuration();
config.setEnvrionment(ConfigManager_1.ConfigManager.Environment.Sandbox);
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ resave: false, saveUninitialized: false, secret: "text secret value" }));
app.use("/auth", authRoute.router);
app.use("/status", statusRoute.router);
var options = {
    key: fs.readFileSync("./src/cert/key.pem"),
    cert: fs.readFileSync("./src/cert/cert.pem")
};
var server = https.createServer(options, app).listen(process.env.PORT || 8080);
//# sourceMappingURL=app.js.map