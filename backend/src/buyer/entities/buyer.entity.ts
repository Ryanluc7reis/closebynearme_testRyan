/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEnum, IsDate } from 'class-validator';
import { Document, ObjectId } from 'mongoose';
import { AccountSchemaAllowed, Status } from '../../../_protos/common';
import { Field, ID, ObjectType } from '@nestjs/graphql';

export type BuyerDocument = Buyer & Document<Buyer>;

@ObjectType()
@Schema({
  timestamps: true,
  versionKey: false,
})
export class Buyer {
  @Field(() => ID)
  _id: ObjectId;

  @Field(() => String)
  @Prop({ required: true })
  birthday: string;

  @Field(() => String)
  @Prop({ required: true, unique: true, trim: true })
  email: string;

  @Field(() => String)
  @Prop({ required: true })
  fullName: string;

  @Field(() => [String], { nullable: true })
  @Prop({ required: false })
  Additional_Details?: string[];

  @Field(() => [String], { nullable: true })
  @Prop({ required: true })
  Areas_Of_Interest: string[];

  @Field(() => [String], { nullable: true })
  @Prop({ required: true })
  Delivery_Method: string[];

  @Field(() => [String], { nullable: true })
  @Prop({ required: true })
  Emotional_State: string[];

  @Field(() => [String], { nullable: true })
  @Prop({ required: true })
  Experience_Level: string[];

  @Field(() => [String], { nullable: true })
  @Prop({ required: true })
  Goals_And_Expectations: string[];

  @Field(() => [String], { nullable: true })
  @Prop({ required: true })
  Personality_Match: string[];

  @Field(() => [String], { nullable: true })
  @Prop({ required: true })
  Preferred_Psychic_Services: string[];

  @Field(() => [String], { nullable: true })
  @Prop({ required: true })
  Scheduling_Preferences: string[];

  @Field(() => [String], { nullable: true })
  @Prop({ required: true })
  Spiritual_Preferences: string[];

  @Field(() => [String], { nullable: true })
  @Prop({ required: true })
  Subscription_Preferences: string[];

  @Field(() => [AccountSchemaAllowed])
  @Prop({ required: true, type: [String] })
  @IsEnum(AccountSchemaAllowed)
  role: AccountSchemaAllowed[];

  @Field(() => Status)
  @Prop({ default: Status.ACTIVE, type: typeof Status })
  @IsEnum(Status)
  status: Status;

  @Field(() => Date)
  @Prop({ required: true })
  @IsDate()
  createdAt: Date;
}

export const BuyerSchema = SchemaFactory.createForClass(Buyer);
