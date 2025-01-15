import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { CommomModule } from './common/modules/common.module';
import { CategoriesModule } from './categories/categories.module';
import { LocationsModule } from './locations/locations.module';
import { CompaniesModule } from './companies/companies.module';
import { ArticlesModule } from './articles/articles.module';
import { FaqsModule } from './faqs/faqs.module';
import { LocationsStructuredModule } from './locations-structured/locations-structured.module';
import { CompaniesStructuredModule } from './companies-structured/companies-structured.module';
import { UploadsModule } from './uploads/uploads.module';
import { ReviewsModule } from './reviews/reviews.module';
import { ProductsModule } from './products/products.module';
import { SettingsModule } from './settings/settings.module';
import { MongoConfigModule } from './common/modules/mongo/mongo.module';
import { BuyerModule } from './buyer/buyer.module';

@Module({
  imports: [
    CommomModule,
    AuthModule,
    AdminModule,
    CategoriesModule,
    LocationsModule,
    CompaniesModule,
    ArticlesModule,
    FaqsModule,
    LocationsStructuredModule,
    CompaniesStructuredModule,
    UploadsModule,
    ReviewsModule,
    ProductsModule,
    SettingsModule,
    MongoConfigModule,
    BuyerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
