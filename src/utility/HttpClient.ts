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
                if ((<IncomingMessage>result !== undefined && 
                    <IncomingMessage>result).headers["content-type"] !== null && 
                    (((<IncomingMessage>result).headers["content-type"]).indexOf("application/json") < 0)) {
                        return result.body;
                }
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