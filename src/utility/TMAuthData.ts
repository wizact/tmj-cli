export const SignatureMethodType = "PLAINTEXT";
export const Scope = "MyTradeMeRead,MyTradeMeWrite";
export const AuthVersion = "1.0";

export interface TMAuthData {
    consumerKey: string;
    consumerSecret: string;
    callbackUrl?: string;
    authVersion: string;
    signatureMethod: string;
    signature?: string;
}

export interface TMAuthRequestTokenResponse {
    oauth_token?: string;
    oauth_token_secret?: string;
}