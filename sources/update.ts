import * as https from "https";
import * as fs from "fs";

https.request({
    host: "raw.githubusercontent.com",
    port: 443,
    path: "/jshttp/mime-db/master/db.json",
    method: "GET"
}, (res) => {
    let rstr = "";
    res.on("data", (chunk: Buffer) => {
        rstr += chunk.toString();
    }).on("end", () => {
        let json = JSON.parse(fs.readFileSync(__dirname + "/../mime.json").toString());
        let rjson = JSON.parse(rstr);
        for (let mime in rjson) {
            let item = rjson[mime];
            if (item.extensions) {
                for (let ext of item.extensions) {
                    json[ext] = mime;
                }
            }
        }
        fs.writeFileSync(__dirname + "/../mime.json", JSON.stringify(json, undefined, 4));
    });
}).on("error", (e) => console.error(`[Error]: ${e.stack}`)).end();