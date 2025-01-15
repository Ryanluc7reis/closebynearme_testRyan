import { InputType, Field, Float } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

@InputType()
export class CreateSettingInput {
  @Field(() => Float)
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  serviceFee: number;
}
