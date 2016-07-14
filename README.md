# Trade Me Jobs API Client - (unofficial)

tmj-cli is a client written in TypeScript to expose some of the Job specific functionality in Trade Me API.  

## Usage

### TypeScript
* Import the following modules
```javascript
import { CategoryProxy } from "./ProxyModule";
import { ConfigManager } from "./utility/ConfigManager";
```

* Set the environment
```javascript
let config = new ConfigManager.Configuration();
config.setEnvrionment(ConfigManager.Environment.Sandbox);
```
* Create proxies
```javascript
let categoryClient = new CategoryProxy.CategoryClient();
// Retrieve General Category
categoryClient.retrieveGeneralCategory(5000).then((response) => {
	console.log(response);
});

// Retrieve Job Category
categoryClient.retrieveJobCategory().then((response) => { 
    console.log(response);
});

// Retrieve Job Category Detail
categoryClient.retrieveCategoryDetail(5007).then((response) => {
     console.log(response.CanRelist);
});
```

### JavaScript
Coming soon

## Build
```bash
# to lint and compile
> grunt
# to lint
> grunt lint-ts
# to compile
> grunt compile-ts
# to watch for changes
> grunt watch
```

### Links:

 * [Official Documentation](http://http://developer.trademe.co.nz/) for Trade Me API
