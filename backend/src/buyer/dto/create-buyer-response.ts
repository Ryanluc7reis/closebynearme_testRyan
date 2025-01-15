/* eslint-disable prettier/prettier */
import { Field, ObjectType } from '@nestjs/graphql';
//import { Buyer } from '../entities/buyer.entity';

@ObjectType()
export class CreateBuyerResponse {
  @Field()
  message: string;

  @Field(() => Boolean)
  success: boolean;
}
