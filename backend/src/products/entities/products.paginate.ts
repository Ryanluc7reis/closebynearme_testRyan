import { Field, ObjectType } from '@nestjs/graphql';
import { BasePaginateResponse, IDocs } from '_protos/classes/paginate.base';
import { Product } from './product.entity';
import { Amenities } from './amenities.entity';

@ObjectType({
  implements: [BasePaginateResponse],
})
export class ProductsPaginateResponse
  extends BasePaginateResponse
  implements IDocs<Product>
{
  @Field(() => [Product], { defaultValue: [] })
  docs: Product[];
}

@ObjectType({
  implements: [BasePaginateResponse],
})
export class AmenitiesPaginateResponse
  extends BasePaginateResponse
  implements IDocs<Amenities>
{
  @Field(() => [Amenities], { defaultValue: [] })
  docs: Amenities[];
}
