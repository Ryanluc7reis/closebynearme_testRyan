import { Field, InputType, Int, registerEnumType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';
import { StatusAllowed } from '../common';

registerEnumType(StatusAllowed, {
  name: 'StatusAllowed',
});

@InputType()
export class SearchBaseInput {
  @IsString()
  @Field(() => String, { defaultValue: '' })
  q: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  sortColumn?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  sort?: string;

  @Field(() => Int, { defaultValue: 1 })
  @IsInt()
  page: number;

  @Field(() => Int, { defaultValue: 10 })
  @IsInt()
  perPage: number;

  @Field(() => StatusAllowed, { defaultValue: StatusAllowed.ACTIVE })
  @IsEnum(StatusAllowed)
  status: StatusAllowed;

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  @IsBoolean()
  @IsOptional()
  all: boolean;
}
