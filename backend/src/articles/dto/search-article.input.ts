import { Field, InputType } from '@nestjs/graphql';
import { SearchBaseInput } from '../../../_protos/classes/search.base';
import { IsEnum, IsOptional } from 'class-validator';
import { ArticlesTypeAllowed } from '_protos/common/enums/tags.enum';

@InputType()
export class SearchArticleInput extends SearchBaseInput {
  @Field(() => ArticlesTypeAllowed, {
    defaultValue: ArticlesTypeAllowed.EMPTY,
  })
  @IsEnum(ArticlesTypeAllowed)
  @IsOptional()
  type: ArticlesTypeAllowed;
}
