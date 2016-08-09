import * as bodyParser      from "body-parser";
import * as express         from "express";
import * as fs              from "fs";
import * as http            from "http";
import * as https           from "https";
import * as session         from "express-session";
import * as expressjwt      from "express-jwt";

// routes
import * as authRoute       from "./routes/auth";
import * as catRoute        from "./routes/category";
import * as feeRoute        from "./routes/fee";
import * as listingRoute    from "./routes/listing";
import * as memberRouter    from "./routes/member";
import * as statusRoute     from "./routes/status"; 
import * as watchlistRouter from "./routes/watchlist";

import { ConfigManager } from "./utility/ConfigManager";

// Loading config values
let config = new ConfigManager.Configuration();
config.setEnvrionment(ConfigManager.Environment.Sandbox);
let secretKey = new ConfigManager.Configuration().get().SecretKey;


let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ resave: false, saveUninitialized: false, secret: secretKey}));
app.use(expressjwt( { secret: secretKey }).unless( { path: [/\/auth/i, /\/category/i] } ));

app.use("/auth", authRoute.router);
app.use("/category", catRoute.router);
app.use("/fee", feeRoute.router);
app.use("/listing", listingRoute.router);
app.use("/member", memberRouter.router);
app.use("/status", statusRoute.router);
app.use("/watchlist", watchlistRouter.router);

app.use(function (err: Error, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401).json("No authorization token was found");
  }
});

const options: https.ServerOptions = {
  key: fs.readFileSync("./src/cert/key.pem"),
  cert: fs.readFileSync("./src/cert/cert.pem")
};

let server = https.createServer(options, app).listen(process.env.PORT || 8080);