import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, SchemaFactory } from '@nestjs/mongoose';

@ObjectType()
export class AddressInfo {
  @Field(() => String)
  @Prop({
    required: true,
  })
  line1: string;

  @Field(() => String, { nullable: true })
  @Prop({ required: false })
  line2: string;

  @Field(() => String)
  @Prop({ required: true })
  fullAddress: string;

  @Field(() => String)
  @Prop({ required: true })
  cityName: string;

  @Field(() => String)
  @Prop({ required: true })
  postalCode: string;
}

export const AddressInfoSchema = SchemaFactory.createForClass(AddressInfo);
