---
title: Authentication
layout: document
---
# Authentication
This route is available at `/auth` and implements the oAuth 1.0 client for Trade Me API. The step by step of implementation is documented [here](http://developer.trademe.co.nz/api-overview/authentication/example-plaintext-workflow/). After successful authentication, this service returns a [JWT](https://jwt.io/) token that can be used to call other endpoint in this client library. 

In a nutshell, the communication between client and this middleware is protected by JWT token and it will be automatically translated to oAuth header for communication between middleware and Trade Me API.

# Before You Start
* Make sure the `tmj-cli.json` is located in the same directory as `package.json`.
* You `ConsumerKey` and `ConsumerSecret` is updated in the `tmj-cli.json` file. You can get those keys from [here](https://www.tmsandbox.co.nz/MyTradeMe/Api/RegisterNewApplication.aspx).
* `SecretKey` is set. This value is a random text to encode JWT token as well as encode cookies.
* `CallBackUrl` is set. Generally it should be https://{base url}/auth/AccessToken. It should be https.
* Environment is set in the app.ts. By default it is sandbox. 
{% highlight javascript %}
config.setEnvrionment(ConfigManager.Environment.Sandbox);
{% endhighlight %}

For setting up most of the above you can refer to [Set Up](../setup/) page.

## Step 1 - Request Token
Redirect the user to `/auth/RequestToken`. This will redirect user to the Trade Me consent page.

## Step 2 - Access Token
After successful conset, Trade Me redirects user to `/auth/AccessToken` with `oauth_token` and `oauth_verifier`. After this step, it asks Trade Me to get permanent tokens and returns a JWT signature in the response. From now on in all requests, this token should be provided in the header as below:

{% highlight bash %}
authorization: Bearer JWToken 
{% endhighlight %}