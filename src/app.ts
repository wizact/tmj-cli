// Clients
import { CategoryProxy } from "./ProxyModule";

let t = new CategoryProxy.CategoryClient();
t.retrieveGeneralCategory(5000).then((res) => console.log(res.Name));
