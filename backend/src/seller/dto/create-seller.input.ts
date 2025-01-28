/* eslint-disable prettier/prettier */

import { Field, InputType } from '@nestjs/graphql';
import {
  IsEnum,
  IsArray,
  IsDate,
  IsString,
  MinLength,
  IsBoolean,
} from 'class-validator';
import { AccountSchemaAllowed } from '../../../_protos/common';

@InputType()
export class CreateSellerInput {
  @Field(() => String)
  @IsString()
  companyName: string;

  @Field(() => String)
  @IsString()
  email: string;

  @Field(() => String)
  @IsString()
  fullName: string;

  @Field()
  @IsString()
  @MinLength(8)
  password: string;

  @Field(() => String)
  @IsString()
  phone: string;

  @Field(() => [String], { nullable: true })
  @IsArray()
  rentalsOffers: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  serviceArea: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  physicalLocation: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  rentalsAdvertises: string[];

  @Field(() => Boolean, { defaultValue: false })
  @IsBoolean()
  isApproved: boolean;

  @Field(() => [AccountSchemaAllowed], {
    defaultValue: [AccountSchemaAllowed.ADMIN],
  })
  @IsEnum(AccountSchemaAllowed, { each: true })
  role: AccountSchemaAllowed[];

  @Field(() => Date)
  @IsDate()
  createdAt: Date;
}
