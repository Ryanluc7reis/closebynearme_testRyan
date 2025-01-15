import { Module } from '@nestjs/common';
import { LocationsStructuredResolver } from './locations-structured.resolver';
import { LocationsModule } from 'src/locations/locations.module';
import { ArticlesModule } from 'src/articles/articles.module';
import { CategoriesModule } from 'src/categories/categories.module';
import { CompaniesModule } from 'src/companies/companies.module';
import { FaqsModule } from 'src/faqs/faqs.module';
import { SchemaGeneratorService } from './schema-generator.service';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [
    LocationsModule,
    ArticlesModule,
    CategoriesModule,
    CompaniesModule,
    FaqsModule,
    ProductsModule,
  ],
  providers: [LocationsStructuredResolver, SchemaGeneratorService],
})
export class LocationsStructuredModule {}
