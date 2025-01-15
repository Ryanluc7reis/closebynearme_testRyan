import { Module } from '@nestjs/common';
import { CompaniesStructuredResolver } from './companies-structured.resolver';
import { LocationsModule } from 'src/locations/locations.module';
import { ArticlesModule } from 'src/articles/articles.module';
import { CategoriesModule } from 'src/categories/categories.module';
import { CompaniesModule } from 'src/companies/companies.module';
import { FaqsModule } from 'src/faqs/faqs.module';
import { ProductsModule } from 'src/products/products.module';
import { ReviewsModule } from 'src/reviews/reviews.module';

@Module({
  imports: [
    LocationsModule,
    ArticlesModule,
    CategoriesModule,
    CompaniesModule,
    FaqsModule,
    ProductsModule,
    ReviewsModule,
  ],
  providers: [CompaniesStructuredResolver],
})
export class CompaniesStructuredModule {}
