import { Field, ObjectType } from '@nestjs/graphql';
import {
  BasePaginateResponse,
  IDocs,
} from '../../../_protos/classes/paginate.base';
import { Company } from './company.entity';

@ObjectType({
  implements: [BasePaginateResponse],
})
export class CompaniesPaginateResponse
  extends BasePaginateResponse
  implements IDocs<Company>
{
  @Field(() => [Company], { defaultValue: [] })
  docs: Company[];
}
