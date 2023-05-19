export interface IData {
    [ext: string]: IDataItem;
}
export interface IDataItem {
    'mime': string;
    'compressible': boolean;
    'extension': string;
}
export declare function getData(path: string): IDataItem;
export declare function getMime(path: string): string;
