"use strict";
var bodyParser = require("body-parser");
var express = require("express");
var fs = require("fs");
var https = require("https");
var session = require("express-session");
var expressjwt = require("express-jwt");
var authRoute = require("./routes/auth");
var catRoute = require("./routes/category");
var memberRouter = require("./routes/member");
var statusRoute = require("./routes/status");
var watchlistRouter = require("./routes/watchlist");
var ConfigManager_1 = require("./utility/ConfigManager");
var config = new ConfigManager_1.ConfigManager.Configuration();
config.setEnvrionment(ConfigManager_1.ConfigManager.Environment.Sandbox);
var secretKey = new ConfigManager_1.ConfigManager.Configuration().get().SecretKey;
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ resave: false, saveUninitialized: false, secret: secretKey }));
app.use(expressjwt({ secret: secretKey }).unless({ path: ["/auth", /\/category/i] }));
app.use("/auth", authRoute.router);
app.use("/category", catRoute.router);
app.use("/member", memberRouter.router);
app.use("/status", statusRoute.router);
app.use("/watchlist", watchlistRouter.router);
app.use(function (err, req, res, next) {
    if (err.name === "UnauthorizedError") {
        res.status(401).json("No authorization token was found");
    }
});
var options = {
    key: fs.readFileSync("./src/cert/key.pem"),
    cert: fs.readFileSync("./src/cert/cert.pem")
};
var server = https.createServer(options, app).listen(process.env.PORT || 8080);
//# sourceMappingURL=app.js.map