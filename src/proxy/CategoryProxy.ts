import * as Promise from "bluebird";
import { RetrieveCategory } from "../schema/RetrieveCategory";
import HttpClient from "../utility/HttpClient";

export namespace CategoryProxy {
    export class CategoryClient {
        private static httpClient: HttpClient;
        constructor() {
            CategoryClient.httpClient = new HttpClient();
        }

        retrieveGeneralCategory(categoryNumber: Number): Promise<RetrieveCategory.Response> {
            let ApiPath: string = "Categories";
            return CategoryClient.httpClient.get<RetrieveCategory.Response>(`https://api.tmsandbox.co.nz/v1/${ApiPath}/${categoryNumber}.json`);
        }
    }
}