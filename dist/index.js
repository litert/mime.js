"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMime = exports.getData = void 0;
let mimeData = require('../mime.json');
function getData(path) {
    let lio = path.lastIndexOf('.');
    let ext = (lio === -1 ? path : path.slice(lio + 1)).toLowerCase();
    if (mimeData[ext]) {
        mimeData[ext].extension = ext;
        return mimeData[ext];
    }
    else {
        return {
            'mime': "application/octet-stream",
            'compressible': false,
            'extension': ext
        };
    }
}
exports.getData = getData;
function getMime(path) {
    return getData(path)['mime'];
}
exports.getMime = getMime;
