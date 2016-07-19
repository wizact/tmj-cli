export const SignatureMethodType = "PLAINTEXT";
export const Scope = "MyTradeMeRead,MyTradeMeWrite";
export const AuthVersion = "1.0";

export interface TMAuthData {
    consumerKey: string;
    consumerSecret: string;
    callbackUrl?: string;
    authVersion: string;
    nounce?: string;
    signatureMethod: string;
    signature?: string;
}