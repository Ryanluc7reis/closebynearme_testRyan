import { Args, Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { CompanyStructured } from './entities/company-structured';
import { Inject } from '@nestjs/common';
import { CompaniesService } from 'src/companies/companies.service';
import { LocationsService } from 'src/locations/locations.service';
import { SearchBaseInput } from '_protos/classes/search.base';
import { ProductsService } from 'src/products/products.service';
import { ReviewsService } from 'src/reviews/reviews.service';
import { StatusAllowed } from '_protos/common';
import { Category } from 'src/categories/entities/category.entity';

@Resolver(() => CompanyStructured)
export class CompaniesStructuredResolver {
  @Inject()
  private readonly locationService: LocationsService;
  @Inject()
  private readonly companyService: CompaniesService;
  @Inject()
  private readonly productsService: ProductsService;
  @Inject()
  private readonly reviewsService: ReviewsService;

  @Query(() => CompanyStructured, { name: 'findOneCompanyBySlug' })
  async findOneBySlug(@Args('companySlug') slug: string) {
    return {
      company: await (
        await this.companyService.findOne({ slug })
      ).populate('categoriesId'),
    };
  }

  @ResolveField()
  async location(@Args('locationSlug') slug: string) {
    return await this.locationService.findOne({
      slug,
    });
  }

  @ResolveField()
  async reviews(
    @Parent() data: CompanyStructured,
    @Args('search') search: SearchBaseInput,
  ) {
    const { company } = data;
    return await this.reviewsService.findAll(
      {
        ...search,
        status: StatusAllowed.ACTIVE,
      },

      company._id,
    );
  }

  @ResolveField()
  async products(
    @Parent() data: CompanyStructured,
    @Args('search') search: SearchBaseInput,
    @Args('slug') categorySlug: string,
  ) {
    const { company } = data;

    const res = await this.productsService.findAll({
      ...search,
      companyId: company._id,
    });

    if (res.totalDocs >= 1) {
      return res;
    }

    const categories = company.categoriesId as unknown as Category[];

    return await this.productsService.findAll({
      ...search,
      locationId: company.locationId,
      categoriesId: categories
        .filter((item) => item.slug === categorySlug)
        .map((item) => item._id),
    });
  }
}
