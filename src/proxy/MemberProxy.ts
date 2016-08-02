import * as Promise                 from "bluebird";
import HttpClient                   from "../utility/HttpClient";
import { ConfigManager }            from "../utility/ConfigManager";
import { RetrieveMember }           from "../schema/RetrieveMember";
import { RetrieveMemberSummary }    from "../schema/RetrieveMemberSummary";
import { CanonicalResponse }        from "../schema/CanonicalResponse";
import { TMTokenBearerSingature }   from "../utility/TMAuthData";
import { TMAuth }                   from "../utility/TMAuth";

export namespace MemberProxy {
    export class MemberClient {
        private static httpClient: HttpClient;
        private static configManager: ConfigManager.IConfiguration;
        private static configData: ConfigManager.IConfigData;
        private userAuthHeader: string;
        constructor(user: TMTokenBearerSingature, configManager?: ConfigManager.IConfiguration) {
            MemberClient.httpClient = new HttpClient();
            MemberClient.configManager = configManager || new ConfigManager.Configuration();
            MemberClient.configData = MemberClient.configManager.get();
            this.userAuthHeader = new TMAuth(MemberClient.configManager).GetUserAuthHeader(user);
        }

        retrieveMember(memberId: number): Promise<CanonicalResponse<RetrieveMember.RetrieveMember>> {
            let servicePath: string = "Member";
            let apiUri: string = MemberClient.configData.ApiUri; 
            return MemberClient.httpClient.get<RetrieveMember.RetrieveMember>(`${apiUri}/v1/${servicePath}/${memberId}/Profile.json`, this.userAuthHeader);
        }

        retrieveMemberSummary(): Promise<CanonicalResponse<RetrieveMemberSummary.RetrieveMemberSummary>> {
            let servicePath: string = "MyTradeMe/Summary";
            let apiUri: string = MemberClient.configData.ApiUri; 
            return MemberClient.httpClient.get<RetrieveMemberSummary.RetrieveMemberSummary>(`${apiUri}/v1/${servicePath}.json?return_member_profile=true`, this.userAuthHeader);
        }
    }
}