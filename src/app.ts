// Clients
import { RetrieveCategoryProxy } from "./ProxyModule";

let t = new RetrieveCategoryProxy.RetrieveCategoryClient();
t.get(5000).then((res) => console.log(res.Name));
