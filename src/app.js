"use strict";
var ProxyModule_1 = require("./ProxyModule");
var t = new ProxyModule_1.RetrieveCategoryProxy.RetrieveCategoryClient();
t.get(5000).then(function (res) { return console.log(res.Name); });
//# sourceMappingURL=app.js.map