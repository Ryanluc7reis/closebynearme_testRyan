import { Field, ObjectType } from '@nestjs/graphql';
import { Location } from '../../locations/entities/location.entity';
import { Category } from 'src/categories/entities/category.entity';
import { CompaniesPaginateResponse } from 'src/companies/entities/companies.paginate';
import { ArticlesPaginateResponse } from 'src/articles/entities/articles.paginate';
import { FaqsPaginateResponse } from 'src/faqs/entities/faqs.paginate';

@ObjectType()
export class LocationStructured {
  @Field(() => Location)
  location: Location;

  @Field(() => Category)
  category: Category;

  @Field(() => CompaniesPaginateResponse)
  companies: CompaniesPaginateResponse;

  @Field(() => FaqsPaginateResponse)
  faqs: FaqsPaginateResponse;

  @Field(() => ArticlesPaginateResponse)
  articles: ArticlesPaginateResponse;
}
