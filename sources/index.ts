let extJson = require(__dirname + "/../mime.json");

export function get(fpath: string): string {
    let ext = fpath.indexOf(".") === -1 ? fpath : fpath.slice(fpath.lastIndexOf(".") + 1);
    return extJson[ext.toLowerCase()] || "application/octet-stream";
}