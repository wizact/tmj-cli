import * as Promise from "bluebird";
import { RetrieveCategory } from "../schema/RetrieveCategory";
import HttpClient from "../utility/HttpClient";

export namespace RetrieveCategoryProxy {
    export class RetrieveCategoryClient {
        private static httpClient: HttpClient; 
        constructor() {
            RetrieveCategoryClient.httpClient = new HttpClient();
        }

        get(categoryNumber: Number): Promise<RetrieveCategory.Response> {
            return RetrieveCategoryClient.httpClient.get<RetrieveCategory.Response>(`https://api.tmsandbox.co.nz/v1/Categories/${categoryNumber}.json`);
        }
    }
}