"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformToJSON = void 0;
const node_xlsx_1 = require("node-xlsx");
const slug_1 = require("./slug");
async function transformToJSON(file) {
    const sheets = node_xlsx_1.default.parse(file);
    const data = new Map();
    for await (const sheet of sheets) {
        let temp = {};
        const header = [];
        for (let i = 0; i < sheet.data.length; i++) {
            const row = sheet.data[i];
            if (i == 0) {
                row.forEach((item) => {
                    header.push((0, slug_1.slugify)(item));
                });
            }
            if (i >= 1) {
                for (let b = 0; b < header.length; b++) {
                    const key = header[b];
                    const item_index = row.at(b);
                    temp[key] = item_index?.trim();
                }
                data.set(`row-${i}`, { id: `row-${i}`, ...temp });
                temp = {};
            }
        }
    }
    return [...data.values()];
}
exports.transformToJSON = transformToJSON;
//# sourceMappingURL=transformArrayToJson.js.map