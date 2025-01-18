import { Product } from './product.entity';
import { Company } from 'src/companies/entities/company.entity';
import { Category } from 'src/categories/entities/category.entity';
import { Location } from 'src/locations/entities/location.entity';
import { Amenities } from './amenities.entity';
declare const ProductPopulate_base: import("@nestjs/common").Type<Omit<Product, "locationId" | "categoryId" | "companyId" | "amenities">>;
export declare class ProductPopulate extends ProductPopulate_base {
    companyId: Company;
    locationId: Location;
    categoryId: Category;
    amenities: Amenities[];
}
export {};
