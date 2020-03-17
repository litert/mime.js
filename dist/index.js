"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mimeData = require("../mime.json");
function getData(path) {
    var lio = path.lastIndexOf(".");
    var ext = (lio === -1 ? path : path.slice(lio + 1)).toLowerCase();
    if (mimeData[ext]) {
        return mimeData[ext];
    }
    else {
        return {
            "mime": "application/octet-stream",
            "compressible": false
        };
    }
}
exports.getData = getData;
function getMime(path) {
    return getData(path)["mime"];
}
exports.getMime = getMime;
//# sourceMappingURL=index.js.map