let extJson = require(__dirname + "/../mime.json");

export function getMIMEType(fpath: string): string {
    let ext = fpath.indexOf(".") === -1 ? fpath : fpath.slice(fpath.lastIndexOf(".") + 1);
    console.log(ext);
    return extJson[ext] || "application/octet-stream";
}