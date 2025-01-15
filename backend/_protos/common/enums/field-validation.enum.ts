import { registerEnumType } from '@nestjs/graphql';

export enum FieldValidation {
  email = 'email',
  nickname = 'nickname',
  phone = 'phone',
}

registerEnumType(FieldValidation, {
  name: 'FieldValidation',
});
