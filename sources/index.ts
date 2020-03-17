// npm publish --access=public
// npm deprecate @litert/mime-types@"<=0.0.3" "use @litert/mime instead"

export interface IData {
    [ext: string]: IDataItem;
}

export interface IDataItem {
    "mime": string,
    "compressible": boolean
}

let mimeData: IData = require("../mime.json");

/**
* --- 根据后缀、文件名或路径获取 mime 类型和是否可压缩 ---
* @param path 后缀、文件名或路径
*/
export function getData(path: string): IDataItem {
   let lio = path.lastIndexOf(".");
   let ext: string = (lio === -1 ? path : path.slice(lio + 1)).toLowerCase();
   if (mimeData[ext]) {
       return mimeData[ext];
   } else {
       return {
           "mime": "application/octet-stream",
           "compressible": false
       };
   }
}

/**
 * --- 快速获取 mime 字符串 ---
 * @param path 后缀、文件名或路径
 */
export function getMime(path: string): string {
    return getData(path)["mime"];
}

