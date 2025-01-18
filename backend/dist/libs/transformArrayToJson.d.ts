/// <reference types="node" />
type IData = Record<string, string>;
export declare function transformToJSON(file: Buffer): Promise<IData[]>;
export {};
