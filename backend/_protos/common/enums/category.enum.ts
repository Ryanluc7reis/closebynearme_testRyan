import { registerEnumType } from '@nestjs/graphql';
export enum CategoryTypeTree {
  MAIN = 'MAIN',
  PARENT = 'PARENT',
  CHILDREN = 'CHILDREN',
}
registerEnumType(CategoryTypeTree, {
  name: 'CategoryTypeTree',
});
