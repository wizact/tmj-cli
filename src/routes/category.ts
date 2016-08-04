import * as express from "express";
import { TMTokenBearerSingature } from "../utility/TMAuthData";

// Clients
import  { CategoryProxy } from "../ProxyModule";

// Schemas
import  { 
            RetrieveCategory, 
            RetrieveJobCategory 
        } from "../SchemaModule";

export let router = express.Router();

// TODO: Sanitize 404. Should replace the response.
router.route("/").get(function(req: express.Request, res: express.Response, next: Function) {
    let catClient = new CategoryProxy.CategoryClient();
    catClient.retrieveJobCategory().then(result => {
        res.status(result.StatusCode).json(result.Response);
    }).catch(err => {
        res.status(500).json(err.message);
    });
});

/* 
 * Returns 400 if the category is not valid with the following:
 * {
 * "Request": "https://api.tmsandbox.co.nz/v1/Categories/5003.json",
 * "ErrorDescription": "Category 5003 was not found"
 * } 
 */
router.route("/:categoryId").get(function(req: express.Request, res: express.Response, next: Function) {
    const categoryId = (req.params && req.params.categoryId) ? req.params.categoryId : 5000;
    let catClient = new CategoryProxy.CategoryClient();
    catClient.retrieveGeneralCategory(categoryId).then(result => {
        res.status(result.StatusCode).json(result.Response);
    }).catch(err => {
        res.status(400).json(err.message);
    });
});

/* 
 * Returns 400 if the category is not valid with the following:
 * {
 * "Request": "https://api.tmsandbox.co.nz/v1/Categories/5003.json",
 * "ErrorDescription": "Category 5003 was not found"
 * } 
 */
router.route("/:categoryId/detail").get(function(req: express.Request, res: express.Response, next: Function) {
    const categoryId = req.params.categoryId;
    let catClient = new CategoryProxy.CategoryClient();
    catClient.retrieveCategoryDetail(categoryId).then(result => {
        res.status(result.StatusCode).json(result.Response);
    }).catch(err => {
        res.status(400).json(err.message);
    });
});