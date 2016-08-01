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
    });
});
// Retrieve Job Category Detail
// categoryClient.retrieveCategoryDetail(5007).then((response) => {
//     console.log(response.CanRelist);
// });

// let listingClient = new ListingProxy.ListingClient();
// let createListingRequest: CreateListing.Request = {
//     Category: "5007",
//     Title: "Test Job",
//     Description: [ "Test Description of Test Job" ],
//     IsClassified: true,
//     IsFeatured: false,
//     Attributes: [],
//     ExternalReferenceId: "ref",
//     ReturnListingDetails: true,
//     EmbeddedContent: { YouTubeVideoKey: "YouTube Key" },
//     IsBranded: false,
//     ShortDescription: "Short Description"
// };