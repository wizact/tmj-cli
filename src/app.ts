// Clients
import { CategoryProxy } from "./ProxyModule";
import { ConfigManager } from "./utility/ConfigManager";

// Loading config values
let config = new ConfigManager.Configuration();
config.setEnvrionment(ConfigManager.Environment.Sandbox);

let t = new CategoryProxy.CategoryClient();
t.retrieveGeneralCategory(5000).then((res) => console.log(res.Name));
