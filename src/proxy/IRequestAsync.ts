import * as request from "request";

export namespace RequestAsync {
    export interface IRequestAsync {
        getAsync(uri: string, options?: request.CoreOptions, callback?: request.RequestCallback): request.Request;
        getAsync(uri: string, callback?: request.RequestCallback): request.Request;
    }
}