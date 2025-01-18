import { Location } from '../../locations/entities/location.entity';
import { Company } from 'src/companies/entities/company.entity';
import { ProductsPaginateResponse } from 'src/products/entities/products.paginate';
import { ReviewsPaginateResponse } from 'src/reviews/entities/review.paginate';
export declare class CompanyStructured {
    location: Location;
    company: Company;
    products: ProductsPaginateResponse;
    reviews: ReviewsPaginateResponse;
}
