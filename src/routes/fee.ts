import * as express from "express";
import { TMTokenBearerSingature } from "../utility/TMAuthData";

// Clients
import  { ListingProxy } from "../ProxyModule";

export let router = express.Router();

router.route("/").post(function(req: express.Request, res: express.Response, next: Function) {
    let listingClient = new ListingProxy.ListingClient(<TMTokenBearerSingature>req["user"]);
    listingClient.createListingFee(req.body).then(result => {
        res.status(result.StatusCode).json(result.Response);
    }).catch(err => {
        res.status(400).json(err.message);
    });
});

router.route("/").put(function(req: express.Request, res: express.Response, next: Function) {
    let listingClient = new ListingProxy.ListingClient(<TMTokenBearerSingature>req["user"]);
    listingClient.editListingFee(req.body).then(result => {
        res.status(result.StatusCode).json(result.Response);
    }).catch(err => {
        res.status(400).json(err.message);
    });
});