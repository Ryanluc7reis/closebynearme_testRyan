/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose-paginate-v2" />
import { CompanyStructured } from './entities/company-structured';
import { SearchBaseInput } from '_protos/classes/search.base';
export declare class CompaniesStructuredResolver {
    private readonly locationService;
    private readonly companyService;
    private readonly productsService;
    private readonly reviewsService;
    findOneBySlug(slug: string): Promise<{
        company: Omit<import("mongoose").Document<unknown, {}, import("../companies/entities/company.entity").CompanyDocument> & import("../companies/entities/company.entity").Company & import("mongoose").Document<import("../companies/entities/company.entity").Company, any, any> & Required<{
            _id: import("mongoose").Schema.Types.ObjectId & import("../companies/entities/company.entity").Company;
        }>, never>;
    }>;
    location(slug: string): Promise<import("mongoose").Document<unknown, {}, import("../locations/entities/location.entity").LocationDocument> & import("../locations/entities/location.entity").Location & import("mongoose").Document<import("../locations/entities/location.entity").Location, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & import("../locations/entities/location.entity").Location;
    }>>;
    reviews(data: CompanyStructured, search: SearchBaseInput): Promise<import("mongoose").PaginateResult<import("mongoose").Document<unknown, {
        limit: number;
        page: number;
        pagination: boolean;
        sort: {
            createdAt: number;
        };
    }, import("../reviews/entities/review.entity").ReviewDocument> & import("../reviews/entities/review.entity").Review & import("mongoose").Document<import("../reviews/entities/review.entity").Review, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & import("../reviews/entities/review.entity").Review;
    }>>>;
    products(data: CompanyStructured, search: SearchBaseInput, categorySlug: string): Promise<import("mongoose").PaginateResult<import("mongoose").Document<unknown, {
        limit: number;
        page: number;
        pagination: boolean;
        sort: {
            name: number;
        };
    }, import("../products/entities/product.entity").ProductDocument> & import("../products/entities/product.entity").Product & import("mongoose").Document<import("../products/entities/product.entity").Product, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId & import("../products/entities/product.entity").Product;
    }>>>;
}
