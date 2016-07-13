import * as Promise from "bluebird";
import { RetrieveCategory } from "../schema/RetrieveCategory";
import HttpClient from "../utility/HttpClient";
import { ConfigManager } from "../utility/ConfigManager";

export namespace CategoryProxy {
    export class CategoryClient {
        private static httpClient: HttpClient;
        private static configManager: ConfigManager.IConfiguration;
        private static configData: ConfigManager.IConfigData;
        constructor(configManager?: ConfigManager.IConfiguration) {
            CategoryClient.httpClient = new HttpClient();
            CategoryClient.configManager = configManager || new ConfigManager.Configuration();
            CategoryClient.configData = CategoryClient.configManager.get(); 
        }

        retrieveGeneralCategory(categoryNumber: Number): Promise<RetrieveCategory.Response> {
            let servicePath: string = "Categories";
            let apiUri: string = CategoryClient.configData.ApiUri; 
            return CategoryClient.httpClient.get<RetrieveCategory.Response>(`${apiUri}/v1/${servicePath}/${categoryNumber}.json`);
        }
    }
}