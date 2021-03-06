# Trade Me Jobs API Client - (unofficial)

tmj-cli is a client written in TypeScript to expose some of the Job specific functionality in Trade Me API.  

## Documentation
For the list of available operations please read [this](https://wizact.github.io/tmj-cli/index.html).

## Usage

### Setup
* The configuration file is a `json` file supporting two envrionemts The configuration file name should be `tmj-cli.json`. We check up to five parent directory relative to `process.argv` to find it.
```javascript
{
    "sandbox": { 
        "ApiUri" : "https://api.tmsandbox.co.nz/",
        "OAuthRequestTokenUri": "https://secure.tmsandbox.co.nz/Oauth/RequestToken",
        "OAuthAuthorizeUri": "https://secure.tmsandbox.co.nz/Oauth/Authorize",
        "OAuthAccessTokenUri": "https://secure.tmsandbox.co.nz/Oauth/AccessToken",
        "CallBackUrl": "https://localhost:8080/auth/AccessToken",
        "ConsumerKey": "<not set>", 
        "ConsumerSecret": "<not set>",
        "SecretKey": "<not set>"
        },
    "production": {
        "ApiUri" : "https://api.trademe.co.nz/",
        "OAuthRequestTokenUri": "https://secure.trademe.co.nz/Oauth/RequestToken",
        "OAuthAuthorizeUri": "https://secure.trademe.co.nz/Oauth/Authorize",
        "OAuthAccessTokenUri": "https://secure.trademe.co.nz/Oauth/AccessToken",
        "CallBackUrl": "<not set>",
        "ConsumerKey": "<not set>", 
        "ConsumerSecret": "<not set>",
        "SecretKey": "<not set>"
        }
}
```

* Alternatively you can run the following command and complete the file manually.
```bash
npm run setup
```

* The secret key is the key we use to sign JWT and Express sessions.
* CallBackUrl is the Url that TMJ redirects after user's consent. By default in development it is `https://localhost:8080/auth/AccessToken`. In production, it depends on your deploy path. It should be https.

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
