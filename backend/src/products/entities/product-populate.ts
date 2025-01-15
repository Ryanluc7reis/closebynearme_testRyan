import { Field, ObjectType, OmitType } from '@nestjs/graphql';
import { Product } from './product.entity';
import { Company } from 'src/companies/entities/company.entity';
import { IsArray, IsNotEmpty } from 'class-validator';
import { Category } from 'src/categories/entities/category.entity';
import { Location } from 'src/locations/entities/location.entity';
import { Amenities } from './amenities.entity';

@ObjectType()
export class ProductPopulate extends OmitType(Product, [
  'companyId',
  'locationId',
  'categoryId',
  'amenities',
]) {
  @Field(() => Company)
  @IsNotEmpty()
  companyId: Company;

  @Field(() => Location)
  @IsNotEmpty()
  locationId: Location;

  @Field(() => Category)
  @IsNotEmpty()
  categoryId: Category;

  @Field(() => [Amenities])
  @IsArray()
  amenities: Amenities[];
}
