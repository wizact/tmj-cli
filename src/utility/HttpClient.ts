import * as request from "request";
import * as Promise from "bluebird";
import { RequestAsync } from "./IRequestAsync";
import * as qs from "querystring";

const requestAsync: RequestAsync.IRequestAsync = <RequestAsync.IRequestAsync>Promise.promisifyAll(request);

/**
 * Http Client Wrapper
 */
export default class HttpClient {
    constructor() {
        
    }

    get<T>(uri: string): Promise<T> {
        return requestAsync.getAsync(uri)
            .then((result: any) => {
                let response = this.transform<T>(result.body);
                return response;
                })
            .catch((err) => {
                throw new Error(err);
            });
    }

    post<T, K>(uri: string, requestBody: T): Promise<K> {
        let postOptions: request.CoreOptions = {};
        postOptions.body = JSON.stringify(requestBody);
        return requestAsync.postAsync(uri, postOptions)
            .then((result: any) => {
                let response = this.transform<K>(result.body);
                return response;
                })
            .catch((err) => {
                throw new Error(err);
            });
    }

    private transform<T>(responseBody: string) {
        return (<T>JSON.parse(responseBody));
    }    
}