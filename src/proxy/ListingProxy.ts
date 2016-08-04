import * as Promise from "bluebird";
import HttpClient from "../utility/HttpClient";
import { CanonicalResponse } from "../schema/CanonicalResponse";
import { ConfigManager } from "../utility/ConfigManager";
import { CreateListing } from "../schema/CreateListing";
import { TMTokenBearerSingature }   from "../utility/TMAuthData";
import { TMAuth }                   from "../utility/TMAuth";

export namespace ListingProxy {
    export class ListingClient {
        private static configManager: ConfigManager.IConfiguration;
        private static configData: ConfigManager.IConfigData;
        private static httpClient: HttpClient;
        private userAuthHeader: string;
        constructor(user: TMTokenBearerSingature, configManager?: ConfigManager.IConfiguration) {
            ListingClient.httpClient = new HttpClient();
            ListingClient.configManager = configManager || new ConfigManager.Configuration();
            ListingClient.configData = ListingClient.configManager.get();
            this.userAuthHeader = new TMAuth(ListingClient.configManager).GetUserAuthHeader(user); 
        }

        createListing(request: CreateListing.Request): Promise<CanonicalResponse<CreateListing.Response>> {
            let servicePath: string = "Selling";
            let apiUri: string = ListingClient.configData.ApiUri; 
            return ListingClient.httpClient.post<CreateListing.Request, CreateListing.Response>(`${apiUri}/v1/${servicePath}.json`, request, this.userAuthHeader);
        }
    }
}