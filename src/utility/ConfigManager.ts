import  * as path from "path";

export namespace ConfigManager {
    export interface IConfigData {
        ApiUri: string;
        ConsumerKey: string;
        ConsumerSecret: string;
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
        constructor() { 
            Configuration.localConfig[Environment.Sandbox] = { ApiUri : "https://api.tmsandbox.co.nz/", ConsumerKey: "", ConsumerSecret: "" };
            Configuration.localConfig[Environment.Production] = { ApiUri : "https://api.trademe.co.nz/", ConsumerKey: "", ConsumerSecret: ""  }; 
        }

        setEnvrionment(env: Environment) {
            this.getConfigPath();
            if (Configuration.currentEnv !== Environment.NotSet) {
                throw new Error("Cannot reset environment");
            }

            if (env === Environment.NotSet) {
                throw new Error("Invalid environment");
            }
            Configuration.currentEnv = env;
        }

        private getConfigPath() {
            let scriptPath = process.argv[1];
            let dirPath = path.dirname(scriptPath);
            console.log(path.normalize(`${dirPath}${path.sep}..${path.sep}tmj-cli.json`));
        }

        get(): any {
            if (Configuration.currentEnv === Environment.NotSet) {
                throw new Error("Envrionment should be set first");
            }

            return Configuration.localConfig[Configuration.currentEnv];
        }
    }
}