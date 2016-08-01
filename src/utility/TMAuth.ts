import * as request from "request";
import * as Promise from "bluebird";
import HttpClient from "./HttpClient";
import * as qs from "query-string";
import { TMAuthData, 
         SignatureMethodType, 
         Scope, 
         AuthVersion,
         TMAuthRequestTokenResponse,
         TMAuthAuthorizeResponse,
         TMTokenBearerSingature
       } from "./TMAuthData";
import { ConfigManager } from "../utility/ConfigManager";
import { CanonicalResponse } from "../schema/CanonicalResponse";

export class TMAuth {
    private static configData: ConfigManager.IConfigData;
    private static configManager: ConfigManager.IConfiguration;
    private static httpClient: HttpClient;
    private authData: TMAuthData;
    constructor(configManager?: ConfigManager.IConfiguration) {
        TMAuth.configManager = configManager || new ConfigManager.Configuration();
        TMAuth.configData = TMAuth.configManager.get();
        TMAuth.httpClient = new HttpClient();
        this.authData = {
            consumerKey: TMAuth.configData.ConsumerKey,
            consumerSecret: TMAuth.configData.ConsumerSecret,
            authVersion: AuthVersion,
            signatureMethod: SignatureMethodType,
            callbackUrl: TMAuth.configData.CallBackUrl
        };
    }

    private generateNounce(): string {
        return Math.floor(Math.random() * 167772150).toString(16);
    }

    private getEpoch(): string {
        return (new Date).getTime().toString();
    }

    // Step 1

    private getRequestTokenHeader(): string {
        return `OAuth oauth_callback=${this.authData.callbackUrl}, oauth_consumer_key=${this.authData.consumerKey}, oauth_version=${this.authData.authVersion}, oauth_timestamp=${this.getEpoch()}, oauth_nonce=${this.generateNounce()}, oauth_signature_method=${SignatureMethodType}, oauth_signature=${TMAuth.configData.ConsumerSecret}%26`;
    }

    RequestToken(): Promise<TMAuthRequestTokenResponse> {
        let requestTokenUri = `${TMAuth.configData.OAuthRequestTokenUri}?${Scope}`;
        let header = this.getRequestTokenHeader();
        return TMAuth.httpClient.get<string>(requestTokenUri, header).then(rt => { 
            let response: TMAuthRequestTokenResponse = {};
            let qsParts = qs.parse(rt.Response);
            response.oauth_token = qsParts["oauth_token"];
            response.oauth_token_secret = qsParts["oauth_token_secret"];
            if (qsParts.oauth_token === undefined || 
                qsParts.oauth_token_secret === undefined) {
                throw new Error(rt.Response);
            }
            return response;
        });
    }

    // Step 2

    GetAuthorizeUri(authRequestTokenResponse: TMAuthRequestTokenResponse) {
        let authorizeUri = `${TMAuth.configData.OAuthAuthorizeUri}?oauth_token=${authRequestTokenResponse.oauth_token}`;
        return authorizeUri;
    }

    // Step 3

    private getAccessTokenHeader(oAuthToken: string, oAuthVerifier: string, oAuthTokenSecret: string) {
        return `OAuth oauth_verifier=${oAuthVerifier}, oauth_consumer_key=${TMAuth.configData.ConsumerKey}, oauth_token=${oAuthToken}, oauth_version=${this.authData.authVersion}, oauth_timestamp=${this.getEpoch()}, oauth_nonce=${this.generateNounce()}, oauth_signature_method=${SignatureMethodType}, oauth_signature=${TMAuth.configData.ConsumerSecret}%26${oAuthTokenSecret}`;
    }

    AccessToken(tmAuthAuthorizeResponse: TMAuthAuthorizeResponse, oAuthTokenSecret: string) {
        let accessTokenUri = `${TMAuth.configData.OAuthAccessTokenUri}`;
        let header = this.getAccessTokenHeader(tmAuthAuthorizeResponse.oauth_token, tmAuthAuthorizeResponse.oauth_verifier, oAuthTokenSecret);
        return TMAuth.httpClient.get<string>(accessTokenUri, header).then(rt => {         
            let response: TMAuthRequestTokenResponse = {};
            let qsParts = qs.parse(rt.Response);
            response.oauth_token = qsParts["oauth_token"];
            response.oauth_token_secret = qsParts["oauth_token_secret"];
            if (qsParts.oauth_token === undefined || 
                qsParts.oauth_token_secret === undefined) {
                throw new Error(rt.Response);
            }
            return response;
        });
    }

    GetUserAuthHeader(user: TMTokenBearerSingature): string {
        return `OAuth oauth_consumer_key=${TMAuth.configData.ConsumerKey}, oauth_token=${user.oauth_token}, oauth_version=${this.authData.authVersion}, oauth_timestamp=${this.getEpoch()}, oauth_nonce=${this.generateNounce()}, oauth_signature_method=${SignatureMethodType}, oauth_signature=${TMAuth.configData.ConsumerSecret}%26${user.oauth_token_secret}`;
    }
}