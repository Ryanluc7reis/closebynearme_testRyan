import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  ArrayNotEmpty,
  IsEmail,
  IsEnum,
  IsPhoneNumber,
  IsString,
  IsUUID,
} from 'class-validator';
import { PermissionsMenu, Roles } from '../../../_protos/common';

@ObjectType()
export class AuthResponseAdmin {
  @Field(() => ID)
  @IsString()
  id: string;

  @Field(() => String)
  @IsUUID()
  accessToken: string;

  @Field(() => String)
  @IsEmail()
  email: string;

  @Field(() => String)
  @IsString()
  fullName: string;

  @Field(() => String, {
    defaultValue: '',
  })
  @IsString()
  avatar: string;

  @Field(() => String, { nullable: true })
  @IsPhoneNumber(undefined, { message: 'El numero de telefono no es valido' })
  phone: string;

  @Field(() => [Roles])
  @IsEnum(Roles)
  profile: Roles[];

  @Field(() => [PermissionsMenu])
  @ArrayNotEmpty()
  permissions: PermissionsMenu[];
}
