import * as https from "https";
import * as fs from "fs";

// --- https://raw.githubusercontent.com/jshttp/mime-db/master/db.json ---

const db = JSON.parse(fs.readFileSync(__dirname + "/../sources/source.json").toString());
const localData: Record<string, any> = {};
for (const key in db) {
    const item = db[key];
    if (!item.extensions) {
        continue;
    }
    for (let ext of item.extensions) {
        localData[ext] = {
            'mime': key,
            'compressible': item.compressible ?? false
        };
    }
    // --- 附加 ---
    localData['cga'] = {
        'mime': 'application/vnd.clickgo.app',
        'compressible': false
    };
    localData['cgt'] = {
        'mime': 'application/vnd.clickgo.theme',
        'compressible': false
    };
    fs.writeFileSync(__dirname + '/../mime.json', JSON.stringify(localData));
}
