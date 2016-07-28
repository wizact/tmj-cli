import * as express                 from "express";
import * as jwt                     from "jsonwebtoken";
import { ConfigManager }            from "../utility/ConfigManager";
import { TMAuth }                   from "../utility/TMAuth";
import { TMAuthAuthorizeResponse,
         TMTokenBearerSingature }   from "../utility/TMAuthData";

export let router = express.Router();

router.route("/RequestToken").get(function(req: express.Request, res: express.Response, next: Function) {
    let tmAuth = new TMAuth();
    tmAuth.RequestToken().then(rt => {
    let sess = req.session;

    if (rt.oauth_token_secret === "" || rt.oauth_token === "") {
        res.status(400).json("Cannot request token from TM oAuth");
    }

    sess["tokenSecret"] = rt.oauth_token_secret;
    res.redirect(tmAuth.GetAuthorizeUri(rt));
    }).catch(e => { throw e; });
});

router.route("/AccessToken").get(function(req: express.Request, res: express.Response, next: Function) {
    let oauthToken = req.query["oauth_token"];
    let oauthVerifier = req.query["oauth_verifier"];    
    let tmAuth = new TMAuth();
    let sess = req.session;

   let authResponse: TMAuthAuthorizeResponse = {
       oauth_token: oauthToken,
       oauth_verifier: oauthVerifier
   };

   let tokenSecret = sess["tokenSecret"];

   if (tokenSecret === undefined || tokenSecret === "") {
       res.status(400).json("Session expired");
   }

   if (!!(authResponse.oauth_token) && !!(authResponse.oauth_verifier)) {
       tmAuth.AccessToken(authResponse, tokenSecret).then(tokens => {
           let tokenBearerSignature: TMTokenBearerSingature = {
               oauth_token: tokens.oauth_token,
               oauth_token_secret: tokens.oauth_token_secret
           };

           let secretKey = new ConfigManager.Configuration().get().SecretKey;
           let signature = jwt.sign(tokenBearerSignature, "text secret value", { algorithm: "HS256" } );           
           res.status(200).json(signature);
       });
   } else {
     res.status(400).json("Failed to authorize from TM oAuth");
   }
});
