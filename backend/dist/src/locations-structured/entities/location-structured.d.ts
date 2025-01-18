import { Location } from '../../locations/entities/location.entity';
import { Category } from 'src/categories/entities/category.entity';
import { CompaniesPaginateResponse } from 'src/companies/entities/companies.paginate';
import { ArticlesPaginateResponse } from 'src/articles/entities/articles.paginate';
import { FaqsPaginateResponse } from 'src/faqs/entities/faqs.paginate';
export declare class LocationStructured {
    location: Location;
    category: Category;
    companies: CompaniesPaginateResponse;
    faqs: FaqsPaginateResponse;
    articles: ArticlesPaginateResponse;
}
