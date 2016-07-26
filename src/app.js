"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var https = require("https");
var fs = require("fs");
var statusRoute = require("./routes/status");
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ resave: false, saveUninitialized: false, secret: "text secret value" }));
app.use("/status", statusRoute.router);
var options = {
    key: fs.readFileSync("./src/cert/key.pem"),
    cert: fs.readFileSync("./src/cert/cert.pem")
};
var server = https.createServer(options, app).listen(process.env.PORT || 8080);
//# sourceMappingURL=app.js.map