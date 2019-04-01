import * as https from "https";
import * as fs from "fs";

let dirname = __dirname.replace(/\\/g, "/");
export const TOP_PATH = dirname.substr(0, dirname.lastIndexOf("/") + 1);

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
        let json = JSON.parse(fs.readFileSync(TOP_PATH + "mime.json").toString());
        let rjson = JSON.parse(rstr);
        for (let mime in rjson) {
            let item = rjson[mime];
            if (item.extensions) {
                for (let ext of item.extensions) {
                    json[ext] = mime;
                }
            }
        }
        fs.writeFileSync(TOP_PATH + "mime.json", JSON.stringify(json, undefined, 4));
    });
}).on("error", (e) => console.error(`[Error]: ${e.stack}`)).end();