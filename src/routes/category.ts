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

router.route("/:categoryId?").get(function(req: express.Request, res: express.Response, next: Function) {
    const categoryId = (req.params && req.params.categoryId) ? req.params.categoryId : 5000;
    let catClient = new CategoryProxy.CategoryClient();
    catClient.retrieveGeneralCategory(categoryId).then(result => {
        res.status(result.StatusCode).json(result.Response);
    });
});

// import * as url from "url";

// Retrieve General Category
// categoryClient.retrieveGeneralCategory(5000).then((response) => { 
//     console.log(response.Subcategories[0].Name);
//     console.log(response.Subcategories[0].Path);
//     console.log(response.Subcategories[0].HasClassifieds);
//     console.log(response.Subcategories[0].Number); 
// });

// Retrieve Job Category
// categoryClient.retrieveJobCategory().then((response) => { 
//     console.log(response[0].Code);
//     console.log(response[0].Name);
//     console.log(response[0].SubCategories);
// });

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