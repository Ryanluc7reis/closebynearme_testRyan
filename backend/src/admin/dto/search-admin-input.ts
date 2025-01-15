import { Field, InputType } from '@nestjs/graphql';
import { RolesAllowed } from '../../../_protos/common';
import { SearchBaseInput } from '../../../_protos/classes/search.base';
import { IsEnum, IsOptional } from 'class-validator';

@InputType()
export class SearchAdminInput extends SearchBaseInput {
  @Field(() => RolesAllowed, {
    defaultValue: RolesAllowed.ADMIN,
  })
  @IsEnum(RolesAllowed)
  @IsOptional()
  role: RolesAllowed;
}
