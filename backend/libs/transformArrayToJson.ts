import xlsx from 'node-xlsx';
import { slugify } from './slug';
type IData = Record<string, string>;

export async function transformToJSON(file: Buffer) {
  const sheets = xlsx.parse(file);
  const data = new Map<string, IData>();

  for await (const sheet of sheets) {
    let temp: IData = {};
    const header: string[] = [];
    for (let i = 0; i < sheet.data.length; i++) {
      const row = sheet.data[i];

      if (i == 0) {
        row.forEach((item) => {
          header.push(slugify(item));
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
