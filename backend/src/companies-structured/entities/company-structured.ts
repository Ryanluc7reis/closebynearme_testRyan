import { Field, ObjectType } from '@nestjs/graphql';
import { Location } from '../../locations/entities/location.entity';
import { Company } from 'src/companies/entities/company.entity';
import { ProductsPaginateResponse } from 'src/products/entities/products.paginate';
import { ReviewsPaginateResponse } from 'src/reviews/entities/review.paginate';

@ObjectType()
export class CompanyStructured {
  @Field(() => Location)
  location: Location;

  @Field(() => Company)
  company: Company;

  @Field(() => ProductsPaginateResponse)
  products: ProductsPaginateResponse;

  @Field(() => ReviewsPaginateResponse)
  reviews: ReviewsPaginateResponse;
}
