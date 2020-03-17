import * as https from "https";
import * as fs from "fs";

https.request({
    host: "raw.githubusercontent.com",
    port: 443,
    path: "/jshttp/mime-db/master/db.json",
    method: "GET"
}, function(res) {
    let netStr = "";
    res.on("data", (chunk: Buffer) => {
        netStr += chunk.toString();
    }).on("end", () => {
        let localData = JSON.parse(fs.readFileSync(__dirname + "/../mime.json").toString());
        let netData = JSON.parse(netStr);
        for (let mime in netData) {
            let netItem = netData[mime];
            if (netItem.extensions) {
                for (let ext of netItem.extensions) {
                    localData[ext] = {
                        "mime": mime,
                        "compressible": netItem.compressible ?? false
                    };
                }
            }
        }
        fs.writeFileSync(__dirname + "/../mime.json", JSON.stringify(localData));
    });
}).on("error", function(e) {
    console.error(`[Error]: ${e.stack}`);
}).end();