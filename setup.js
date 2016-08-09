const readline = require("readline");
const fs = require("fs");

var selected_env = "sandbox";
var selected_consumer_key = "";
var selected_consumer_secret = "";
var callback_url = "";
var secret_key = "";

var exists = fs.existsSync('./tmj-cli.json');
if (exists) {
      console.error("Abort. tmj-cli.json already exists");
      process.exit(1);
} 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('ُSelect the environment (sandbox, prod) ', (answer) => {
  if (answer.toLowerCase() === "prod") {
    selected_env = "production";
  }

  console.log('Environment: ', selected_env);
  ckQ();
  // rl.close();
});

var ckQ = function() {
  rl.question('ُConsumer Key ', (answer) => {
    selected_consumer_key = answer;
    csQ();
  });
};

var csQ = function() {
  rl.question('ُConsumer Secret ', (answer) => {
    selected_consumer_secret = answer;
    cbQ();
  });
};

var cbQ = function() {
  rl.question('ُOAuth callback url (e.g. https://localhost:8080/auth/AccessToken) ', (answer) => {
    callback_url = answer;
    skQ();
  });
};

var skQ = function() {
  rl.question('ُSecret Key (random string to sign tokens ans cookies) ', (answer) => {
    secret_key = answer;
    rl.close();
    writeConfig();
  });
};

var getCK = function(env) {
  if (env === selected_env) {
    return selected_consumer_key;
  }

  return "<not set>";
}

var getCS = function(env) {
  if (env === selected_env) {
    return selected_consumer_secret;
  }

  return "<not set>";
}

var getCB = function(env) {
  if (env === selected_env) {
    return callback_url;
  }

  return "<not set>";
}

var getSK = function(env) {
  if (env === selected_env) {
    return secret_key;
  }

  return "<not set>";
}

var writeConfig = function() {
  var template = `
    {
    "sandbox": { 
        "ApiUri" : "https://api.tmsandbox.co.nz/", 
        "OAuthRequestTokenUri": "https://secure.tmsandbox.co.nz/Oauth/RequestToken",
        "OAuthAuthorizeUri": "https://secure.tmsandbox.co.nz/Oauth/Authorize",
        "OAuthAccessTokenUri": "https://secure.tmsandbox.co.nz/Oauth/AccessToken",
        "CallBackUrl": "${getCB('sandbox')}",
        "ConsumerKey": "${getCK('sandbox')}", 
        "ConsumerSecret": "${getCS('sandbox')}",
        "SecretKey": "${getSK('sandbox')}"
        },
    "production": {
        "ApiUri" : "https://api.trademe.co.nz/",
        "OAuthRequestTokenUri": "https://secure.trademe.co.nz/Oauth/RequestToken",
        "OAuthAuthorizeUri": "https://secure.trademe.co.nz/Oauth/Authorize",
        "OAuthAccessTokenUri": "https://secure.trademe.co.nz/Oauth/AccessToken",
        "CallBackUrl": "${getCB('production')}",
        "ConsumerKey": "${getCK('production')}", 
        "ConsumerSecret": "${getCS('production')}",
        "SecretKey": "${getSK('production')}" 
        }
    }
  `;

  console.log(template);

  const rl2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl2.question('ُWrite to file? (y/N)', (answer) => {
    if (answer === "y") {
      fs.writeFile('./tmj-cli.json', template, (err) => {
        if (err) throw err;
        console.log('Saved as tmj-cli.json!');
      });
    } else {
      console.log("Abort!");
    }
    rl2.close();
  });
};