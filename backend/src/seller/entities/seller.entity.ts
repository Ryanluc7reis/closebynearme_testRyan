/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEnum, IsDate, IsEmail, IsBoolean } from 'class-validator';
import { Document, ObjectId } from 'mongoose';
import { AccountSchemaAllowed } from '../../../_protos/common';
import { Field, ID, ObjectType } from '@nestjs/graphql';

export type SellerDocument = Seller & Document<Seller>;

@ObjectType()
@Schema({
  timestamps: true,
  versionKey: false,
})
export class Seller {
  @Field(() => ID)
  _id: ObjectId;

  @Field(() => String)
  @Prop({ required: true })
  companyName: string;

  @Field(() => String)
  @Prop({ required: true, unique: true, trim: true })
  @IsEmail()
  email: string;

  @Field(() => String)
  @Prop({ required: true, trim: true })
  contactPersonName: string;

  @Field()
  @Prop({ required: true, trim: true })
  password: string;

  @Field(() => String)
  @Prop({ required: true })
  phone: string;

  @Field(() => String)
  @Prop({ required: true })
  website: string;

  @Field(() => [String], { nullable: true })
  @Prop({ required: true })
  rentalsOffers: string[];

  @Field(() => [String], { nullable: true })
  @Prop({ required: true })
  serviceArea: string[];

  @Field(() => [String], { nullable: true })
  @Prop({ required: true })
  physicalLocation: string[];

  @Field(() => [String], { nullable: true })
  @Prop({ required: true })
  rentalsAdvertises: string[];

  @Field(() => Boolean, { defaultValue: false })
  @Prop({ type: Boolean, default: false })
  @IsBoolean()
  isApproved: boolean;

  @Field(() => [AccountSchemaAllowed])
  @Prop({ required: true, type: [String] })
  @IsEnum(AccountSchemaAllowed)
  role: AccountSchemaAllowed[];

  @Field(() => Date)
  @Prop({ required: true })
  @IsDate()
  createdAt: Date;
}

export const SellerSchema = SchemaFactory.createForClass(Seller);
