import * as express from "express";
import { TMTokenBearerSingature } from "../utility/TMAuthData";

// Clients
import  { ListingProxy } from "../ProxyModule";

export let router = express.Router();

router.route("/").post(function(req: express.Request, res: express.Response, next: Function) {
    let listingClient = new ListingProxy.ListingClient(<TMTokenBearerSingature>req["user"]);
    listingClient.createListing(req.body).then(result => {
        res.status(result.StatusCode).json(result.Response);
    }).catch(err => {
        res.status(400).json(err.message);
    });
});

router.route("/").put(function(req: express.Request, res: express.Response, next: Function) {
    let listingClient = new ListingProxy.ListingClient(<TMTokenBearerSingature>req["user"]);
    listingClient.editListing(req.body).then(result => {
        res.status(result.StatusCode).json(result.Response);
    }).catch(err => {
        res.status(400).json(err.message);
    });
});

router.route("/").delete(function(req: express.Request, res: express.Response, next: Function) {
    let listingClient = new ListingProxy.ListingClient(<TMTokenBearerSingature>req["user"]);
    req.body.Type = 2; // This should be always Unsold for Job listings
    listingClient.withdrawListing(req.body).then(result => {
        res.status(result.StatusCode).json(result.Response);
    }).catch(err => {
        res.status(400).json(err.message);
    });
});

router.route("/clone").post(function(req: express.Request, res: express.Response, next: Function) {
    let listingClient = new ListingProxy.ListingClient(<TMTokenBearerSingature>req["user"]);
    listingClient.sellSimilarListing(req.body).then(result => {
        res.status(result.StatusCode).json(result.Response);
    }).catch(err => {
        res.status(400).json(err.message);
    });
});

router.route("/relist").post(function(req: express.Request, res: express.Response, next: Function) {
    let listingClient = new ListingProxy.ListingClient(<TMTokenBearerSingature>req["user"]);
    listingClient.relistListing(req.body).then(result => {
        res.status(result.StatusCode).json(result.Response);
    }).catch(err => {
        res.status(400).json(err.message);
    });
});

router.route("/relistWithEdit").post(function(req: express.Request, res: express.Response, next: Function) {
    let listingClient = new ListingProxy.ListingClient(<TMTokenBearerSingature>req["user"]);
    listingClient.relistWithEditListing(req.body).then(result => {
        res.status(result.StatusCode).json(result.Response);
    }).catch(err => {
        res.status(400).json(err.message);
    });
});