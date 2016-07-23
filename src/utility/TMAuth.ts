import * as request from "request";
import * as Promise from "bluebird";
import HttpClient from "./HttpClient";
import { TMAuthData, 
         SignatureMethodType, 
         Scope, 
         AuthVersion,
         TMAuthRequestTokenResponse
       } from "./TMAuthData";
import { ConfigManager } from "../utility/ConfigManager";

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
            signatureMethod: SignatureMethodType
        };
    }

    private generateNounce(): string {
        return Math.floor(Math.random() * 167772150).toString(16);
    }

    private getEpoch(): string {
        return (new Date).getTime().toString();
    }

    private getRequestTokenHeader(): string {
        return `OAuth oauth_consumer_key=${this.authData.consumerKey}, oauth_version=${this.authData.authVersion}, oauth_timestamp=${this.getEpoch()}, oauth_nonce=${this.generateNounce()}, oauth_signature_method=${SignatureMethodType}, oauth_signature=${TMAuth.configData.ConsumerSecret}%26`;
    }

    RequestToken(): Promise<TMAuthRequestTokenResponse> {
        let requestTokenUri = `${TMAuth.configData.OAuthRequestTokenUri}?${Scope}`;
        let header = this.getRequestTokenHeader();
        return TMAuth.httpClient.get<string>(requestTokenUri, header).then(rt => { 
            let response: TMAuthRequestTokenResponse = {};
            // TODO: Map response to the type
            return response;
        });
    }
}