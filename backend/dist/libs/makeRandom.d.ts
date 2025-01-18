interface Settings {
    _id?: any;
    email?: string;
    password?: string;
    url?: string;
    fullRecord?: boolean;
    createdAt?: Date;
    updateAt?: Date;
}
export declare const loadDefaultAdmin: () => Settings;
export declare const createDefaultAdmin: () => {
    url: string;
    fullRecord: false;
    _id?: any;
    email?: string;
    password?: string;
    createdAt?: Date;
    updateAt?: Date;
};
export declare const updateDefaultAdmin: (_data: Settings) => {
    updateAt: Date;
    _id?: any;
    email?: string;
    password?: string;
    url?: string;
    fullRecord?: boolean;
    createdAt?: Date;
};
export {};
