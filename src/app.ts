import * as request from "request";
import * as Promise from "bluebird";
import { RequestAsync } from "./proxy/IRequestAsync";

const requestAsync: RequestAsync.IRequestAsync = <RequestAsync.IRequestAsync>Promise.promisifyAll(request);

requestAsync.getAsync("https://api.tmsandbox.co.nz/v1/Categories/5000.json", 
function (error, response, body) {
   console.log(response);
   let bodyResponse = JSON.parse(body);
   console.log(bodyResponse.Name); 
});