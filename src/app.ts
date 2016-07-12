import * as request from "request";
import * as Promise from "bluebird";
import { RequestAsync } from "./proxy/IRequestAsync";

const requestAsync: RequestAsync.IRequestAsync = <RequestAsync.IRequestAsync>Promise.promisifyAll(request);

interface ICat {
    Name: string;
}

/**
 * Http Client Wrapper
 */
class HttpClient {
    constructor() {

    }

    get<T>(uri: string): Promise<T> {
        return requestAsync.getAsync(uri)
            .then((result: any) => {
                console.log(result.statusCode);
                let response = this.transform<T>(result.body);
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

let httpClient = new HttpClient();
httpClient.get<ICat>("https://api.tmsandbox.co.nz/v1/Categories/5000.json").then((result) => console.log(result));
