// Clients
import  { 
            CategoryProxy,
            ListingProxy 
        } from "./ProxyModule";

// Schemas
import  { 
            RetrieveCategory, 
            RetrieveJobCategory, 
            CreateListing 
        } from "./SchemaModule";

import { ConfigManager } from "./utility/ConfigManager";

// Loading config values
let config = new ConfigManager.Configuration();
config.setEnvrionment(ConfigManager.Environment.Sandbox);

let categoryClient = new CategoryProxy.CategoryClient();

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

let listingClient = new ListingProxy.ListingClient();
let createListingRequest: CreateListing.Request = {
    Category: "5007",
    Title: "Test Job",
    Description: [ "Test Description of Test Job" ],
    IsClassified: true,
    IsFeatured: false,
    Attributes: [],
    ExternalReferenceId: "ref",
    ReturnListingDetails: true,
    EmbeddedContent: { YouTubeVideoKey: "YouTube Key" },
    IsBranded: false,
    ShortDescription: "Short Description"
};

listingClient.createListing(createListingRequest).then((createListingResponse: CreateListing.Response) => console.log(createListingResponse));