import * as express from "express";
import { WatchlistProxy } from "../proxy/WatchlistProxy";
import { RetrieveWatchlist } from "../schema/RetrieveWatchlist";
import { TMTokenBearerSingature } from "../utility/TMAuthData";

export let router = express.Router();

router.route("/").get(function(req: express.Request, res: express.Response, next: Function) {
    let wlClient = new WatchlistProxy.WatchlistClient(<TMTokenBearerSingature>req["user"]);
    wlClient.retrieveWatchlist().then(result => {
        res.status(result.StatusCode).json(result.Response);
    });
});
