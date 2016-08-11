import * as Promise                 from "bluebird";
import HttpClient                   from "../utility/HttpClient";
import { ConfigManager }            from "../utility/ConfigManager";
import { 
        GenericResponse,
        CanonicalResponse,
        RetrieveWatchlist
       }                            from "../SchemaModule";
import { TMTokenBearerSingature }   from "../utility/TMAuthData";
import { TMAuth }                   from "../utility/TMAuth";

export namespace WatchlistProxy {
    export class WatchlistClient {
        private static httpClient: HttpClient;
        private static configManager: ConfigManager.IConfiguration;
        private static configData: ConfigManager.IConfigData;
        private userAuthHeader: string;
        constructor(user: TMTokenBearerSingature, configManager?: ConfigManager.IConfiguration) {
            WatchlistClient.httpClient = new HttpClient();
            WatchlistClient.configManager = configManager || new ConfigManager.Configuration();
            WatchlistClient.configData = WatchlistClient.configManager.get();
            this.userAuthHeader = new TMAuth(WatchlistClient.configManager).GetUserAuthHeader(user);
        }

        retrieveWatchlist(): Promise<CanonicalResponse<RetrieveWatchlist.RetrieveWatchlist>> {
            let servicePath: string = "MyTradeMe/Watchlist/All";
            let apiUri: string = WatchlistClient.configData.ApiUri; 
            return WatchlistClient.httpClient.get<RetrieveWatchlist.RetrieveWatchlist>(`${apiUri}/v1/${servicePath}.json`, this.userAuthHeader);
        }

        addWatchlist(listingId: number): Promise<CanonicalResponse<GenericResponse.Response>> {
            let servicePath: string = "MyTradeMe/WatchList/";
            let apiUri: string = WatchlistClient.configData.ApiUri; 
            return WatchlistClient.httpClient.post<any, GenericResponse.Response>(`${apiUri}/v1/${servicePath}${listingId}.json`, null, this.userAuthHeader);
        }

        removeWatchlist(listingId: number): Promise<CanonicalResponse<GenericResponse.Response>> {
            let servicePath: string = "MyTradeMe/WatchList/";
            let apiUri: string = WatchlistClient.configData.ApiUri; 
            return WatchlistClient.httpClient.delete<GenericResponse.Response>(`${apiUri}/v1/${servicePath}${listingId}.json`, this.userAuthHeader);
        }
    }
}