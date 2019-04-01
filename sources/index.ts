import * as path from "path";

let dirname = __dirname.replace(/\\/g, "/");
export const TOP_PATH = dirname.substr(0, dirname.lastIndexOf("/") + 1);

let extJson = require(TOP_PATH + "mime.json");

export let getMIMEType = (fpath: string): string => {
    let ext = fpath.indexOf(".") === -1 ? fpath : path.extname(fpath).slice(1);
    return extJson[ext] || "application/octet-stream";
};