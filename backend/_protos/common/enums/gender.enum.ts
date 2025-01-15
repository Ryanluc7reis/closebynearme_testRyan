import { registerEnumType } from '@nestjs/graphql';

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
}

export enum GenderAllowed {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
  EMPTY = '',
}

registerEnumType(Gender, {
  name: 'Gender',
});

registerEnumType(GenderAllowed, {
  name: 'GenderAllowed',
});
