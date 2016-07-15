import * as request from "request";
import * as Promise from "bluebird";

export namespace RequestAsync {
    export interface IRequestAsync {
        getAsync(uri: string, options?: request.CoreOptions, callback?: request.RequestCallback): Promise<any>;
        getAsync(uri: string, callback?: request.RequestCallback): Promise<any>;

        postAsync(uri: string, options?: request.CoreOptions, callback?: request.RequestCallback): Promise<any>;
        postAsync(uri: string, callback?: request.RequestCallback): Promise<any>;
    }
}