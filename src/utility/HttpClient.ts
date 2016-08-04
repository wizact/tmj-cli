import * as request from "request";
import * as Promise from "bluebird";
import { RequestAsync } from "./IRequestAsync";
import * as qs from "querystring";
import { IncomingMessage } from "http";
import { CanonicalResponse } from "../schema/CanonicalResponse";

const requestAsync: RequestAsync.IRequestAsync = <RequestAsync.IRequestAsync>Promise.promisifyAll(request);

/**
 * Http Client Wrapper
 */
export default class HttpClient {
    constructor() {
        
    }

    get<T>(uri: string, header?: string): Promise<CanonicalResponse<T>> {    
        let getOptions: request.CoreOptions = this.createRequestOptions(); 
        getOptions = this.setAuthHeader(getOptions, header);

        return requestAsync.getAsync(uri, getOptions)
            .then((result: any) => {
                let cr = new CanonicalResponse<T>();
                cr.StatusCode = result.statusCode;
                cr.Response = this.map<T>(result);
                return cr;
            })
            .catch((err) => {
                throw new Error(err);
            });
    }

    post<T, K>(uri: string, requestBody: T, header?: string): Promise<CanonicalResponse<K>> {
        let postOptions: request.CoreOptions = this.createRequestOptions();
        postOptions = this.setAuthHeader(postOptions, header);
        postOptions = this.setBody(postOptions, JSON.stringify(requestBody));
        postOptions = this.setContentTypeHeader(postOptions);
        return requestAsync.postAsync(uri, postOptions)
            .then((result: any) => {
                let cr = new CanonicalResponse<K>();
                cr.StatusCode = result.statusCode;
                cr.Response = this.map<K>(result);
                return cr;
            })
            .catch((err) => {
                throw new Error(err);
            });
    }

    private createRequestOptions(): request.CoreOptions {
        let requestOptions: request.CoreOptions = { };
        return requestOptions;
    }

    private setAuthHeader(requestOptions: request.CoreOptions, header?: string): request.CoreOptions {
        if (!!header) {
            requestOptions.headers = { "Authorization": header };
        }

        return requestOptions;
    } 

    private setBody(requestOptions: request.CoreOptions, body?: string): request.CoreOptions {
        if (!!body) {
            requestOptions.body = body;
        }

        return requestOptions;
    } 

    private setContentTypeHeader(requestOptions: request.CoreOptions): request.CoreOptions {
        requestOptions.headers["content-type"] = "application/json";
        
        return requestOptions;
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