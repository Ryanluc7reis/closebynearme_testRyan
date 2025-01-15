import { Field, ObjectType } from '@nestjs/graphql';
import {
  BasePaginateResponse,
  IDocs,
} from '../../../_protos/classes/paginate.base';
import { Article } from './article.entity';

@ObjectType({
  implements: [BasePaginateResponse],
})
export class ArticlesPaginateResponse
  extends BasePaginateResponse
  implements IDocs<Article>
{
  @Field(() => [Article], { defaultValue: [] })
  docs: Article[];
}
