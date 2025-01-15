/* eslint-disable prettier/prettier */

import { Field, InputType } from '@nestjs/graphql';
import { IsEnum, IsArray, IsDate, IsString } from 'class-validator';
import { AccountSchemaAllowed } from '../../../_protos/common';

@InputType()
export class CreateBuyerInput {
  @Field(() => String)
  @IsString()
  birthday: string;

  @Field(() => String)
  @IsString()
  email: string;

  @Field(() => String)
  @IsString()
  fullName: string;

  @Field(() => [String], { nullable: true })
  @IsArray()
  Additional_Details?: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  Areas_Of_Interest: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  Delivery_Method: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  Emotional_State: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  Experience_Level: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  Goals_And_Expectations: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  Personality_Match: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  Preferred_Psychic_Services: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  Scheduling_Preferences: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  Spiritual_Preferences: string[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  Subscription_Preferences: string[];

  @Field(() => [AccountSchemaAllowed], {
    defaultValue: [AccountSchemaAllowed.BUYER],
  })
  @IsEnum(AccountSchemaAllowed, { each: true })
  role: AccountSchemaAllowed[];

  @Field(() => Date)
  @IsDate()
  createdAt: Date;
}
