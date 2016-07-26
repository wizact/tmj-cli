import * as express from "express";
import * as bodyParser from "body-parser";
import * as session from "express-session";
import * as https from "https";
import * as http from "http";
import * as fs from "fs";

// routes
import * as statusRoute from "./routes/status"; 

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ resave: false, saveUninitialized: false, secret: "text secret value"}));

app.use("/status", statusRoute.router);

const options: https.ServerOptions = {
  key: fs.readFileSync("./src/cert/key.pem"),
  cert: fs.readFileSync("./src/cert/cert.pem")
};

let server = https.createServer(options, app).listen(process.env.PORT || 8080);

/*
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
import * as url from "url";

// Loading config values
let config = new ConfigManager.Configuration();
config.setEnvrionment(ConfigManager.Environment.Sandbox);

let categoryClient = new CategoryProxy.CategoryClient();

*/


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


/*
import * as qs from "query-string";
import { TMAuthAuthorizeResponse } from "./utility/TMAuthData";



https.createServer(options, (req: http.IncomingMessage, res: http.ServerResponse) => {
   res.writeHead(200);
   let queryParams = qs.parse(req.url.replace("/", "").replace("?", ""));
   let authResponse = <TMAuthAuthorizeResponse>queryParams;
   if (!!(authResponse.oauth_token) && !!(authResponse.oauth_verifier)) {
     res.end(`${authResponse.oauth_token}, ${authResponse.oauth_verifier}`);
   } else {
     res.end("Something went wrong!");
   }
 }).listen(8080);
 */

// import { TMAuth } from "./utility/TMAuth";
// let tmAuth = new TMAuth();
// tmAuth.RequestToken().then(rt => {
//   // Should redirect to this Url
//   console.log(tmAuth.GetAuthorizeUri(rt));
// }).catch(e => { throw e; });
