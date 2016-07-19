import * as request from "request";
import * as Promise from "bluebird";
import { TMAuthData, 
         SignatureMethodType, 
         Scope, 
         AuthVersion 
       } from "./TMAuthData";
import { ConfigManager } from "../utility/ConfigManager";

export class TMAuth {
    private static configData: ConfigManager.IConfigData;
    private static configManager: ConfigManager.IConfiguration;
    constructor(configManager?: ConfigManager.IConfiguration) {
        TMAuth.configManager = configManager || new ConfigManager.Configuration();
        TMAuth.configData = TMAuth.configManager.get();
        console.log(TMAuth.configData.ApiUri);
        
    }

    private generateNounce(): string {
        let randomNumber: number = Math.random() * 10000;
        return randomNumber.toString();
    }

    RequestToken() {
        let requestTokenAuthHeader: TMAuthData = {
            consumerKey: TMAuth.configData.ConsumerKey,
            consumerSecret: TMAuth.configData.ConsumerSecret,
            authVersion: AuthVersion,
            nounce: this.generateNounce(),
            signatureMethod: SignatureMethodType
        };
    }
}