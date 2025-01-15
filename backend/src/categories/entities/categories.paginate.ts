import { Field, ObjectType } from '@nestjs/graphql';
import {
  BasePaginateResponse,
  IDocs,
} from '../../../_protos/classes/paginate.base';
import { Category } from './category.entity';

@ObjectType({
  implements: [BasePaginateResponse],
})
export class CategoriesPaginateResponse
  extends BasePaginateResponse
  implements IDocs<Category>
{
  @Field(() => [Category], { defaultValue: [] })
  docs: Category[];
}
