import * as request from "request";
import * as Promise from "bluebird";
import { RequestAsync } from "./IRequestAsync";
import * as qs from "querystring";
import { IncomingMessage } from "http";

const requestAsync: RequestAsync.IRequestAsync = <RequestAsync.IRequestAsync>Promise.promisifyAll(request);

/**
 * Http Client Wrapper
 */
export default class HttpClient {
    constructor() {
        
    }

    get<T>(uri: string, header?: string): Promise<T> {
        
        
        let getOptions: request.CoreOptions = { };
        if (!!header) {
            getOptions.headers = { "Authorization": header };
        }
        return requestAsync.getAsync(uri, getOptions)
            .then((result: any) => {
                return this.map<T>(result);    
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
                return this.map<T>(result);
            })
            .catch((err) => {
                throw new Error(err);
            });
    }

    private map<T>(responseBody: any) {
        if ((<IncomingMessage>responseBody !== undefined && 
             <IncomingMessage>responseBody).headers["content-type"] !== null && 
             (((<IncomingMessage>responseBody).headers["content-type"]).indexOf("application/json") < 0)) {
                        return responseBody.body;
             }
            let response = this.transform<T>(responseBody.body);
            return response;
    }

    private transform<T>(responseBody: string) {
        return (<T>JSON.parse(responseBody));
    }    
}