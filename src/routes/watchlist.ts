import * as express from "express";
import { TMTokenBearerSingature } from "../utility/TMAuthData";

// Clients
import  { WatchlistProxy } from "../ProxyModule";

// Schemas
import  { RetrieveWatchlist } from "../SchemaModule";

export let router = express.Router();

router.route("/").get(function(req: express.Request, res: express.Response, next: Function) {
    let wlClient = new WatchlistProxy.WatchlistClient(<TMTokenBearerSingature>req["user"]);
    wlClient.retrieveWatchlist().then(result => {
        res.status(result.StatusCode).json(result.Response);
    });
});
