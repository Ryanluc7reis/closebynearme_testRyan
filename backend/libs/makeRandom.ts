import * as fs from 'node:fs';
const fileName = './default_user_access.json';

interface Settings {
  _id?: any;
  email?: string;
  password?: string;
  url?: string;
  fullRecord?: boolean;
  createdAt?: Date;
  updateAt?: Date;
}

export const loadDefaultAdmin = (): Settings => {
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
  } satisfies Settings;

  return content;
};

const saveFile = (content: Settings) => {
  fs.writeFile(
    fileName,
    JSON.stringify(content, null, 4),
    {
      flag: 'w+',
    },
    (err) => {
      if (err) {
        console.error(err);
      }
    },
  );
};

export const createDefaultAdmin = () => {
  const data = loadDefaultAdmin();

  const content = {
    ...data,
    url: '',
    fullRecord: false,
  } satisfies Settings;

  saveFile(content);
  return content;
};

export const updateDefaultAdmin = (_data: Settings) => {
  const data = loadDefaultAdmin();

  const content = {
    ...data,
    ..._data,
    updateAt: new Date(),
  } satisfies Settings;

  saveFile(content);
  return content;
};
