import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class LoginInput {
  @Field(() => String, { description: 'Admin email' })
  @IsEmail()
  email: string;

  @Field(() => String, {
    description: 'Admin/Client password',
  })
  @MinLength(8)
  @IsNotEmpty()
  password: string;
}
