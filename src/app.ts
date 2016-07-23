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

// listingClient.createListing(createListingRequest).then((createListingResponse: CreateListing.Response) => console.log(createListingResponse));

// import * as https from "https";
// import * as fs from "fs";

// const options: https.ServerOptions = {
//   key: fs.readFileSync("./cert/key.pem"),
//   cert: fs.readFileSync("./cert/cert.pem")
// };

// https.createServer(options, (req, res) => {
//   res.writeHead(200);
//   res.end("hello world\n");
// }).listen(8000);

import { TMAuth } from "./utility/TMAuth";
let tmAuth = new TMAuth();
tmAuth.RequestToken().then(rt => {
  // Should redirect to this Url
  console.log(tmAuth.GetAuthorizeUri(rt));
}).catch(e => { throw e; });
