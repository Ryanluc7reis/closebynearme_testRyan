import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AddressInfoInput {
  @Field(() => String)
  line1: string;

  @Field(() => String, { nullable: true })
  line2: string;

  @Field(() => String)
  fullAddress: string;

  @Field(() => String)
  cityName: string;

  @Field(() => String)
  postalCode: string;
}
