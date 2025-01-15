import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsString, IsUUID, MinLength } from 'class-validator';

@InputType()
export class RecoverPasswordInput {
  @Field(() => String)
  @IsEmail()
  email: string;
}

@InputType()
export class ChangePasswordInput {
  @Field(() => String)
  @MinLength(8)
  @IsString()
  password: string;

  @Field(() => String)
  @IsUUID('4')
  secureId: string;
}

@InputType()
export class CheckRecoverIdInput {
  @Field(() => String)
  @IsUUID('4')
  secureId: string;
}
