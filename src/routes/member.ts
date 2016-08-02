import * as express from "express";
import { TMTokenBearerSingature } from "../utility/TMAuthData";

// Clients
import  { MemberProxy } from "../ProxyModule";

// Schemas
import  { RetrieveMember } from "../SchemaModule";

export let router = express.Router();

router.route("/:memberId").get(function(req: express.Request, res: express.Response, next: Function) {
    const memberId = req.params.memberId;
    let memberClient = new MemberProxy.MemberClient(<TMTokenBearerSingature>req["user"]);
    memberClient.retrieveMember(memberId).then(result => {
        res.status(result.StatusCode).json(result.Response);
    });
});
