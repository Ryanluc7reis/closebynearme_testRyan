import { CreateSettingInput } from './create-setting.input';
import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmptyObject } from 'class-validator';

@InputType()
export class UpdateSettingData extends CreateSettingInput {}

@InputType()
export class UpdateSettingInput {
  @Field(() => UpdateSettingData)
  @IsNotEmptyObject()
  data: UpdateSettingData;
}
