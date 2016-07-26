import * as bodyParser  from "body-parser";
import * as express     from "express";
import * as fs          from "fs";
import * as http        from "http";
import * as https       from "https";
import * as session     from "express-session";

// routes
import * as authRoute   from "./routes/auth";
import * as statusRoute from "./routes/status"; 

import { ConfigManager } from "./utility/ConfigManager";

// Loading config values
let config = new ConfigManager.Configuration();
config.setEnvrionment(ConfigManager.Environment.Sandbox);

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ resave: false, saveUninitialized: false, secret: "text secret value"}));

app.use("/auth", authRoute.router);
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

import * as url from "url";

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