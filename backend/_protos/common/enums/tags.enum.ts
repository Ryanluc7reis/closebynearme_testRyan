import { registerEnumType } from '@nestjs/graphql';

export enum TagsType {
  TAG = 'TAG',
  KEYWORD = 'KEYWORD',
  DEFAULT = 'DEFAULT',
}

export enum TagsTypeAllowed {
  TAG = 'TAG',
  KEYWORD = 'KEYWORD',
  DEFAULT = 'DEFAULT',
  EMPTY = '',
}

export enum ArticlesType {
  GUIDE = 'GUIDE',
  DEFAULT = 'DEFAULT',
}

export enum ArticlesTypeAllowed {
  GUIDE = 'GUIDE',
  DEFAULT = 'DEFAULT',
  EMPTY = '',
}

registerEnumType(ArticlesType, {
  name: 'ArticlesType',
});

registerEnumType(ArticlesTypeAllowed, {
  name: 'ArticlesTypeAllowed',
});

registerEnumType(TagsType, {
  name: 'TagsType',
});
registerEnumType(TagsTypeAllowed, {
  name: 'TagsTypeAllowed',
});
