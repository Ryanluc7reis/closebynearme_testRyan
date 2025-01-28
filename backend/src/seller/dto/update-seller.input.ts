import { IsNotEmpty } from 'class-validator';
import { CreateSellerInput } from './create-seller.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';

@InputType()
export class UpdateSellerData extends PartialType(CreateSellerInput) {}

@InputType()
export class UpdateSellerInput {
  @Field(() => ID)
  @IsNotEmpty()
  _id: ObjectId;

    @Field(() => UpdateSellerData)
    @IsNotEmpty()
    data: UpdateSellerData;
}
