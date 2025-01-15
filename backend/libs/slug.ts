import { kebabCase } from 'lodash';
// const regex_slug = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function slugify(str: string): string {
  return kebabCase(str);
}
