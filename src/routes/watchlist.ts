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
    }).catch(err => {
        res.status(400).json(err.message);
    });
});

router.route("/:listingId").post(function(req: express.Request, res: express.Response, next: Function) {
    let wlClient = new WatchlistProxy.WatchlistClient(<TMTokenBearerSingature>req["user"]);
    wlClient.addWatchlist(req.params.listingId).then(result => {
        res.status(result.StatusCode).json(result.Response);
    }).catch(err => {
        res.status(400).json(err.message);
    });
});

router.route("/:listingId").delete(function(req: express.Request, res: express.Response, next: Function) {
    let wlClient = new WatchlistProxy.WatchlistClient(<TMTokenBearerSingature>req["user"]);
    wlClient.removeWatchlist(req.params.listingId).then(result => {
        res.status(result.StatusCode).json(result.Response);
    }).catch(err => {
        res.status(400).json(err.message);
    });
});