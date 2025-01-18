"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDefaultAdmin = exports.createDefaultAdmin = exports.loadDefaultAdmin = void 0;
const fs = require("node:fs");
const fileName = './default_user_access.json';
const loadDefaultAdmin = () => {
    const exist = fs.existsSync(fileName);
    if (exist) {
        const data = fs.readFileSync(fileName, 'utf-8');
        return JSON.parse(data);
    }
    const default_password = 'DJJmMNXh_BQiMR02';
    const content = {
        email: 'admin@admin.com',
        password: default_password,
        url: '',
        fullRecord: false,
        createdAt: new Date(),
        updateAt: new Date(),
    };
    return content;
};
exports.loadDefaultAdmin = loadDefaultAdmin;
const saveFile = (content) => {
    fs.writeFile(fileName, JSON.stringify(content, null, 4), {
        flag: 'w+',
    }, (err) => {
        if (err) {
            console.error(err);
        }
    });
};
const createDefaultAdmin = () => {
    const data = (0, exports.loadDefaultAdmin)();
    const content = {
        ...data,
        url: '',
        fullRecord: false,
    };
    saveFile(content);
    return content;
};
exports.createDefaultAdmin = createDefaultAdmin;
const updateDefaultAdmin = (_data) => {
    const data = (0, exports.loadDefaultAdmin)();
    const content = {
        ...data,
        ..._data,
        updateAt: new Date(),
    };
    saveFile(content);
    return content;
};
exports.updateDefaultAdmin = updateDefaultAdmin;
//# sourceMappingURL=makeRandom.js.map