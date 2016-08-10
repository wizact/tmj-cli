import * as Promise from "bluebird";
import HttpClient                   from "../utility/HttpClient";
import { CanonicalResponse }        from "../schema/CanonicalResponse";
import { ConfigManager }            from "../utility/ConfigManager";
import {    Listing, 
            ListingFee, 
            Withdraw 
       }                            from "../SchemaModule";
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

        createListing(request: Listing.Request): Promise<CanonicalResponse<Listing.Response>> {
            let servicePath: string = "Selling";
            let apiUri: string = ListingClient.configData.ApiUri; 
            return ListingClient.httpClient.post<Listing.Request, Listing.Response>(`${apiUri}/v1/${servicePath}.json`, request, this.userAuthHeader);
        }

        createListingFee(request: Listing.Request): Promise<CanonicalResponse<ListingFee.Response>> {
            let servicePath: string = "Selling/Fees";
            let apiUri: string = ListingClient.configData.ApiUri; 
            return ListingClient.httpClient.post<Listing.Request, ListingFee.Response>(`${apiUri}/v1/${servicePath}.json`, request, this.userAuthHeader);
        }

        editListing(request: Listing.Request): Promise<CanonicalResponse<Listing.Response>> {
            let servicePath: string = "Selling/Edit";
            let apiUri: string = ListingClient.configData.ApiUri; 
            return ListingClient.httpClient.post<Listing.Request, Listing.Response>(`${apiUri}/v1/${servicePath}.json`, request, this.userAuthHeader);
        }

        editListingFee(request: Listing.Request): Promise<CanonicalResponse<ListingFee.Response>> {
            let servicePath: string = "Selling/EditFees";
            let apiUri: string = ListingClient.configData.ApiUri; 
            return ListingClient.httpClient.post<Listing.Request, ListingFee.Response>(`${apiUri}/v1/${servicePath}.json`, request, this.userAuthHeader);
        }

        withdrawListing(request: Withdraw.Request): Promise<CanonicalResponse<Listing.Response>> {
            let servicePath: string = "Selling/Withdraw";
            let apiUri: string = ListingClient.configData.ApiUri; 
            return ListingClient.httpClient.post<Withdraw.Request, Listing.Response>(`${apiUri}/v1/${servicePath}.json`, request, this.userAuthHeader);
        }
    }
}