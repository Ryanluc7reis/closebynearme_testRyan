import { Field, ObjectType } from '@nestjs/graphql';
import {
  BasePaginateResponse,
  IDocs,
} from '../../../_protos/classes/paginate.base';
import { Faq } from './faq.entity';

@ObjectType({
  implements: [BasePaginateResponse],
})
export class FaqsPaginateResponse
  extends BasePaginateResponse
  implements IDocs<Faq>
{
  @Field(() => [Faq], { defaultValue: [] })
  docs: Faq[];
}
