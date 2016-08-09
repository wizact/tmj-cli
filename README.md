# Trade Me Jobs API Client - (unofficial)

tmj-cli is a client written in TypeScript to expose some of the Job specific functionality in Trade Me API.  

## Usage

### Setup
* The configuration file is a `json` file supporting two envrionemts The configuration file name should be `tmj-cli.json`. We check up to five parent directory relative to `process.argv` to find it.
```javascript
{
    "sandbox": { 
        "ApiUri" : "https://api.tmsandbox.co.nz/", 
        "ConsumerKey": "<not set>", 
        "ConsumerSecret": "<not set>" 
        },
    "production": {
        "ApiUri" : "https://api.trademe.co.nz/", 
        "ConsumerKey": "<not set>", 
        "ConsumerSecret": "<not set>" 
        }
}
```

* Alternatively you can run the following command and complete the file manually.
```bash
npm run setup
```

## Build
We are using `Grunt` for build tasks.
```bash
# to lint and compile
> grunt
# to lint only
> grunt lint-ts
# to compile only
> grunt compile-ts
# to watch for changes (For development you probably want this)
> grunt watch
```

### Links:

 * [Official Documentation](http://developer.trademe.co.nz/) for Trade Me API
