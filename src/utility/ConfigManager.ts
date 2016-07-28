import * as path    from "path";
import * as fs      from "fs";


export namespace ConfigManager {
    export interface IConfigData {
        ApiUri: string;
        OAuthRequestTokenUri: string;
        OAuthAuthorizeUri: string;
        OAuthAccessTokenUri: string;
        CallBackUrl?: string;
        ConsumerKey: string;
        ConsumerSecret: string;
        SecretKey: string;
    }
    
    export enum Environment {
        NotSet = 0,
        Sandbox = 1,
        Production = 2
    }

    export interface IConfiguration {
        setEnvrionment(env: Environment);
        get(): IConfigData;
    }

    export class Configuration implements IConfiguration {   
        static localConfig: { [ id: number ]: IConfigData; } = {};
        static currentEnv: Environment = Environment.NotSet;
        constructor() { }

        setEnvrionment(env: Environment) {
            if (Configuration.currentEnv !== Environment.NotSet) {
                throw new Error("Cannot reset environment");
            }

            if (env === Environment.NotSet) {
                throw new Error("Invalid environment");
            }
            Configuration.currentEnv = env;
            
            let configPath = this.getConfigPath();
            this.loadConfigFile(configPath);
            
        }

        /*
        * going up file level from the execution level until it finds
        * the tmj-cli.json. If the file cannot be found, it throws. 
        */
        private getConfigPath() {
            let scriptPath = process.argv[1];
            let dirPath = path.dirname(scriptPath);
            let relativePath = "";
            for (let index = 0; index < 5; index++) {
                const upFolder = "..";
                let configPath = path.normalize(`${dirPath}${path.sep}${relativePath}tmj-cli.json`);
                if (fs.existsSync(configPath)) {
                    return configPath;
                }

                relativePath = `${relativePath}..${path.sep}`;
            }

            throw new Error("tmj-cli config file cannot be found."); 
        }

        private loadConfigFile(configPath: string) {
            let loadedConfig = <IConfigData>JSON.parse(fs.readFileSync(configPath, "utf8"));
            Configuration.localConfig[Environment.Sandbox] = loadedConfig["sandbox"];
            Configuration.localConfig[Environment.Production] = loadedConfig["production"];
        }

        get(): any {
            if (Configuration.currentEnv === Environment.NotSet) {
                throw new Error("Envrionment should be set first");
            }

            return Configuration.localConfig[Configuration.currentEnv];
        }
    }
}