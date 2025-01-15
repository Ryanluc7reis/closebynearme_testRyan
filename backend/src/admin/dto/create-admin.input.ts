import {
  ArrayNotEmpty,
  IsArray,
  IsBoolean,
  IsEmail,
  IsEnum,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { PermissionsMenu, Roles, Status } from '../../../_protos/common';
import { Field, InputType } from '@nestjs/graphql';
import { Transform } from 'class-transformer';

@InputType()
export class CreateAdminInput {
  @IsBoolean()
  public fullRecord = false;

  @Field(() => [Roles], {
    defaultValue: [Roles.ADMIN],
  })
  @IsArray()
  profile = [Roles.ADMIN];

  @Field(() => Status, { defaultValue: Status.ACTIVE })
  @IsEnum(Status)
  status = Status.ACTIVE;

  @Field(() => String, { defaultValue: '' })
  @IsString()
  avatar: string;

  @Field()
  @IsEmail()
  @Transform(({ value }) => value.toLowerCase())
  email: string;

  @Field()
  @IsString()
  @MinLength(8)
  password: string;

  @Field()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  fullName: string;

  @Field(() => [PermissionsMenu])
  @ArrayNotEmpty()
  permissions: PermissionsMenu[];
}
