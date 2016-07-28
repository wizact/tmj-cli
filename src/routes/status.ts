import * as express from "express";

export let router = express.Router();

router.route("/:node?").get(function(req: express.Request, res: express.Response, next: Function) {
    const nodeValue = (req.params && req.params.node) ? req.params.node : "";
    const date = new Date();

    const message = { "status": `${date} ${nodeValue}` };
    console.log(req["user"]);
    res.json(message);
});
