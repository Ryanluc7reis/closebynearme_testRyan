import {
  Resolver,
  Query,
  Args,
  ResolveField,
  Parent,
  Mutation,
} from '@nestjs/graphql';
import { LocationStructured } from '../locations-structured/entities/location-structured';
import { LocationsService } from 'src/locations/locations.service';
import { Inject } from '@nestjs/common';
import { CompaniesService } from 'src/companies/companies.service';
import { ArticlesService } from 'src/articles/articles.service';
import { CategoriesService } from 'src/categories/categories.service';
import { FaqsService } from 'src/faqs/faqs.service';
import { SearchBaseInput } from '_protos/classes/search.base';
import { LocationsPaginateResponse } from 'src/locations/entities/locations.paginate';
import { SearchArticleInput } from 'src/articles/dto/search-article.input';
import { SchemaGeneratorService } from './schema-generator.service';
import { Location } from 'src/locations/entities/location.entity';
import { Status } from '_protos/common';

@Resolver(() => LocationStructured)
export class LocationsStructuredResolver {
  @Inject()
  private readonly locationService: LocationsService;
  @Inject()
  private readonly companyService: CompaniesService;
  @Inject()
  private readonly articlesService: ArticlesService;
  @Inject()
  private readonly categoriesService: CategoriesService;
  @Inject()
  private readonly faqsService: FaqsService;
  @Inject()
  private readonly schemaGeneratorService: SchemaGeneratorService;

  @Query(() => Location, { name: 'findCategoriesByLocationBySlug' })
  async findCategoriesByLocationBySlug(@Args('slug') slug: string) {
    return await this.locationService.findOne({ slug });
  }

  @Query(() => LocationStructured, { name: 'findOneLocationBySlug' })
  async findOneBySlug(
    @Args('slug') slug: string,
    @Args('categorySlug') categorySlug: string,
  ) {
    return {
      location: await this.locationService.findOne({
        slug,
        status: Status.ACTIVE,
      }),
      category: await this.categoriesService.findOne({
        slug: categorySlug,
        status: Status.ACTIVE,
      }),
    };
  }

  @ResolveField()
  async companies(
    @Parent() data: LocationStructured,
    @Args('search') search: SearchBaseInput,
  ) {
    const { location, category } = data;

    return await this.companyService.findAll({
      ...search,

      locationId: location._id,
      categoryId: category._id,
    });
  }

  @ResolveField()
  async faqs(
    @Parent() data: LocationStructured,
    @Args('search') search: SearchBaseInput,
  ) {
    const { location, category } = data;

    return await this.faqsService.findAll(search, location._id, category._id);
  }

  @ResolveField()
  async articles(
    @Parent() data: LocationStructured,
    @Args('search') search: SearchArticleInput,
  ) {
    const { location, category } = data;

    return await this.articlesService.findAll(
      search,
      location._id,
      category._id,
    );
  }

  @Query(() => LocationsPaginateResponse)
  async findLocations(@Args('search') search: SearchBaseInput) {
    return await this.locationService.findAll(search);
  }

  @Mutation(() => String, {
    name: 'triggerSchemaGenerator',
  })
  async triggerSchemaGenerator() {
    await this.schemaGeneratorService.schemaFeedGenerator();

    return await this.schemaGeneratorService.schemaGenerator();
  }
}
