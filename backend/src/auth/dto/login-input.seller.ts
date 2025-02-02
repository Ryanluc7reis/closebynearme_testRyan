import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, MinLength, IsBoolean } from 'class-validator';

@InputType()
export class LoginInputSeller {
  @Field(() => String)
  @IsEmail()
  email: string;

  @Field(() => String)
  @MinLength(8)
  @IsNotEmpty()
  password: string;

  @Field(() => Bollean)
  @IsBoolean()
  rememberMe: boolean;
}
