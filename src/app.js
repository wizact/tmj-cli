"use strict";
var ProxyModule_1 = require("./ProxyModule");
var ConfigManager_1 = require("./utility/ConfigManager");
var config = new ConfigManager_1.ConfigManager.Configuration();
config.setEnvrionment(ConfigManager_1.ConfigManager.Environment.Sandbox);
var categoryClient = new ProxyModule_1.CategoryProxy.CategoryClient();
var listingClient = new ProxyModule_1.ListingProxy.ListingClient();
var createListingRequest = {
    Category: "5007",
    Title: "Test Job",
    Description: ["Test Description of Test Job"],
    IsClassified: true,
    IsFeatured: false,
    Attributes: [],
    ExternalReferenceId: "ref",
    ReturnListingDetails: true,
    EmbeddedContent: { YouTubeVideoKey: "YouTube Key" },
    IsBranded: false,
    ShortDescription: "Short Description"
};
listingClient.createListing(createListingRequest).then(function (createListingResponse) { return console.log(createListingResponse); });
//# sourceMappingURL=app.js.map