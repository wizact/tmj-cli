const readline = require("readline");

var selected_env = "sandbox";
var selected_consumer_key = "";
var selected_consumer_secret = "";

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
    rl.close();
    writeConfig();
  });
};

var getCK = function(env) {
  if (env === selected_env) {
    return selected_consumer_key;
  }

  return "";
}

var getCS = function(env) {
  if (env === selected_env) {
    return selected_consumer_secret;
  }

  return "";
}

var writeConfig = function() {
  var template = `
    {
    "sandbox": { 
        "ApiUri" : "https://api.tmsandbox.co.nz/", 
        "ConsumerKey": "${getCK('sandbox')}", 
        "ConsumerSecret": "${getCS('sandbox')}" 
        },
    "production": {
        "ApiUri" : "https://api.trademe.co.nz/", 
        "ConsumerKey": "${getCK('production')}", 
        "ConsumerSecret": "${getCS('production')}" 
        }
    }
  `;

  console.log(template);
};