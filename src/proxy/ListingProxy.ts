import * as Promise from "bluebird";
import { CreateListing } from "../schema/CreateListing";
import HttpClient from "../utility/HttpClient";
import { ConfigManager } from "../utility/ConfigManager";

export namespace ListingProxy {
    export class ListingClient {
        private static httpClient: HttpClient;
        private static configManager: ConfigManager.IConfiguration;
        private static configData: ConfigManager.IConfigData;
        constructor(configManager?: ConfigManager.IConfiguration) {
            ListingClient.httpClient = new HttpClient();
            ListingClient.configManager = configManager || new ConfigManager.Configuration();
            ListingClient.configData = ListingClient.configManager.get(); 
        }

        createListing(request: CreateListing.Request): Promise<CreateListing.Response> {
            let servicePath: string = "Selling";
            let apiUri: string = ListingClient.configData.ApiUri; 
            return ListingClient.httpClient.post<CreateListing.Request, CreateListing.Response>(`${apiUri}/v1/${servicePath}.json`, request);
        }
    }
}