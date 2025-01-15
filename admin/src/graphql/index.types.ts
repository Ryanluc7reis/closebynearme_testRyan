import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  ObjectId: { input: any; output: any; }
};

export type Admin = {
  __typename?: 'Admin';
  _id: Scalars['ID']['output'];
  avatar: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  permissions: Array<PermissionsMenu>;
  profile: Array<Roles>;
  role: Scalars['String']['output'];
  status: Status;
};

export type AdminPaginateResponse = BasePaginateResponse & {
  __typename?: 'AdminPaginateResponse';
  docs: Array<Admin>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Amenities = {
  __typename?: 'Amenities';
  _id: Scalars['ID']['output'];
  description: Scalars['String']['output'];
  icon: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type AmenitiesPaginateResponse = BasePaginateResponse & {
  __typename?: 'AmenitiesPaginateResponse';
  docs: Array<Amenities>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Article = {
  __typename?: 'Article';
  _id: Scalars['ID']['output'];
  categoryId: Scalars['ObjectId']['output'];
  categoryName: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  image: Scalars['String']['output'];
  locationId: Scalars['ObjectId']['output'];
  locationName: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  status: Status;
  title: Scalars['String']['output'];
  type: ArticlesType;
};

export type ArticlesPaginateResponse = BasePaginateResponse & {
  __typename?: 'ArticlesPaginateResponse';
  docs: Array<Article>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export enum ArticlesType {
  Default = 'DEFAULT',
  Guide = 'GUIDE'
}

export enum ArticlesTypeAllowed {
  Default = 'DEFAULT',
  Empty = 'EMPTY',
  Guide = 'GUIDE'
}

export type AuthResponseAdmin = {
  __typename?: 'AuthResponseAdmin';
  accessToken: Scalars['String']['output'];
  avatar: Scalars['String']['output'];
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  permissions: Array<PermissionsMenu>;
  phone?: Maybe<Scalars['String']['output']>;
  profile: Array<Roles>;
};

export type BasePaginateResponse = {
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type CategoriesPaginateResponse = BasePaginateResponse & {
  __typename?: 'CategoriesPaginateResponse';
  docs: Array<Category>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type CategoriesReduced = {
  __typename?: 'CategoriesReduced';
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type Category = {
  __typename?: 'Category';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  insurancePlan: Scalars['String']['output'];
  name: Scalars['String']['output'];
  notification: Scalars['String']['output'];
  safety: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  spaceRequirements: Scalars['String']['output'];
  status: Status;
  supervision: Scalars['String']['output'];
};

export type CategoryInput = {
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type ChangePasswordInput = {
  password: Scalars['String']['input'];
  secureId: Scalars['String']['input'];
};

export type CheckRecoverIdInput = {
  secureId: Scalars['String']['input'];
};

export type CompaniesPaginateResponse = BasePaginateResponse & {
  __typename?: 'CompaniesPaginateResponse';
  docs: Array<Company>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Company = {
  __typename?: 'Company';
  _id: Scalars['ID']['output'];
  address: Scalars['String']['output'];
  categories: Array<CategoriesReduced>;
  categoriesId: Array<Scalars['ObjectId']['output']>;
  createdAt: Scalars['DateTime']['output'];
  googleMapsLink: Scalars['String']['output'];
  initialLetter: Scalars['String']['output'];
  locationId: Scalars['ObjectId']['output'];
  locationName: Scalars['String']['output'];
  locationSlug: Scalars['String']['output'];
  merchantListingStatus: MerchantPublishedStatus;
  name: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  reviewsAmount: Scalars['Float']['output'];
  reviewsRating: Scalars['Float']['output'];
  slug: Scalars['String']['output'];
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
  websiteUrl: Scalars['String']['output'];
};

export type CompanyStructured = {
  __typename?: 'CompanyStructured';
  company: Company;
  location: Location;
  products: ProductsPaginateResponse;
  reviews: ReviewsPaginateResponse;
};


export type CompanyStructuredLocationArgs = {
  locationSlug: Scalars['String']['input'];
};


export type CompanyStructuredProductsArgs = {
  search: SearchBaseInput;
  slug: Scalars['String']['input'];
};


export type CompanyStructuredReviewsArgs = {
  search: SearchBaseInput;
};

export type CreateAdminInput = {
  avatar?: Scalars['String']['input'];
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  permissions: Array<PermissionsMenu>;
  profile?: Array<Roles>;
  status?: Status;
};

export type CreateAmenitiesInput = {
  description: Scalars['String']['input'];
  icon: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateArticleInput = {
  categoryId: Scalars['ObjectId']['input'];
  categoryName: Scalars['String']['input'];
  description: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  locationId: Scalars['ObjectId']['input'];
  locationName: Scalars['String']['input'];
  title: Scalars['String']['input'];
  type: ArticlesType;
};

export type CreateCategoryInput = {
  insurancePlan: Scalars['String']['input'];
  name: Scalars['String']['input'];
  notification: Scalars['String']['input'];
  safety: Scalars['String']['input'];
  spaceRequirements: Scalars['String']['input'];
  supervision: Scalars['String']['input'];
};

export type CreateCompanyInput = {
  address: Scalars['String']['input'];
  categories: Array<CategoryInput>;
  categoriesId: Array<Scalars['ObjectId']['input']>;
  googleMapsLink: Scalars['String']['input'];
  locationId: Scalars['ObjectId']['input'];
  locationName: Scalars['String']['input'];
  locationSlug: Scalars['String']['input'];
  merchantListingStatus: MerchantPublishedStatus;
  name: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  reviewsAmount?: Scalars['Int']['input'];
  reviewsRating?: Scalars['Float']['input'];
  websiteUrl: Scalars['String']['input'];
};

export type CreateFaqInput = {
  answer: Scalars['String']['input'];
  categoryId: Scalars['ObjectId']['input'];
  categoryName: Scalars['String']['input'];
  locationId: Scalars['ObjectId']['input'];
  locationName: Scalars['String']['input'];
  question: Scalars['String']['input'];
};

export type CreateLocationInput = {
  categories: Array<CategoryInput>;
  categoriesId: Array<Scalars['ObjectId']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreateProductInput = {
  amenities: Array<Scalars['ObjectId']['input']>;
  categoryId: Scalars['ObjectId']['input'];
  categoryName: Scalars['String']['input'];
  companyId: Scalars['ObjectId']['input'];
  description: Scalars['String']['input'];
  full_price: Scalars['Float']['input'];
  images: Array<Scalars['String']['input']>;
  insurancePlan: Scalars['String']['input'];
  locationId: Scalars['ObjectId']['input'];
  locationName: Scalars['String']['input'];
  minimunDays: Scalars['Float']['input'];
  name: Scalars['String']['input'];
  notification: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  priceType: ProductPriceType;
  safety: Scalars['String']['input'];
  serviceFee: Scalars['Float']['input'];
  spaceRequirements: Scalars['String']['input'];
  supervision: Scalars['String']['input'];
};

export type CreateReviewInput = {
  amount: Scalars['Int']['input'];
  companyId: Scalars['ObjectId']['input'];
  description: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  locationId: Scalars['ObjectId']['input'];
  locationName: Scalars['String']['input'];
};

export type Faq = {
  __typename?: 'Faq';
  _id: Scalars['ID']['output'];
  answer: Scalars['String']['output'];
  categoryId: Scalars['ObjectId']['output'];
  categoryName: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  locationId: Scalars['ObjectId']['output'];
  locationName: Scalars['String']['output'];
  question: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  status: Status;
};

export type FaqsPaginateResponse = BasePaginateResponse & {
  __typename?: 'FaqsPaginateResponse';
  docs: Array<Faq>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Location = {
  __typename?: 'Location';
  _id: Scalars['ID']['output'];
  categories: Array<CategoriesReduced>;
  categoriesId: Array<Scalars['ObjectId']['output']>;
  createdAt: Scalars['DateTime']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
};

export type LocationStructured = {
  __typename?: 'LocationStructured';
  articles: ArticlesPaginateResponse;
  category: Category;
  companies: CompaniesPaginateResponse;
  faqs: FaqsPaginateResponse;
  location: Location;
};


export type LocationStructuredArticlesArgs = {
  search: SearchArticleInput;
};


export type LocationStructuredCompaniesArgs = {
  search: SearchBaseInput;
};


export type LocationStructuredFaqsArgs = {
  search: SearchBaseInput;
};

export type LocationsPaginateResponse = BasePaginateResponse & {
  __typename?: 'LocationsPaginateResponse';
  docs: Array<Location>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type LoginInput = {
  /** Admin email */
  email: Scalars['String']['input'];
  /** Admin/Client password */
  password: Scalars['String']['input'];
};

export enum MerchantPublishedStatus {
  NotListing = 'NOT_LISTING',
  Published = 'PUBLISHED'
}

export type Mutation = {
  __typename?: 'Mutation';
  changePasswordAdmin: Scalars['String']['output'];
  createAdmin: Scalars['String']['output'];
  createAmenities: Scalars['String']['output'];
  createArticle: Scalars['String']['output'];
  createCategory: Scalars['String']['output'];
  createCompany: Scalars['String']['output'];
  createFaq: Scalars['String']['output'];
  createLocation: Scalars['String']['output'];
  createProduct: Scalars['String']['output'];
  createReview: Scalars['String']['output'];
  login: AuthResponseAdmin;
  recoverPasswordAdmin: Scalars['String']['output'];
  removeArticle: Scalars['String']['output'];
  removeCategory: Scalars['String']['output'];
  removeCompany: Scalars['String']['output'];
  removeFaq: Scalars['String']['output'];
  removeLocation: Scalars['String']['output'];
  removeProduct: Scalars['String']['output'];
  removeReview: Scalars['String']['output'];
  toggleActiveInactiveAdmin: Scalars['String']['output'];
  toggleArticleStatus: Scalars['String']['output'];
  toggleCategoryStatus: Scalars['String']['output'];
  toggleCompanyStatus: Scalars['String']['output'];
  toggleFaqStatus: Scalars['String']['output'];
  toggleLocationStatus: Scalars['String']['output'];
  toggleProductStatus: Scalars['String']['output'];
  toggleReviewStatus: Scalars['String']['output'];
  triggerSchemaGenerator: Scalars['String']['output'];
  updateAdmin: Scalars['String']['output'];
  updateAmenities: Scalars['String']['output'];
  updateArticle: Scalars['String']['output'];
  updateCategory: Scalars['String']['output'];
  updateCompany: Scalars['String']['output'];
  updateFaq: Scalars['String']['output'];
  updateLocation: Scalars['String']['output'];
  updateProduct: Scalars['String']['output'];
  updateReview: Scalars['String']['output'];
  updateSetting: Scalars['String']['output'];
};


export type MutationChangePasswordAdminArgs = {
  input: ChangePasswordInput;
};


export type MutationCreateAdminArgs = {
  input: CreateAdminInput;
};


export type MutationCreateAmenitiesArgs = {
  input: CreateAmenitiesInput;
};


export type MutationCreateArticleArgs = {
  input: CreateArticleInput;
};


export type MutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};


export type MutationCreateCompanyArgs = {
  input: CreateCompanyInput;
};


export type MutationCreateFaqArgs = {
  input: CreateFaqInput;
};


export type MutationCreateLocationArgs = {
  input: CreateLocationInput;
};


export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


export type MutationCreateReviewArgs = {
  input: CreateReviewInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRecoverPasswordAdminArgs = {
  input: RecoverPasswordInput;
};


export type MutationRemoveArticleArgs = {
  id: Scalars['ObjectId']['input'];
};


export type MutationRemoveCategoryArgs = {
  id: Scalars['ObjectId']['input'];
};


export type MutationRemoveCompanyArgs = {
  id: Scalars['ObjectId']['input'];
};


export type MutationRemoveFaqArgs = {
  id: Scalars['ObjectId']['input'];
};


export type MutationRemoveLocationArgs = {
  id: Scalars['ObjectId']['input'];
};


export type MutationRemoveProductArgs = {
  id: Scalars['ObjectId']['input'];
};


export type MutationRemoveReviewArgs = {
  id: Scalars['ObjectId']['input'];
};


export type MutationToggleActiveInactiveAdminArgs = {
  id: Scalars['ObjectId']['input'];
};


export type MutationToggleArticleStatusArgs = {
  id: Scalars['ObjectId']['input'];
};


export type MutationToggleCategoryStatusArgs = {
  id: Scalars['ObjectId']['input'];
};


export type MutationToggleCompanyStatusArgs = {
  id: Scalars['ObjectId']['input'];
};


export type MutationToggleFaqStatusArgs = {
  id: Scalars['ObjectId']['input'];
};


export type MutationToggleLocationStatusArgs = {
  id: Scalars['ObjectId']['input'];
};


export type MutationToggleProductStatusArgs = {
  id: Scalars['ObjectId']['input'];
};


export type MutationToggleReviewStatusArgs = {
  id: Scalars['ObjectId']['input'];
};


export type MutationUpdateAdminArgs = {
  input: UpdateAdminInput;
};


export type MutationUpdateAmenitiesArgs = {
  input: UpdateAmenitiesInput;
};


export type MutationUpdateArticleArgs = {
  input: UpdateArticleInput;
};


export type MutationUpdateCategoryArgs = {
  input: UpdateCategoryInput;
};


export type MutationUpdateCompanyArgs = {
  input: UpdateCompanyInput;
};


export type MutationUpdateFaqArgs = {
  input: UpdateFaqInput;
};


export type MutationUpdateLocationArgs = {
  input: UpdateLocationInput;
};


export type MutationUpdateProductArgs = {
  input: UpdateProductInput;
};


export type MutationUpdateReviewArgs = {
  input: UpdateReviewInput;
};


export type MutationUpdateSettingArgs = {
  input: UpdateSettingInput;
};

export enum PermissionsMenu {
  Admins = 'ADMINS',
  Articles = 'ARTICLES',
  Categories = 'CATEGORIES',
  Companies = 'COMPANIES',
  Dashboard = 'DASHBOARD',
  Faqs = 'FAQS',
  Locations = 'LOCATIONS',
  Settings = 'SETTINGS'
}

export type Product = {
  __typename?: 'Product';
  _id: Scalars['ID']['output'];
  amenities: Array<Scalars['ObjectId']['output']>;
  categoryId: Scalars['ObjectId']['output'];
  companyId: Scalars['ObjectId']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  full_price: Scalars['Float']['output'];
  images: Array<Scalars['String']['output']>;
  insurancePlan: Scalars['String']['output'];
  locationId: Scalars['ObjectId']['output'];
  minimunDays: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  notification: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  priceType: ProductPriceType;
  safety: Scalars['String']['output'];
  serviceFee: Scalars['Float']['output'];
  slug: Scalars['String']['output'];
  spaceRequirements: Scalars['String']['output'];
  status: Status;
  supervision: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductPopulate = {
  __typename?: 'ProductPopulate';
  _id: Scalars['ID']['output'];
  amenities: Array<Amenities>;
  categoryId: Category;
  companyId: Company;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  full_price: Scalars['Float']['output'];
  images: Array<Scalars['String']['output']>;
  insurancePlan: Scalars['String']['output'];
  locationId: Location;
  minimunDays: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  notification: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  priceType: ProductPriceType;
  safety: Scalars['String']['output'];
  serviceFee: Scalars['Float']['output'];
  slug: Scalars['String']['output'];
  spaceRequirements: Scalars['String']['output'];
  status: Status;
  supervision: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export enum ProductPriceType {
  Day = 'DAY',
  Hour = 'HOUR'
}

export type ProductsPaginateResponse = BasePaginateResponse & {
  __typename?: 'ProductsPaginateResponse';
  docs: Array<Product>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  checkRecoverSecureIdValid: Scalars['String']['output'];
  findAmenities: Array<Amenities>;
  findCategoriesByLocationBySlug: Location;
  findLocations: LocationsPaginateResponse;
  findOneArticle: Article;
  findOneCompany: Company;
  findOneCompanyBySlug: CompanyStructured;
  findOneLocationBySlug: LocationStructured;
  findOneProduct: Product;
  findOneProductPopulate: ProductPopulate;
  getSettings: Setting;
  /** List admins in Admin */
  listAdmin: AdminPaginateResponse;
  listAmenitiesPaginated: AmenitiesPaginateResponse;
  listArticlesPaginated: ArticlesPaginateResponse;
  listCategoriesPaginated: CategoriesPaginateResponse;
  listCompaniesPaginated: CompaniesPaginateResponse;
  listFaqsPaginated: FaqsPaginateResponse;
  listLocationsPaginated: LocationsPaginateResponse;
  listProductsPaginated: ProductsPaginateResponse;
  listProductsSameCompany: ProductsPaginateResponse;
  listReviewsForCompany: ReviewsPaginateResponse;
  me: Admin;
};


export type QueryCheckRecoverSecureIdValidArgs = {
  input: CheckRecoverIdInput;
};


export type QueryFindAmenitiesArgs = {
  ids: Array<Scalars['ObjectId']['input']>;
};


export type QueryFindCategoriesByLocationBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryFindLocationsArgs = {
  search: SearchBaseInput;
};


export type QueryFindOneArticleArgs = {
  id: Scalars['ObjectId']['input'];
};


export type QueryFindOneCompanyArgs = {
  id: Scalars['ObjectId']['input'];
};


export type QueryFindOneCompanyBySlugArgs = {
  companySlug: Scalars['String']['input'];
};


export type QueryFindOneLocationBySlugArgs = {
  categorySlug: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};


export type QueryFindOneProductArgs = {
  id: Scalars['ObjectId']['input'];
};


export type QueryFindOneProductPopulateArgs = {
  slug: Scalars['String']['input'];
};


export type QueryListAdminArgs = {
  search: SearchAdminInput;
};


export type QueryListAmenitiesPaginatedArgs = {
  search: SearchBaseInput;
};


export type QueryListArticlesPaginatedArgs = {
  search: SearchArticleInput;
};


export type QueryListCategoriesPaginatedArgs = {
  search: SearchBaseInput;
};


export type QueryListCompaniesPaginatedArgs = {
  search: SearchCompanyInput;
};


export type QueryListFaqsPaginatedArgs = {
  search: SearchBaseInput;
};


export type QueryListLocationsPaginatedArgs = {
  search: SearchBaseInput;
};


export type QueryListProductsPaginatedArgs = {
  search: SearchProductInput;
};


export type QueryListProductsSameCompanyArgs = {
  search: SearchProductInput;
  slug: Scalars['String']['input'];
};


export type QueryListReviewsForCompanyArgs = {
  companyId: Scalars['ObjectId']['input'];
  search: SearchBaseInput;
};

export type RecoverPasswordInput = {
  email: Scalars['String']['input'];
};

export type Review = {
  __typename?: 'Review';
  _id: Scalars['ID']['output'];
  amount: Scalars['Int']['output'];
  companyId: Scalars['ObjectId']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  locationId: Scalars['ObjectId']['output'];
  locationName: Scalars['String']['output'];
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
};

export type ReviewsPaginateResponse = BasePaginateResponse & {
  __typename?: 'ReviewsPaginateResponse';
  docs: Array<Review>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export enum Roles {
  Admin = 'ADMIN',
  Manager = 'MANAGER',
  SuperAdmin = 'SUPER_ADMIN'
}

export enum RolesAllowed {
  Admin = 'ADMIN',
  Empty = 'EMPTY',
  Manager = 'MANAGER'
}

export type SearchAdminInput = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
  page?: Scalars['Int']['input'];
  perPage?: Scalars['Int']['input'];
  q?: Scalars['String']['input'];
  role?: RolesAllowed;
  sort?: InputMaybe<Scalars['String']['input']>;
  sortColumn?: InputMaybe<Scalars['String']['input']>;
  status?: StatusAllowed;
};

export type SearchArticleInput = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
  page?: Scalars['Int']['input'];
  perPage?: Scalars['Int']['input'];
  q?: Scalars['String']['input'];
  sort?: InputMaybe<Scalars['String']['input']>;
  sortColumn?: InputMaybe<Scalars['String']['input']>;
  status?: StatusAllowed;
  type?: ArticlesTypeAllowed;
};

export type SearchBaseInput = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
  page?: Scalars['Int']['input'];
  perPage?: Scalars['Int']['input'];
  q?: Scalars['String']['input'];
  sort?: InputMaybe<Scalars['String']['input']>;
  sortColumn?: InputMaybe<Scalars['String']['input']>;
  status?: StatusAllowed;
};

export type SearchCompanyInput = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
  merchantListingStatus?: Array<MerchantPublishedStatus>;
  page?: Scalars['Int']['input'];
  perPage?: Scalars['Int']['input'];
  q?: Scalars['String']['input'];
  sort?: InputMaybe<Scalars['String']['input']>;
  sortColumn?: InputMaybe<Scalars['String']['input']>;
  status?: StatusAllowed;
};

export type SearchProductInput = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
  companyId: Scalars['ObjectId']['input'];
  page?: Scalars['Int']['input'];
  perPage?: Scalars['Int']['input'];
  q?: Scalars['String']['input'];
  sort?: InputMaybe<Scalars['String']['input']>;
  sortColumn?: InputMaybe<Scalars['String']['input']>;
  status?: StatusAllowed;
};

export type Setting = {
  __typename?: 'Setting';
  _id: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  serviceFee: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export enum Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export enum StatusAllowed {
  Active = 'ACTIVE',
  Empty = 'EMPTY',
  Inactive = 'INACTIVE'
}

export type UpdateAdminData = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<PermissionsMenu>>;
  profile?: InputMaybe<Array<Roles>>;
  status?: InputMaybe<Status>;
};

export type UpdateAdminInput = {
  _id: Scalars['ObjectId']['input'];
  data: UpdateAdminData;
};

export type UpdateAmenitiesData = {
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAmenitiesInput = {
  _id: Scalars['ObjectId']['input'];
  data: UpdateAmenitiesData;
};

export type UpdateArticleData = {
  categoryId?: InputMaybe<Scalars['ObjectId']['input']>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  locationId?: InputMaybe<Scalars['ObjectId']['input']>;
  locationName?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ArticlesType>;
};

export type UpdateArticleInput = {
  _id: Scalars['ObjectId']['input'];
  data: UpdateArticleData;
};

export type UpdateCategoryData = {
  insurancePlan?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notification?: InputMaybe<Scalars['String']['input']>;
  safety?: InputMaybe<Scalars['String']['input']>;
  spaceRequirements?: InputMaybe<Scalars['String']['input']>;
  supervision?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCategoryInput = {
  _id: Scalars['ObjectId']['input'];
  data: UpdateCategoryData;
};

export type UpdateCompanyData = {
  address?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<CategoryInput>>;
  categoriesId?: InputMaybe<Array<Scalars['ObjectId']['input']>>;
  googleMapsLink?: InputMaybe<Scalars['String']['input']>;
  locationId?: InputMaybe<Scalars['ObjectId']['input']>;
  locationName?: InputMaybe<Scalars['String']['input']>;
  locationSlug?: InputMaybe<Scalars['String']['input']>;
  merchantListingStatus?: InputMaybe<MerchantPublishedStatus>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  reviewsAmount?: InputMaybe<Scalars['Int']['input']>;
  reviewsRating?: InputMaybe<Scalars['Float']['input']>;
  websiteUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCompanyInput = {
  _id: Scalars['ObjectId']['input'];
  data: UpdateCompanyData;
};

export type UpdateFaqData = {
  answer?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['ObjectId']['input']>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  locationId?: InputMaybe<Scalars['ObjectId']['input']>;
  locationName?: InputMaybe<Scalars['String']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFaqInput = {
  _id: Scalars['ObjectId']['input'];
  data: UpdateFaqData;
};

export type UpdateLocationData = {
  categories?: InputMaybe<Array<CategoryInput>>;
  categoriesId?: InputMaybe<Array<Scalars['ObjectId']['input']>>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateLocationInput = {
  _id: Scalars['ObjectId']['input'];
  data: UpdateLocationData;
};

export type UpdateProductData = {
  amenities?: InputMaybe<Array<Scalars['ObjectId']['input']>>;
  categoryId?: InputMaybe<Scalars['ObjectId']['input']>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  companyId?: InputMaybe<Scalars['ObjectId']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  full_price?: InputMaybe<Scalars['Float']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  insurancePlan?: InputMaybe<Scalars['String']['input']>;
  locationId?: InputMaybe<Scalars['ObjectId']['input']>;
  locationName?: InputMaybe<Scalars['String']['input']>;
  minimunDays?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notification?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  priceType?: InputMaybe<ProductPriceType>;
  safety?: InputMaybe<Scalars['String']['input']>;
  serviceFee?: InputMaybe<Scalars['Float']['input']>;
  spaceRequirements?: InputMaybe<Scalars['String']['input']>;
  supervision?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProductInput = {
  _id: Scalars['ObjectId']['input'];
  data: UpdateProductData;
};

export type UpdateReviewData = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  companyId?: InputMaybe<Scalars['ObjectId']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  locationId?: InputMaybe<Scalars['ObjectId']['input']>;
  locationName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateReviewInput = {
  _id: Scalars['ObjectId']['input'];
  data: UpdateReviewData;
};

export type UpdateSettingData = {
  serviceFee: Scalars['Float']['input'];
};

export type UpdateSettingInput = {
  data: UpdateSettingData;
};

export type AdminProfileFragment = { __typename?: 'Admin', _id: string, email: string, fullName: string, permissions: Array<PermissionsMenu>, profile: Array<Roles> };

export type AdminLoginFragment = { __typename?: 'AuthResponseAdmin', accessToken: string, email: string, fullName: string, permissions: Array<PermissionsMenu>, profile: Array<Roles>, avatar: string };

export type CreateAdminMutationVariables = Exact<{
  input: CreateAdminInput;
}>;


export type CreateAdminMutation = { __typename?: 'Mutation', createAdmin: string };

export type UpdateAdminMutationVariables = Exact<{
  input: UpdateAdminInput;
}>;


export type UpdateAdminMutation = { __typename?: 'Mutation', updateAdmin: string };

export type ToggleAdminStatusMutationVariables = Exact<{
  id: Scalars['ObjectId']['input'];
}>;


export type ToggleAdminStatusMutation = { __typename?: 'Mutation', toggleActiveInactiveAdmin: string };

export type CreateArticleMutationVariables = Exact<{
  input: CreateArticleInput;
}>;


export type CreateArticleMutation = { __typename?: 'Mutation', createArticle: string };

export type UpdateArticleMutationVariables = Exact<{
  input: UpdateArticleInput;
}>;


export type UpdateArticleMutation = { __typename?: 'Mutation', updateArticle: string };

export type RemoveArticleMutationVariables = Exact<{
  id: Scalars['ObjectId']['input'];
}>;


export type RemoveArticleMutation = { __typename?: 'Mutation', removeArticle: string };

export type ToggleArticleStatusMutationVariables = Exact<{
  id: Scalars['ObjectId']['input'];
}>;


export type ToggleArticleStatusMutation = { __typename?: 'Mutation', toggleArticleStatus: string };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthResponseAdmin', accessToken: string, email: string, fullName: string, permissions: Array<PermissionsMenu>, profile: Array<Roles>, avatar: string } };

export type RecoverPasswordAdminMutationVariables = Exact<{
  input: RecoverPasswordInput;
}>;


export type RecoverPasswordAdminMutation = { __typename?: 'Mutation', recoverPasswordAdmin: string };

export type CheckRecoverSecureIdValidQueryVariables = Exact<{
  input: CheckRecoverIdInput;
}>;


export type CheckRecoverSecureIdValidQuery = { __typename?: 'Query', checkRecoverSecureIdValid: string };

export type ChangePasswordAdminMutationVariables = Exact<{
  input: ChangePasswordInput;
}>;


export type ChangePasswordAdminMutation = { __typename?: 'Mutation', changePasswordAdmin: string };

export type CreateCategoryMutationVariables = Exact<{
  input: CreateCategoryInput;
}>;


export type CreateCategoryMutation = { __typename?: 'Mutation', createCategory: string };

export type UpdateCategoryMutationVariables = Exact<{
  input: UpdateCategoryInput;
}>;


export type UpdateCategoryMutation = { __typename?: 'Mutation', updateCategory: string };

export type RemoveCategoryMutationVariables = Exact<{
  id: Scalars['ObjectId']['input'];
}>;


export type RemoveCategoryMutation = { __typename?: 'Mutation', removeCategory: string };

export type ToggleCategoryStatusMutationVariables = Exact<{
  id: Scalars['ObjectId']['input'];
}>;


export type ToggleCategoryStatusMutation = { __typename?: 'Mutation', toggleCategoryStatus: string };

export type CreateCompanyMutationVariables = Exact<{
  input: CreateCompanyInput;
}>;


export type CreateCompanyMutation = { __typename?: 'Mutation', createCompany: string };

export type UpdateCompanyMutationVariables = Exact<{
  input: UpdateCompanyInput;
}>;


export type UpdateCompanyMutation = { __typename?: 'Mutation', updateCompany: string };

export type RemoveCompanyMutationVariables = Exact<{
  id: Scalars['ObjectId']['input'];
}>;


export type RemoveCompanyMutation = { __typename?: 'Mutation', removeCompany: string };

export type ToggleCompanyStatusMutationVariables = Exact<{
  id: Scalars['ObjectId']['input'];
}>;


export type ToggleCompanyStatusMutation = { __typename?: 'Mutation', toggleCompanyStatus: string };

export type CreateFaqMutationVariables = Exact<{
  input: CreateFaqInput;
}>;


export type CreateFaqMutation = { __typename?: 'Mutation', createFaq: string };

export type UpdateFaqMutationVariables = Exact<{
  input: UpdateFaqInput;
}>;


export type UpdateFaqMutation = { __typename?: 'Mutation', updateFaq: string };

export type RemoveFaqMutationVariables = Exact<{
  id: Scalars['ObjectId']['input'];
}>;


export type RemoveFaqMutation = { __typename?: 'Mutation', removeFaq: string };

export type ToggleFaqStatusMutationVariables = Exact<{
  id: Scalars['ObjectId']['input'];
}>;


export type ToggleFaqStatusMutation = { __typename?: 'Mutation', toggleFaqStatus: string };

export type CreateLocationMutationVariables = Exact<{
  input: CreateLocationInput;
}>;


export type CreateLocationMutation = { __typename?: 'Mutation', createLocation: string };

export type UpdateLocationMutationVariables = Exact<{
  input: UpdateLocationInput;
}>;


export type UpdateLocationMutation = { __typename?: 'Mutation', updateLocation: string };

export type RemoveLocationMutationVariables = Exact<{
  id: Scalars['ObjectId']['input'];
}>;


export type RemoveLocationMutation = { __typename?: 'Mutation', removeLocation: string };

export type ToggleLocationStatusMutationVariables = Exact<{
  id: Scalars['ObjectId']['input'];
}>;


export type ToggleLocationStatusMutation = { __typename?: 'Mutation', toggleLocationStatus: string };

export type CreateProductMutationVariables = Exact<{
  input: CreateProductInput;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct: string };

export type UpdateProductMutationVariables = Exact<{
  input: UpdateProductInput;
}>;


export type UpdateProductMutation = { __typename?: 'Mutation', updateProduct: string };

export type RemoveProductMutationVariables = Exact<{
  id: Scalars['ObjectId']['input'];
}>;


export type RemoveProductMutation = { __typename?: 'Mutation', removeProduct: string };

export type ToggleProductStatusMutationVariables = Exact<{
  id: Scalars['ObjectId']['input'];
}>;


export type ToggleProductStatusMutation = { __typename?: 'Mutation', toggleProductStatus: string };

export type CreateAmenitiesMutationVariables = Exact<{
  input: CreateAmenitiesInput;
}>;


export type CreateAmenitiesMutation = { __typename?: 'Mutation', createAmenities: string };

export type UpdateAmenitiesMutationVariables = Exact<{
  input: UpdateAmenitiesInput;
}>;


export type UpdateAmenitiesMutation = { __typename?: 'Mutation', updateAmenities: string };

export type CreateReviewMutationVariables = Exact<{
  input: CreateReviewInput;
}>;


export type CreateReviewMutation = { __typename?: 'Mutation', createReview: string };

export type UpdateReviewMutationVariables = Exact<{
  input: UpdateReviewInput;
}>;


export type UpdateReviewMutation = { __typename?: 'Mutation', updateReview: string };

export type RemoveReviewMutationVariables = Exact<{
  id: Scalars['ObjectId']['input'];
}>;


export type RemoveReviewMutation = { __typename?: 'Mutation', removeReview: string };

export type ToggleReviewStatusMutationVariables = Exact<{
  id: Scalars['ObjectId']['input'];
}>;


export type ToggleReviewStatusMutation = { __typename?: 'Mutation', toggleReviewStatus: string };

export type UpdateSettingsMutationVariables = Exact<{
  input: UpdateSettingInput;
}>;


export type UpdateSettingsMutation = { __typename?: 'Mutation', updateSetting: string };

export type ListAdminQueryVariables = Exact<{
  search: SearchAdminInput;
}>;


export type ListAdminQuery = { __typename?: 'Query', listAdmin: { __typename?: 'AdminPaginateResponse', page: number, limit: number, totalDocs: number, totalPages: number, nextPage?: number | null, prevPage?: number | null, hasNextPage: boolean, hasPrevPage: boolean, docs: Array<{ __typename?: 'Admin', _id: string, createdAt: any, email: string, fullName: string, permissions: Array<PermissionsMenu>, profile: Array<Roles>, status: Status, avatar: string, role: string }> } };

export type ListArticlesPaginatedQueryVariables = Exact<{
  search: SearchArticleInput;
}>;


export type ListArticlesPaginatedQuery = { __typename?: 'Query', listArticlesPaginated: { __typename?: 'ArticlesPaginateResponse', page: number, prevPage?: number | null, nextPage?: number | null, hasNextPage: boolean, hasPrevPage: boolean, limit: number, totalDocs: number, totalPages: number, docs: Array<{ __typename?: 'Article', _id: string, title: string, categoryName: string, locationName: string, type: ArticlesType, status: Status }> } };

export type FindOneArticleQueryVariables = Exact<{
  id: Scalars['ObjectId']['input'];
}>;


export type FindOneArticleQuery = { __typename?: 'Query', findOneArticle: { __typename?: 'Article', _id: string, title: string, locationId: any, categoryId: any, description: string, image: string, categoryName: string, locationName: string, type: ArticlesType, status: Status } };

export type ListCategoriesPaginatedQueryVariables = Exact<{
  search: SearchBaseInput;
}>;


export type ListCategoriesPaginatedQuery = { __typename?: 'Query', listCategoriesPaginated: { __typename?: 'CategoriesPaginateResponse', page: number, prevPage?: number | null, nextPage?: number | null, hasNextPage: boolean, hasPrevPage: boolean, limit: number, totalDocs: number, totalPages: number, docs: Array<{ __typename?: 'Category', _id: string, name: string, spaceRequirements: string, supervision: string, safety: string, insurancePlan: string, notification: string, status: Status, createdAt: any }> } };

export type ListAllCategoriesOptionsQueryVariables = Exact<{
  search: SearchBaseInput;
}>;


export type ListAllCategoriesOptionsQuery = { __typename?: 'Query', listCategoriesPaginated: { __typename?: 'CategoriesPaginateResponse', docs: Array<{ __typename?: 'Category', _id: string, name: string, slug: string }> } };

export type ListCompaniesPaginatedQueryVariables = Exact<{
  search: SearchCompanyInput;
}>;


export type ListCompaniesPaginatedQuery = { __typename?: 'Query', listCompaniesPaginated: { __typename?: 'CompaniesPaginateResponse', page: number, prevPage?: number | null, nextPage?: number | null, hasNextPage: boolean, hasPrevPage: boolean, limit: number, totalDocs: number, totalPages: number, docs: Array<{ __typename?: 'Company', _id: string, name: string, googleMapsLink: string, categoriesId: Array<any>, websiteUrl: string, slug: string, locationSlug: string, locationName: string, locationId: any, address: string, phoneNumber: string, status: Status, merchantListingStatus: MerchantPublishedStatus, createdAt: any, categories: Array<{ __typename?: 'CategoriesReduced', name: string, slug: string }> }> } };

export type ListAllCompaniesOptionsQueryVariables = Exact<{
  search: SearchCompanyInput;
}>;


export type ListAllCompaniesOptionsQuery = { __typename?: 'Query', listCompaniesPaginated: { __typename?: 'CompaniesPaginateResponse', docs: Array<{ __typename?: 'Company', _id: string, name: string }> } };

export type FindOneCompanyQueryVariables = Exact<{
  id: Scalars['ObjectId']['input'];
}>;


export type FindOneCompanyQuery = { __typename?: 'Query', findOneCompany: { __typename?: 'Company', _id: string, name: string, googleMapsLink: string, reviewsAmount: number, reviewsRating: number, categoriesId: Array<any>, websiteUrl: string, slug: string, locationSlug: string, locationName: string, locationId: any, address: string, phoneNumber: string, status: Status, merchantListingStatus: MerchantPublishedStatus, createdAt: any, categories: Array<{ __typename?: 'CategoriesReduced', name: string, slug: string }> } };

export type ListFaqsPaginatedQueryVariables = Exact<{
  search: SearchBaseInput;
}>;


export type ListFaqsPaginatedQuery = { __typename?: 'Query', listFaqsPaginated: { __typename?: 'FaqsPaginateResponse', page: number, prevPage?: number | null, nextPage?: number | null, hasNextPage: boolean, hasPrevPage: boolean, limit: number, totalDocs: number, totalPages: number, docs: Array<{ __typename?: 'Faq', _id: string, question: string, answer: string, slug: string, categoryId: any, categoryName: string, locationId: any, locationName: string, status: Status, createdAt: any }> } };

export type ListLocationsPaginatedQueryVariables = Exact<{
  search: SearchBaseInput;
}>;


export type ListLocationsPaginatedQuery = { __typename?: 'Query', listLocationsPaginated: { __typename?: 'LocationsPaginateResponse', page: number, prevPage?: number | null, nextPage?: number | null, hasNextPage: boolean, hasPrevPage: boolean, limit: number, totalDocs: number, totalPages: number, docs: Array<{ __typename?: 'Location', _id: string, name: string, slug: string, image: string, status: Status, categoriesId: Array<any>, createdAt: any, categories: Array<{ __typename?: 'CategoriesReduced', name: string, slug: string }> }> } };

export type ListAllLocationsOptionsQueryVariables = Exact<{
  search: SearchBaseInput;
}>;


export type ListAllLocationsOptionsQuery = { __typename?: 'Query', listLocationsPaginated: { __typename?: 'LocationsPaginateResponse', docs: Array<{ __typename?: 'Location', _id: string, name: string, slug: string }> } };

export type ListProductsPaginatedQueryVariables = Exact<{
  search: SearchProductInput;
}>;


export type ListProductsPaginatedQuery = { __typename?: 'Query', listProductsPaginated: { __typename?: 'ProductsPaginateResponse', page: number, prevPage?: number | null, nextPage?: number | null, hasNextPage: boolean, hasPrevPage: boolean, limit: number, totalDocs: number, totalPages: number, docs: Array<{ __typename?: 'Product', _id: string, name: string, slug: string, images: Array<string>, price: number, priceType: ProductPriceType, serviceFee: number, minimunDays: number, companyId: any, categoryId: any, locationId: any, status: Status, createdAt: any }> } };

export type FindOneProductQueryVariables = Exact<{
  id: Scalars['ObjectId']['input'];
}>;


export type FindOneProductQuery = { __typename?: 'Query', findOneProduct: { __typename?: 'Product', _id: string, name: string, images: Array<string>, price: number, amenities: Array<any>, description: string, priceType: ProductPriceType, serviceFee: number, full_price: number, minimunDays: number, companyId: any, categoryId: any, locationId: any, spaceRequirements: string, supervision: string, safety: string, insurancePlan: string, notification: string } };

export type FindAmenitiesQueryVariables = Exact<{
  ids: Array<Scalars['ObjectId']['input']> | Scalars['ObjectId']['input'];
}>;


export type FindAmenitiesQuery = { __typename?: 'Query', findAmenities: Array<{ __typename?: 'Amenities', _id: string, name: string, description: string, icon: string }> };

export type ListAmenitiesPaginatedQueryVariables = Exact<{
  search: SearchBaseInput;
}>;


export type ListAmenitiesPaginatedQuery = { __typename?: 'Query', listAmenitiesPaginated: { __typename?: 'AmenitiesPaginateResponse', page: number, totalDocs: number, docs: Array<{ __typename?: 'Amenities', _id: string, name: string, description: string, icon: string }> } };

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { __typename?: 'Query', me: { __typename: 'Admin', _id: string, email: string, fullName: string, permissions: Array<PermissionsMenu>, profile: Array<Roles>, avatar: string, role: string } };

export type ListReviewsForCompanyPaginatedQueryVariables = Exact<{
  search: SearchBaseInput;
  companyId: Scalars['ObjectId']['input'];
}>;


export type ListReviewsForCompanyPaginatedQuery = { __typename?: 'Query', listReviewsForCompany: { __typename?: 'ReviewsPaginateResponse', page: number, prevPage?: number | null, nextPage?: number | null, hasNextPage: boolean, hasPrevPage: boolean, limit: number, totalDocs: number, totalPages: number, docs: Array<{ __typename?: 'Review', _id: string, fullName: string, description: string, companyId: any, locationId: any, amount: number, locationName: string, status: Status, createdAt: any }> } };

export type GetSetttingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSetttingsQuery = { __typename?: 'Query', getSettings: { __typename?: 'Setting', _id: string, serviceFee: number, createdAt: any, updatedAt: any } };

export const AdminProfileFragmentDoc = gql`
    fragment AdminProfile on Admin {
  _id
  email
  fullName
  permissions
  profile
}
    `;
export const AdminLoginFragmentDoc = gql`
    fragment AdminLogin on AuthResponseAdmin {
  accessToken
  email
  fullName
  permissions
  profile
  avatar
}
    `;
export const CreateAdminDocument = gql`
    mutation CreateAdmin($input: CreateAdminInput!) {
  createAdmin(input: $input)
}
    `;
export type CreateAdminMutationFn = Apollo.MutationFunction<CreateAdminMutation, CreateAdminMutationVariables>;

/**
 * __useCreateAdminMutation__
 *
 * To run a mutation, you first call `useCreateAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAdminMutation, { data, loading, error }] = useCreateAdminMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAdminMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateAdminMutation, CreateAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateAdminMutation, CreateAdminMutationVariables>(CreateAdminDocument, options);
      }
export type CreateAdminMutationHookResult = ReturnType<typeof useCreateAdminMutation>;
export type CreateAdminMutationResult = Apollo.MutationResult<CreateAdminMutation>;
export type CreateAdminMutationOptions = Apollo.BaseMutationOptions<CreateAdminMutation, CreateAdminMutationVariables>;
export const UpdateAdminDocument = gql`
    mutation UpdateAdmin($input: UpdateAdminInput!) {
  updateAdmin(input: $input)
}
    `;
export type UpdateAdminMutationFn = Apollo.MutationFunction<UpdateAdminMutation, UpdateAdminMutationVariables>;

/**
 * __useUpdateAdminMutation__
 *
 * To run a mutation, you first call `useUpdateAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAdminMutation, { data, loading, error }] = useUpdateAdminMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAdminMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateAdminMutation, UpdateAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateAdminMutation, UpdateAdminMutationVariables>(UpdateAdminDocument, options);
      }
export type UpdateAdminMutationHookResult = ReturnType<typeof useUpdateAdminMutation>;
export type UpdateAdminMutationResult = Apollo.MutationResult<UpdateAdminMutation>;
export type UpdateAdminMutationOptions = Apollo.BaseMutationOptions<UpdateAdminMutation, UpdateAdminMutationVariables>;
export const ToggleAdminStatusDocument = gql`
    mutation ToggleAdminStatus($id: ObjectId!) {
  toggleActiveInactiveAdmin(id: $id)
}
    `;
export type ToggleAdminStatusMutationFn = Apollo.MutationFunction<ToggleAdminStatusMutation, ToggleAdminStatusMutationVariables>;

/**
 * __useToggleAdminStatusMutation__
 *
 * To run a mutation, you first call `useToggleAdminStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleAdminStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleAdminStatusMutation, { data, loading, error }] = useToggleAdminStatusMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleAdminStatusMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ToggleAdminStatusMutation, ToggleAdminStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ToggleAdminStatusMutation, ToggleAdminStatusMutationVariables>(ToggleAdminStatusDocument, options);
      }
export type ToggleAdminStatusMutationHookResult = ReturnType<typeof useToggleAdminStatusMutation>;
export type ToggleAdminStatusMutationResult = Apollo.MutationResult<ToggleAdminStatusMutation>;
export type ToggleAdminStatusMutationOptions = Apollo.BaseMutationOptions<ToggleAdminStatusMutation, ToggleAdminStatusMutationVariables>;
export const CreateArticleDocument = gql`
    mutation CreateArticle($input: CreateArticleInput!) {
  createArticle(input: $input)
}
    `;
export type CreateArticleMutationFn = Apollo.MutationFunction<CreateArticleMutation, CreateArticleMutationVariables>;

/**
 * __useCreateArticleMutation__
 *
 * To run a mutation, you first call `useCreateArticleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateArticleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createArticleMutation, { data, loading, error }] = useCreateArticleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateArticleMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateArticleMutation, CreateArticleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateArticleMutation, CreateArticleMutationVariables>(CreateArticleDocument, options);
      }
export type CreateArticleMutationHookResult = ReturnType<typeof useCreateArticleMutation>;
export type CreateArticleMutationResult = Apollo.MutationResult<CreateArticleMutation>;
export type CreateArticleMutationOptions = Apollo.BaseMutationOptions<CreateArticleMutation, CreateArticleMutationVariables>;
export const UpdateArticleDocument = gql`
    mutation UpdateArticle($input: UpdateArticleInput!) {
  updateArticle(input: $input)
}
    `;
export type UpdateArticleMutationFn = Apollo.MutationFunction<UpdateArticleMutation, UpdateArticleMutationVariables>;

/**
 * __useUpdateArticleMutation__
 *
 * To run a mutation, you first call `useUpdateArticleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateArticleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateArticleMutation, { data, loading, error }] = useUpdateArticleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateArticleMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateArticleMutation, UpdateArticleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateArticleMutation, UpdateArticleMutationVariables>(UpdateArticleDocument, options);
      }
export type UpdateArticleMutationHookResult = ReturnType<typeof useUpdateArticleMutation>;
export type UpdateArticleMutationResult = Apollo.MutationResult<UpdateArticleMutation>;
export type UpdateArticleMutationOptions = Apollo.BaseMutationOptions<UpdateArticleMutation, UpdateArticleMutationVariables>;
export const RemoveArticleDocument = gql`
    mutation RemoveArticle($id: ObjectId!) {
  removeArticle(id: $id)
}
    `;
export type RemoveArticleMutationFn = Apollo.MutationFunction<RemoveArticleMutation, RemoveArticleMutationVariables>;

/**
 * __useRemoveArticleMutation__
 *
 * To run a mutation, you first call `useRemoveArticleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveArticleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeArticleMutation, { data, loading, error }] = useRemoveArticleMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveArticleMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveArticleMutation, RemoveArticleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<RemoveArticleMutation, RemoveArticleMutationVariables>(RemoveArticleDocument, options);
      }
export type RemoveArticleMutationHookResult = ReturnType<typeof useRemoveArticleMutation>;
export type RemoveArticleMutationResult = Apollo.MutationResult<RemoveArticleMutation>;
export type RemoveArticleMutationOptions = Apollo.BaseMutationOptions<RemoveArticleMutation, RemoveArticleMutationVariables>;
export const ToggleArticleStatusDocument = gql`
    mutation ToggleArticleStatus($id: ObjectId!) {
  toggleArticleStatus(id: $id)
}
    `;
export type ToggleArticleStatusMutationFn = Apollo.MutationFunction<ToggleArticleStatusMutation, ToggleArticleStatusMutationVariables>;

/**
 * __useToggleArticleStatusMutation__
 *
 * To run a mutation, you first call `useToggleArticleStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleArticleStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleArticleStatusMutation, { data, loading, error }] = useToggleArticleStatusMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleArticleStatusMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ToggleArticleStatusMutation, ToggleArticleStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ToggleArticleStatusMutation, ToggleArticleStatusMutationVariables>(ToggleArticleStatusDocument, options);
      }
export type ToggleArticleStatusMutationHookResult = ReturnType<typeof useToggleArticleStatusMutation>;
export type ToggleArticleStatusMutationResult = Apollo.MutationResult<ToggleArticleStatusMutation>;
export type ToggleArticleStatusMutationOptions = Apollo.BaseMutationOptions<ToggleArticleStatusMutation, ToggleArticleStatusMutationVariables>;
export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    accessToken
    email
    fullName
    permissions
    profile
    avatar
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RecoverPasswordAdminDocument = gql`
    mutation RecoverPasswordAdmin($input: RecoverPasswordInput!) {
  recoverPasswordAdmin(input: $input)
}
    `;
export type RecoverPasswordAdminMutationFn = Apollo.MutationFunction<RecoverPasswordAdminMutation, RecoverPasswordAdminMutationVariables>;

/**
 * __useRecoverPasswordAdminMutation__
 *
 * To run a mutation, you first call `useRecoverPasswordAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRecoverPasswordAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [recoverPasswordAdminMutation, { data, loading, error }] = useRecoverPasswordAdminMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRecoverPasswordAdminMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RecoverPasswordAdminMutation, RecoverPasswordAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<RecoverPasswordAdminMutation, RecoverPasswordAdminMutationVariables>(RecoverPasswordAdminDocument, options);
      }
export type RecoverPasswordAdminMutationHookResult = ReturnType<typeof useRecoverPasswordAdminMutation>;
export type RecoverPasswordAdminMutationResult = Apollo.MutationResult<RecoverPasswordAdminMutation>;
export type RecoverPasswordAdminMutationOptions = Apollo.BaseMutationOptions<RecoverPasswordAdminMutation, RecoverPasswordAdminMutationVariables>;
export const CheckRecoverSecureIdValidDocument = gql`
    query CheckRecoverSecureIdValid($input: CheckRecoverIdInput!) {
  checkRecoverSecureIdValid(input: $input)
}
    `;

/**
 * __useCheckRecoverSecureIdValidQuery__
 *
 * To run a query within a React component, call `useCheckRecoverSecureIdValidQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckRecoverSecureIdValidQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckRecoverSecureIdValidQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCheckRecoverSecureIdValidQuery(baseOptions: ApolloReactHooks.QueryHookOptions<CheckRecoverSecureIdValidQuery, CheckRecoverSecureIdValidQueryVariables> & ({ variables: CheckRecoverSecureIdValidQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<CheckRecoverSecureIdValidQuery, CheckRecoverSecureIdValidQueryVariables>(CheckRecoverSecureIdValidDocument, options);
      }
export function useCheckRecoverSecureIdValidLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CheckRecoverSecureIdValidQuery, CheckRecoverSecureIdValidQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<CheckRecoverSecureIdValidQuery, CheckRecoverSecureIdValidQueryVariables>(CheckRecoverSecureIdValidDocument, options);
        }
export function useCheckRecoverSecureIdValidSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<CheckRecoverSecureIdValidQuery, CheckRecoverSecureIdValidQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<CheckRecoverSecureIdValidQuery, CheckRecoverSecureIdValidQueryVariables>(CheckRecoverSecureIdValidDocument, options);
        }
export type CheckRecoverSecureIdValidQueryHookResult = ReturnType<typeof useCheckRecoverSecureIdValidQuery>;
export type CheckRecoverSecureIdValidLazyQueryHookResult = ReturnType<typeof useCheckRecoverSecureIdValidLazyQuery>;
export type CheckRecoverSecureIdValidSuspenseQueryHookResult = ReturnType<typeof useCheckRecoverSecureIdValidSuspenseQuery>;
export type CheckRecoverSecureIdValidQueryResult = Apollo.QueryResult<CheckRecoverSecureIdValidQuery, CheckRecoverSecureIdValidQueryVariables>;
export const ChangePasswordAdminDocument = gql`
    mutation ChangePasswordAdmin($input: ChangePasswordInput!) {
  changePasswordAdmin(input: $input)
}
    `;
export type ChangePasswordAdminMutationFn = Apollo.MutationFunction<ChangePasswordAdminMutation, ChangePasswordAdminMutationVariables>;

/**
 * __useChangePasswordAdminMutation__
 *
 * To run a mutation, you first call `useChangePasswordAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordAdminMutation, { data, loading, error }] = useChangePasswordAdminMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangePasswordAdminMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangePasswordAdminMutation, ChangePasswordAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ChangePasswordAdminMutation, ChangePasswordAdminMutationVariables>(ChangePasswordAdminDocument, options);
      }
export type ChangePasswordAdminMutationHookResult = ReturnType<typeof useChangePasswordAdminMutation>;
export type ChangePasswordAdminMutationResult = Apollo.MutationResult<ChangePasswordAdminMutation>;
export type ChangePasswordAdminMutationOptions = Apollo.BaseMutationOptions<ChangePasswordAdminMutation, ChangePasswordAdminMutationVariables>;
export const CreateCategoryDocument = gql`
    mutation CreateCategory($input: CreateCategoryInput!) {
  createCategory(input: $input)
}
    `;
export type CreateCategoryMutationFn = Apollo.MutationFunction<CreateCategoryMutation, CreateCategoryMutationVariables>;

/**
 * __useCreateCategoryMutation__
 *
 * To run a mutation, you first call `useCreateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCategoryMutation, { data, loading, error }] = useCreateCategoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCategoryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateCategoryMutation, CreateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateCategoryMutation, CreateCategoryMutationVariables>(CreateCategoryDocument, options);
      }
export type CreateCategoryMutationHookResult = ReturnType<typeof useCreateCategoryMutation>;
export type CreateCategoryMutationResult = Apollo.MutationResult<CreateCategoryMutation>;
export type CreateCategoryMutationOptions = Apollo.BaseMutationOptions<CreateCategoryMutation, CreateCategoryMutationVariables>;
export const UpdateCategoryDocument = gql`
    mutation UpdateCategory($input: UpdateCategoryInput!) {
  updateCategory(input: $input)
}
    `;
export type UpdateCategoryMutationFn = Apollo.MutationFunction<UpdateCategoryMutation, UpdateCategoryMutationVariables>;

/**
 * __useUpdateCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCategoryMutation, { data, loading, error }] = useUpdateCategoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCategoryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateCategoryMutation, UpdateCategoryMutationVariables>(UpdateCategoryDocument, options);
      }
export type UpdateCategoryMutationHookResult = ReturnType<typeof useUpdateCategoryMutation>;
export type UpdateCategoryMutationResult = Apollo.MutationResult<UpdateCategoryMutation>;
export type UpdateCategoryMutationOptions = Apollo.BaseMutationOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>;
export const RemoveCategoryDocument = gql`
    mutation RemoveCategory($id: ObjectId!) {
  removeCategory(id: $id)
}
    `;
export type RemoveCategoryMutationFn = Apollo.MutationFunction<RemoveCategoryMutation, RemoveCategoryMutationVariables>;

/**
 * __useRemoveCategoryMutation__
 *
 * To run a mutation, you first call `useRemoveCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCategoryMutation, { data, loading, error }] = useRemoveCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveCategoryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveCategoryMutation, RemoveCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<RemoveCategoryMutation, RemoveCategoryMutationVariables>(RemoveCategoryDocument, options);
      }
export type RemoveCategoryMutationHookResult = ReturnType<typeof useRemoveCategoryMutation>;
export type RemoveCategoryMutationResult = Apollo.MutationResult<RemoveCategoryMutation>;
export type RemoveCategoryMutationOptions = Apollo.BaseMutationOptions<RemoveCategoryMutation, RemoveCategoryMutationVariables>;
export const ToggleCategoryStatusDocument = gql`
    mutation ToggleCategoryStatus($id: ObjectId!) {
  toggleCategoryStatus(id: $id)
}
    `;
export type ToggleCategoryStatusMutationFn = Apollo.MutationFunction<ToggleCategoryStatusMutation, ToggleCategoryStatusMutationVariables>;

/**
 * __useToggleCategoryStatusMutation__
 *
 * To run a mutation, you first call `useToggleCategoryStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleCategoryStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleCategoryStatusMutation, { data, loading, error }] = useToggleCategoryStatusMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleCategoryStatusMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ToggleCategoryStatusMutation, ToggleCategoryStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ToggleCategoryStatusMutation, ToggleCategoryStatusMutationVariables>(ToggleCategoryStatusDocument, options);
      }
export type ToggleCategoryStatusMutationHookResult = ReturnType<typeof useToggleCategoryStatusMutation>;
export type ToggleCategoryStatusMutationResult = Apollo.MutationResult<ToggleCategoryStatusMutation>;
export type ToggleCategoryStatusMutationOptions = Apollo.BaseMutationOptions<ToggleCategoryStatusMutation, ToggleCategoryStatusMutationVariables>;
export const CreateCompanyDocument = gql`
    mutation CreateCompany($input: CreateCompanyInput!) {
  createCompany(input: $input)
}
    `;
export type CreateCompanyMutationFn = Apollo.MutationFunction<CreateCompanyMutation, CreateCompanyMutationVariables>;

/**
 * __useCreateCompanyMutation__
 *
 * To run a mutation, you first call `useCreateCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCompanyMutation, { data, loading, error }] = useCreateCompanyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCompanyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateCompanyMutation, CreateCompanyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateCompanyMutation, CreateCompanyMutationVariables>(CreateCompanyDocument, options);
      }
export type CreateCompanyMutationHookResult = ReturnType<typeof useCreateCompanyMutation>;
export type CreateCompanyMutationResult = Apollo.MutationResult<CreateCompanyMutation>;
export type CreateCompanyMutationOptions = Apollo.BaseMutationOptions<CreateCompanyMutation, CreateCompanyMutationVariables>;
export const UpdateCompanyDocument = gql`
    mutation UpdateCompany($input: UpdateCompanyInput!) {
  updateCompany(input: $input)
}
    `;
export type UpdateCompanyMutationFn = Apollo.MutationFunction<UpdateCompanyMutation, UpdateCompanyMutationVariables>;

/**
 * __useUpdateCompanyMutation__
 *
 * To run a mutation, you first call `useUpdateCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCompanyMutation, { data, loading, error }] = useUpdateCompanyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCompanyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateCompanyMutation, UpdateCompanyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateCompanyMutation, UpdateCompanyMutationVariables>(UpdateCompanyDocument, options);
      }
export type UpdateCompanyMutationHookResult = ReturnType<typeof useUpdateCompanyMutation>;
export type UpdateCompanyMutationResult = Apollo.MutationResult<UpdateCompanyMutation>;
export type UpdateCompanyMutationOptions = Apollo.BaseMutationOptions<UpdateCompanyMutation, UpdateCompanyMutationVariables>;
export const RemoveCompanyDocument = gql`
    mutation RemoveCompany($id: ObjectId!) {
  removeCompany(id: $id)
}
    `;
export type RemoveCompanyMutationFn = Apollo.MutationFunction<RemoveCompanyMutation, RemoveCompanyMutationVariables>;

/**
 * __useRemoveCompanyMutation__
 *
 * To run a mutation, you first call `useRemoveCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCompanyMutation, { data, loading, error }] = useRemoveCompanyMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveCompanyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveCompanyMutation, RemoveCompanyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<RemoveCompanyMutation, RemoveCompanyMutationVariables>(RemoveCompanyDocument, options);
      }
export type RemoveCompanyMutationHookResult = ReturnType<typeof useRemoveCompanyMutation>;
export type RemoveCompanyMutationResult = Apollo.MutationResult<RemoveCompanyMutation>;
export type RemoveCompanyMutationOptions = Apollo.BaseMutationOptions<RemoveCompanyMutation, RemoveCompanyMutationVariables>;
export const ToggleCompanyStatusDocument = gql`
    mutation ToggleCompanyStatus($id: ObjectId!) {
  toggleCompanyStatus(id: $id)
}
    `;
export type ToggleCompanyStatusMutationFn = Apollo.MutationFunction<ToggleCompanyStatusMutation, ToggleCompanyStatusMutationVariables>;

/**
 * __useToggleCompanyStatusMutation__
 *
 * To run a mutation, you first call `useToggleCompanyStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleCompanyStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleCompanyStatusMutation, { data, loading, error }] = useToggleCompanyStatusMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleCompanyStatusMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ToggleCompanyStatusMutation, ToggleCompanyStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ToggleCompanyStatusMutation, ToggleCompanyStatusMutationVariables>(ToggleCompanyStatusDocument, options);
      }
export type ToggleCompanyStatusMutationHookResult = ReturnType<typeof useToggleCompanyStatusMutation>;
export type ToggleCompanyStatusMutationResult = Apollo.MutationResult<ToggleCompanyStatusMutation>;
export type ToggleCompanyStatusMutationOptions = Apollo.BaseMutationOptions<ToggleCompanyStatusMutation, ToggleCompanyStatusMutationVariables>;
export const CreateFaqDocument = gql`
    mutation CreateFaq($input: CreateFaqInput!) {
  createFaq(input: $input)
}
    `;
export type CreateFaqMutationFn = Apollo.MutationFunction<CreateFaqMutation, CreateFaqMutationVariables>;

/**
 * __useCreateFaqMutation__
 *
 * To run a mutation, you first call `useCreateFaqMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFaqMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFaqMutation, { data, loading, error }] = useCreateFaqMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateFaqMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateFaqMutation, CreateFaqMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateFaqMutation, CreateFaqMutationVariables>(CreateFaqDocument, options);
      }
export type CreateFaqMutationHookResult = ReturnType<typeof useCreateFaqMutation>;
export type CreateFaqMutationResult = Apollo.MutationResult<CreateFaqMutation>;
export type CreateFaqMutationOptions = Apollo.BaseMutationOptions<CreateFaqMutation, CreateFaqMutationVariables>;
export const UpdateFaqDocument = gql`
    mutation UpdateFaq($input: UpdateFaqInput!) {
  updateFaq(input: $input)
}
    `;
export type UpdateFaqMutationFn = Apollo.MutationFunction<UpdateFaqMutation, UpdateFaqMutationVariables>;

/**
 * __useUpdateFaqMutation__
 *
 * To run a mutation, you first call `useUpdateFaqMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFaqMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFaqMutation, { data, loading, error }] = useUpdateFaqMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateFaqMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateFaqMutation, UpdateFaqMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateFaqMutation, UpdateFaqMutationVariables>(UpdateFaqDocument, options);
      }
export type UpdateFaqMutationHookResult = ReturnType<typeof useUpdateFaqMutation>;
export type UpdateFaqMutationResult = Apollo.MutationResult<UpdateFaqMutation>;
export type UpdateFaqMutationOptions = Apollo.BaseMutationOptions<UpdateFaqMutation, UpdateFaqMutationVariables>;
export const RemoveFaqDocument = gql`
    mutation RemoveFaq($id: ObjectId!) {
  removeFaq(id: $id)
}
    `;
export type RemoveFaqMutationFn = Apollo.MutationFunction<RemoveFaqMutation, RemoveFaqMutationVariables>;

/**
 * __useRemoveFaqMutation__
 *
 * To run a mutation, you first call `useRemoveFaqMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFaqMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFaqMutation, { data, loading, error }] = useRemoveFaqMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveFaqMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveFaqMutation, RemoveFaqMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<RemoveFaqMutation, RemoveFaqMutationVariables>(RemoveFaqDocument, options);
      }
export type RemoveFaqMutationHookResult = ReturnType<typeof useRemoveFaqMutation>;
export type RemoveFaqMutationResult = Apollo.MutationResult<RemoveFaqMutation>;
export type RemoveFaqMutationOptions = Apollo.BaseMutationOptions<RemoveFaqMutation, RemoveFaqMutationVariables>;
export const ToggleFaqStatusDocument = gql`
    mutation ToggleFaqStatus($id: ObjectId!) {
  toggleFaqStatus(id: $id)
}
    `;
export type ToggleFaqStatusMutationFn = Apollo.MutationFunction<ToggleFaqStatusMutation, ToggleFaqStatusMutationVariables>;

/**
 * __useToggleFaqStatusMutation__
 *
 * To run a mutation, you first call `useToggleFaqStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleFaqStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleFaqStatusMutation, { data, loading, error }] = useToggleFaqStatusMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleFaqStatusMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ToggleFaqStatusMutation, ToggleFaqStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ToggleFaqStatusMutation, ToggleFaqStatusMutationVariables>(ToggleFaqStatusDocument, options);
      }
export type ToggleFaqStatusMutationHookResult = ReturnType<typeof useToggleFaqStatusMutation>;
export type ToggleFaqStatusMutationResult = Apollo.MutationResult<ToggleFaqStatusMutation>;
export type ToggleFaqStatusMutationOptions = Apollo.BaseMutationOptions<ToggleFaqStatusMutation, ToggleFaqStatusMutationVariables>;
export const CreateLocationDocument = gql`
    mutation CreateLocation($input: CreateLocationInput!) {
  createLocation(input: $input)
}
    `;
export type CreateLocationMutationFn = Apollo.MutationFunction<CreateLocationMutation, CreateLocationMutationVariables>;

/**
 * __useCreateLocationMutation__
 *
 * To run a mutation, you first call `useCreateLocationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLocationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLocationMutation, { data, loading, error }] = useCreateLocationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateLocationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateLocationMutation, CreateLocationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateLocationMutation, CreateLocationMutationVariables>(CreateLocationDocument, options);
      }
export type CreateLocationMutationHookResult = ReturnType<typeof useCreateLocationMutation>;
export type CreateLocationMutationResult = Apollo.MutationResult<CreateLocationMutation>;
export type CreateLocationMutationOptions = Apollo.BaseMutationOptions<CreateLocationMutation, CreateLocationMutationVariables>;
export const UpdateLocationDocument = gql`
    mutation UpdateLocation($input: UpdateLocationInput!) {
  updateLocation(input: $input)
}
    `;
export type UpdateLocationMutationFn = Apollo.MutationFunction<UpdateLocationMutation, UpdateLocationMutationVariables>;

/**
 * __useUpdateLocationMutation__
 *
 * To run a mutation, you first call `useUpdateLocationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLocationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLocationMutation, { data, loading, error }] = useUpdateLocationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateLocationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateLocationMutation, UpdateLocationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateLocationMutation, UpdateLocationMutationVariables>(UpdateLocationDocument, options);
      }
export type UpdateLocationMutationHookResult = ReturnType<typeof useUpdateLocationMutation>;
export type UpdateLocationMutationResult = Apollo.MutationResult<UpdateLocationMutation>;
export type UpdateLocationMutationOptions = Apollo.BaseMutationOptions<UpdateLocationMutation, UpdateLocationMutationVariables>;
export const RemoveLocationDocument = gql`
    mutation RemoveLocation($id: ObjectId!) {
  removeLocation(id: $id)
}
    `;
export type RemoveLocationMutationFn = Apollo.MutationFunction<RemoveLocationMutation, RemoveLocationMutationVariables>;

/**
 * __useRemoveLocationMutation__
 *
 * To run a mutation, you first call `useRemoveLocationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveLocationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeLocationMutation, { data, loading, error }] = useRemoveLocationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveLocationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveLocationMutation, RemoveLocationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<RemoveLocationMutation, RemoveLocationMutationVariables>(RemoveLocationDocument, options);
      }
export type RemoveLocationMutationHookResult = ReturnType<typeof useRemoveLocationMutation>;
export type RemoveLocationMutationResult = Apollo.MutationResult<RemoveLocationMutation>;
export type RemoveLocationMutationOptions = Apollo.BaseMutationOptions<RemoveLocationMutation, RemoveLocationMutationVariables>;
export const ToggleLocationStatusDocument = gql`
    mutation ToggleLocationStatus($id: ObjectId!) {
  toggleLocationStatus(id: $id)
}
    `;
export type ToggleLocationStatusMutationFn = Apollo.MutationFunction<ToggleLocationStatusMutation, ToggleLocationStatusMutationVariables>;

/**
 * __useToggleLocationStatusMutation__
 *
 * To run a mutation, you first call `useToggleLocationStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleLocationStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleLocationStatusMutation, { data, loading, error }] = useToggleLocationStatusMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleLocationStatusMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ToggleLocationStatusMutation, ToggleLocationStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ToggleLocationStatusMutation, ToggleLocationStatusMutationVariables>(ToggleLocationStatusDocument, options);
      }
export type ToggleLocationStatusMutationHookResult = ReturnType<typeof useToggleLocationStatusMutation>;
export type ToggleLocationStatusMutationResult = Apollo.MutationResult<ToggleLocationStatusMutation>;
export type ToggleLocationStatusMutationOptions = Apollo.BaseMutationOptions<ToggleLocationStatusMutation, ToggleLocationStatusMutationVariables>;
export const CreateProductDocument = gql`
    mutation CreateProduct($input: CreateProductInput!) {
  createProduct(input: $input)
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const UpdateProductDocument = gql`
    mutation UpdateProduct($input: UpdateProductInput!) {
  updateProduct(input: $input)
}
    `;
export type UpdateProductMutationFn = Apollo.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProductMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, options);
      }
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<UpdateProductMutation, UpdateProductMutationVariables>;
export const RemoveProductDocument = gql`
    mutation RemoveProduct($id: ObjectId!) {
  removeProduct(id: $id)
}
    `;
export type RemoveProductMutationFn = Apollo.MutationFunction<RemoveProductMutation, RemoveProductMutationVariables>;

/**
 * __useRemoveProductMutation__
 *
 * To run a mutation, you first call `useRemoveProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeProductMutation, { data, loading, error }] = useRemoveProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveProductMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveProductMutation, RemoveProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<RemoveProductMutation, RemoveProductMutationVariables>(RemoveProductDocument, options);
      }
export type RemoveProductMutationHookResult = ReturnType<typeof useRemoveProductMutation>;
export type RemoveProductMutationResult = Apollo.MutationResult<RemoveProductMutation>;
export type RemoveProductMutationOptions = Apollo.BaseMutationOptions<RemoveProductMutation, RemoveProductMutationVariables>;
export const ToggleProductStatusDocument = gql`
    mutation ToggleProductStatus($id: ObjectId!) {
  toggleProductStatus(id: $id)
}
    `;
export type ToggleProductStatusMutationFn = Apollo.MutationFunction<ToggleProductStatusMutation, ToggleProductStatusMutationVariables>;

/**
 * __useToggleProductStatusMutation__
 *
 * To run a mutation, you first call `useToggleProductStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleProductStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleProductStatusMutation, { data, loading, error }] = useToggleProductStatusMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleProductStatusMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ToggleProductStatusMutation, ToggleProductStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ToggleProductStatusMutation, ToggleProductStatusMutationVariables>(ToggleProductStatusDocument, options);
      }
export type ToggleProductStatusMutationHookResult = ReturnType<typeof useToggleProductStatusMutation>;
export type ToggleProductStatusMutationResult = Apollo.MutationResult<ToggleProductStatusMutation>;
export type ToggleProductStatusMutationOptions = Apollo.BaseMutationOptions<ToggleProductStatusMutation, ToggleProductStatusMutationVariables>;
export const CreateAmenitiesDocument = gql`
    mutation CreateAmenities($input: CreateAmenitiesInput!) {
  createAmenities(input: $input)
}
    `;
export type CreateAmenitiesMutationFn = Apollo.MutationFunction<CreateAmenitiesMutation, CreateAmenitiesMutationVariables>;

/**
 * __useCreateAmenitiesMutation__
 *
 * To run a mutation, you first call `useCreateAmenitiesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAmenitiesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAmenitiesMutation, { data, loading, error }] = useCreateAmenitiesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAmenitiesMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateAmenitiesMutation, CreateAmenitiesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateAmenitiesMutation, CreateAmenitiesMutationVariables>(CreateAmenitiesDocument, options);
      }
export type CreateAmenitiesMutationHookResult = ReturnType<typeof useCreateAmenitiesMutation>;
export type CreateAmenitiesMutationResult = Apollo.MutationResult<CreateAmenitiesMutation>;
export type CreateAmenitiesMutationOptions = Apollo.BaseMutationOptions<CreateAmenitiesMutation, CreateAmenitiesMutationVariables>;
export const UpdateAmenitiesDocument = gql`
    mutation UpdateAmenities($input: UpdateAmenitiesInput!) {
  updateAmenities(input: $input)
}
    `;
export type UpdateAmenitiesMutationFn = Apollo.MutationFunction<UpdateAmenitiesMutation, UpdateAmenitiesMutationVariables>;

/**
 * __useUpdateAmenitiesMutation__
 *
 * To run a mutation, you first call `useUpdateAmenitiesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAmenitiesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAmenitiesMutation, { data, loading, error }] = useUpdateAmenitiesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAmenitiesMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateAmenitiesMutation, UpdateAmenitiesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateAmenitiesMutation, UpdateAmenitiesMutationVariables>(UpdateAmenitiesDocument, options);
      }
export type UpdateAmenitiesMutationHookResult = ReturnType<typeof useUpdateAmenitiesMutation>;
export type UpdateAmenitiesMutationResult = Apollo.MutationResult<UpdateAmenitiesMutation>;
export type UpdateAmenitiesMutationOptions = Apollo.BaseMutationOptions<UpdateAmenitiesMutation, UpdateAmenitiesMutationVariables>;
export const CreateReviewDocument = gql`
    mutation CreateReview($input: CreateReviewInput!) {
  createReview(input: $input)
}
    `;
export type CreateReviewMutationFn = Apollo.MutationFunction<CreateReviewMutation, CreateReviewMutationVariables>;

/**
 * __useCreateReviewMutation__
 *
 * To run a mutation, you first call `useCreateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReviewMutation, { data, loading, error }] = useCreateReviewMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateReviewMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateReviewMutation, CreateReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateReviewMutation, CreateReviewMutationVariables>(CreateReviewDocument, options);
      }
export type CreateReviewMutationHookResult = ReturnType<typeof useCreateReviewMutation>;
export type CreateReviewMutationResult = Apollo.MutationResult<CreateReviewMutation>;
export type CreateReviewMutationOptions = Apollo.BaseMutationOptions<CreateReviewMutation, CreateReviewMutationVariables>;
export const UpdateReviewDocument = gql`
    mutation UpdateReview($input: UpdateReviewInput!) {
  updateReview(input: $input)
}
    `;
export type UpdateReviewMutationFn = Apollo.MutationFunction<UpdateReviewMutation, UpdateReviewMutationVariables>;

/**
 * __useUpdateReviewMutation__
 *
 * To run a mutation, you first call `useUpdateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateReviewMutation, { data, loading, error }] = useUpdateReviewMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateReviewMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateReviewMutation, UpdateReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateReviewMutation, UpdateReviewMutationVariables>(UpdateReviewDocument, options);
      }
export type UpdateReviewMutationHookResult = ReturnType<typeof useUpdateReviewMutation>;
export type UpdateReviewMutationResult = Apollo.MutationResult<UpdateReviewMutation>;
export type UpdateReviewMutationOptions = Apollo.BaseMutationOptions<UpdateReviewMutation, UpdateReviewMutationVariables>;
export const RemoveReviewDocument = gql`
    mutation RemoveReview($id: ObjectId!) {
  removeReview(id: $id)
}
    `;
export type RemoveReviewMutationFn = Apollo.MutationFunction<RemoveReviewMutation, RemoveReviewMutationVariables>;

/**
 * __useRemoveReviewMutation__
 *
 * To run a mutation, you first call `useRemoveReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeReviewMutation, { data, loading, error }] = useRemoveReviewMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveReviewMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveReviewMutation, RemoveReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<RemoveReviewMutation, RemoveReviewMutationVariables>(RemoveReviewDocument, options);
      }
export type RemoveReviewMutationHookResult = ReturnType<typeof useRemoveReviewMutation>;
export type RemoveReviewMutationResult = Apollo.MutationResult<RemoveReviewMutation>;
export type RemoveReviewMutationOptions = Apollo.BaseMutationOptions<RemoveReviewMutation, RemoveReviewMutationVariables>;
export const ToggleReviewStatusDocument = gql`
    mutation ToggleReviewStatus($id: ObjectId!) {
  toggleReviewStatus(id: $id)
}
    `;
export type ToggleReviewStatusMutationFn = Apollo.MutationFunction<ToggleReviewStatusMutation, ToggleReviewStatusMutationVariables>;

/**
 * __useToggleReviewStatusMutation__
 *
 * To run a mutation, you first call `useToggleReviewStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleReviewStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleReviewStatusMutation, { data, loading, error }] = useToggleReviewStatusMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleReviewStatusMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ToggleReviewStatusMutation, ToggleReviewStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<ToggleReviewStatusMutation, ToggleReviewStatusMutationVariables>(ToggleReviewStatusDocument, options);
      }
export type ToggleReviewStatusMutationHookResult = ReturnType<typeof useToggleReviewStatusMutation>;
export type ToggleReviewStatusMutationResult = Apollo.MutationResult<ToggleReviewStatusMutation>;
export type ToggleReviewStatusMutationOptions = Apollo.BaseMutationOptions<ToggleReviewStatusMutation, ToggleReviewStatusMutationVariables>;
export const UpdateSettingsDocument = gql`
    mutation UpdateSettings($input: UpdateSettingInput!) {
  updateSetting(input: $input)
}
    `;
export type UpdateSettingsMutationFn = Apollo.MutationFunction<UpdateSettingsMutation, UpdateSettingsMutationVariables>;

/**
 * __useUpdateSettingsMutation__
 *
 * To run a mutation, you first call `useUpdateSettingsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSettingsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSettingsMutation, { data, loading, error }] = useUpdateSettingsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateSettingsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateSettingsMutation, UpdateSettingsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateSettingsMutation, UpdateSettingsMutationVariables>(UpdateSettingsDocument, options);
      }
export type UpdateSettingsMutationHookResult = ReturnType<typeof useUpdateSettingsMutation>;
export type UpdateSettingsMutationResult = Apollo.MutationResult<UpdateSettingsMutation>;
export type UpdateSettingsMutationOptions = Apollo.BaseMutationOptions<UpdateSettingsMutation, UpdateSettingsMutationVariables>;
export const ListAdminDocument = gql`
    query ListAdmin($search: SearchAdminInput!) {
  listAdmin(search: $search) {
    docs {
      _id
      createdAt
      email
      fullName
      permissions
      profile
      status
      avatar
      role
    }
    page
    limit
    totalDocs
    totalPages
    nextPage
    prevPage
    hasNextPage
    hasPrevPage
  }
}
    `;

/**
 * __useListAdminQuery__
 *
 * To run a query within a React component, call `useListAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useListAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListAdminQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useListAdminQuery(baseOptions: ApolloReactHooks.QueryHookOptions<ListAdminQuery, ListAdminQueryVariables> & ({ variables: ListAdminQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ListAdminQuery, ListAdminQueryVariables>(ListAdminDocument, options);
      }
export function useListAdminLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListAdminQuery, ListAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ListAdminQuery, ListAdminQueryVariables>(ListAdminDocument, options);
        }
export function useListAdminSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<ListAdminQuery, ListAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<ListAdminQuery, ListAdminQueryVariables>(ListAdminDocument, options);
        }
export type ListAdminQueryHookResult = ReturnType<typeof useListAdminQuery>;
export type ListAdminLazyQueryHookResult = ReturnType<typeof useListAdminLazyQuery>;
export type ListAdminSuspenseQueryHookResult = ReturnType<typeof useListAdminSuspenseQuery>;
export type ListAdminQueryResult = Apollo.QueryResult<ListAdminQuery, ListAdminQueryVariables>;
export const ListArticlesPaginatedDocument = gql`
    query ListArticlesPaginated($search: SearchArticleInput!) {
  listArticlesPaginated(search: $search) {
    docs {
      _id
      title
      categoryName
      locationName
      type
      status
    }
    page
    prevPage
    nextPage
    hasNextPage
    hasPrevPage
    limit
    totalDocs
    totalPages
  }
}
    `;

/**
 * __useListArticlesPaginatedQuery__
 *
 * To run a query within a React component, call `useListArticlesPaginatedQuery` and pass it any options that fit your needs.
 * When your component renders, `useListArticlesPaginatedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListArticlesPaginatedQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useListArticlesPaginatedQuery(baseOptions: ApolloReactHooks.QueryHookOptions<ListArticlesPaginatedQuery, ListArticlesPaginatedQueryVariables> & ({ variables: ListArticlesPaginatedQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ListArticlesPaginatedQuery, ListArticlesPaginatedQueryVariables>(ListArticlesPaginatedDocument, options);
      }
export function useListArticlesPaginatedLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListArticlesPaginatedQuery, ListArticlesPaginatedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ListArticlesPaginatedQuery, ListArticlesPaginatedQueryVariables>(ListArticlesPaginatedDocument, options);
        }
export function useListArticlesPaginatedSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<ListArticlesPaginatedQuery, ListArticlesPaginatedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<ListArticlesPaginatedQuery, ListArticlesPaginatedQueryVariables>(ListArticlesPaginatedDocument, options);
        }
export type ListArticlesPaginatedQueryHookResult = ReturnType<typeof useListArticlesPaginatedQuery>;
export type ListArticlesPaginatedLazyQueryHookResult = ReturnType<typeof useListArticlesPaginatedLazyQuery>;
export type ListArticlesPaginatedSuspenseQueryHookResult = ReturnType<typeof useListArticlesPaginatedSuspenseQuery>;
export type ListArticlesPaginatedQueryResult = Apollo.QueryResult<ListArticlesPaginatedQuery, ListArticlesPaginatedQueryVariables>;
export const FindOneArticleDocument = gql`
    query FindOneArticle($id: ObjectId!) {
  findOneArticle(id: $id) {
    _id
    title
    locationId
    categoryId
    description
    image
    categoryName
    locationName
    type
    status
  }
}
    `;

/**
 * __useFindOneArticleQuery__
 *
 * To run a query within a React component, call `useFindOneArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneArticleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindOneArticleQuery(baseOptions: ApolloReactHooks.QueryHookOptions<FindOneArticleQuery, FindOneArticleQueryVariables> & ({ variables: FindOneArticleQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<FindOneArticleQuery, FindOneArticleQueryVariables>(FindOneArticleDocument, options);
      }
export function useFindOneArticleLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindOneArticleQuery, FindOneArticleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<FindOneArticleQuery, FindOneArticleQueryVariables>(FindOneArticleDocument, options);
        }
export function useFindOneArticleSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<FindOneArticleQuery, FindOneArticleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<FindOneArticleQuery, FindOneArticleQueryVariables>(FindOneArticleDocument, options);
        }
export type FindOneArticleQueryHookResult = ReturnType<typeof useFindOneArticleQuery>;
export type FindOneArticleLazyQueryHookResult = ReturnType<typeof useFindOneArticleLazyQuery>;
export type FindOneArticleSuspenseQueryHookResult = ReturnType<typeof useFindOneArticleSuspenseQuery>;
export type FindOneArticleQueryResult = Apollo.QueryResult<FindOneArticleQuery, FindOneArticleQueryVariables>;
export const ListCategoriesPaginatedDocument = gql`
    query ListCategoriesPaginated($search: SearchBaseInput!) {
  listCategoriesPaginated(search: $search) {
    docs {
      _id
      name
      spaceRequirements
      supervision
      safety
      insurancePlan
      notification
      spaceRequirements
      status
      createdAt
    }
    page
    prevPage
    nextPage
    hasNextPage
    hasPrevPage
    limit
    totalDocs
    totalPages
  }
}
    `;

/**
 * __useListCategoriesPaginatedQuery__
 *
 * To run a query within a React component, call `useListCategoriesPaginatedQuery` and pass it any options that fit your needs.
 * When your component renders, `useListCategoriesPaginatedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListCategoriesPaginatedQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useListCategoriesPaginatedQuery(baseOptions: ApolloReactHooks.QueryHookOptions<ListCategoriesPaginatedQuery, ListCategoriesPaginatedQueryVariables> & ({ variables: ListCategoriesPaginatedQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ListCategoriesPaginatedQuery, ListCategoriesPaginatedQueryVariables>(ListCategoriesPaginatedDocument, options);
      }
export function useListCategoriesPaginatedLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListCategoriesPaginatedQuery, ListCategoriesPaginatedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ListCategoriesPaginatedQuery, ListCategoriesPaginatedQueryVariables>(ListCategoriesPaginatedDocument, options);
        }
export function useListCategoriesPaginatedSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<ListCategoriesPaginatedQuery, ListCategoriesPaginatedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<ListCategoriesPaginatedQuery, ListCategoriesPaginatedQueryVariables>(ListCategoriesPaginatedDocument, options);
        }
export type ListCategoriesPaginatedQueryHookResult = ReturnType<typeof useListCategoriesPaginatedQuery>;
export type ListCategoriesPaginatedLazyQueryHookResult = ReturnType<typeof useListCategoriesPaginatedLazyQuery>;
export type ListCategoriesPaginatedSuspenseQueryHookResult = ReturnType<typeof useListCategoriesPaginatedSuspenseQuery>;
export type ListCategoriesPaginatedQueryResult = Apollo.QueryResult<ListCategoriesPaginatedQuery, ListCategoriesPaginatedQueryVariables>;
export const ListAllCategoriesOptionsDocument = gql`
    query ListAllCategoriesOptions($search: SearchBaseInput!) {
  listCategoriesPaginated(search: $search) {
    docs {
      _id
      name
      slug
    }
  }
}
    `;

/**
 * __useListAllCategoriesOptionsQuery__
 *
 * To run a query within a React component, call `useListAllCategoriesOptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListAllCategoriesOptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListAllCategoriesOptionsQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useListAllCategoriesOptionsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<ListAllCategoriesOptionsQuery, ListAllCategoriesOptionsQueryVariables> & ({ variables: ListAllCategoriesOptionsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ListAllCategoriesOptionsQuery, ListAllCategoriesOptionsQueryVariables>(ListAllCategoriesOptionsDocument, options);
      }
export function useListAllCategoriesOptionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListAllCategoriesOptionsQuery, ListAllCategoriesOptionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ListAllCategoriesOptionsQuery, ListAllCategoriesOptionsQueryVariables>(ListAllCategoriesOptionsDocument, options);
        }
export function useListAllCategoriesOptionsSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<ListAllCategoriesOptionsQuery, ListAllCategoriesOptionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<ListAllCategoriesOptionsQuery, ListAllCategoriesOptionsQueryVariables>(ListAllCategoriesOptionsDocument, options);
        }
export type ListAllCategoriesOptionsQueryHookResult = ReturnType<typeof useListAllCategoriesOptionsQuery>;
export type ListAllCategoriesOptionsLazyQueryHookResult = ReturnType<typeof useListAllCategoriesOptionsLazyQuery>;
export type ListAllCategoriesOptionsSuspenseQueryHookResult = ReturnType<typeof useListAllCategoriesOptionsSuspenseQuery>;
export type ListAllCategoriesOptionsQueryResult = Apollo.QueryResult<ListAllCategoriesOptionsQuery, ListAllCategoriesOptionsQueryVariables>;
export const ListCompaniesPaginatedDocument = gql`
    query ListCompaniesPaginated($search: SearchCompanyInput!) {
  listCompaniesPaginated(search: $search) {
    docs {
      _id
      name
      googleMapsLink
      categories {
        name
        slug
      }
      categoriesId
      websiteUrl
      slug
      locationSlug
      locationName
      locationId
      address
      phoneNumber
      status
      merchantListingStatus
      createdAt
    }
    page
    prevPage
    nextPage
    hasNextPage
    hasPrevPage
    limit
    totalDocs
    totalPages
  }
}
    `;

/**
 * __useListCompaniesPaginatedQuery__
 *
 * To run a query within a React component, call `useListCompaniesPaginatedQuery` and pass it any options that fit your needs.
 * When your component renders, `useListCompaniesPaginatedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListCompaniesPaginatedQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useListCompaniesPaginatedQuery(baseOptions: ApolloReactHooks.QueryHookOptions<ListCompaniesPaginatedQuery, ListCompaniesPaginatedQueryVariables> & ({ variables: ListCompaniesPaginatedQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ListCompaniesPaginatedQuery, ListCompaniesPaginatedQueryVariables>(ListCompaniesPaginatedDocument, options);
      }
export function useListCompaniesPaginatedLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListCompaniesPaginatedQuery, ListCompaniesPaginatedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ListCompaniesPaginatedQuery, ListCompaniesPaginatedQueryVariables>(ListCompaniesPaginatedDocument, options);
        }
export function useListCompaniesPaginatedSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<ListCompaniesPaginatedQuery, ListCompaniesPaginatedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<ListCompaniesPaginatedQuery, ListCompaniesPaginatedQueryVariables>(ListCompaniesPaginatedDocument, options);
        }
export type ListCompaniesPaginatedQueryHookResult = ReturnType<typeof useListCompaniesPaginatedQuery>;
export type ListCompaniesPaginatedLazyQueryHookResult = ReturnType<typeof useListCompaniesPaginatedLazyQuery>;
export type ListCompaniesPaginatedSuspenseQueryHookResult = ReturnType<typeof useListCompaniesPaginatedSuspenseQuery>;
export type ListCompaniesPaginatedQueryResult = Apollo.QueryResult<ListCompaniesPaginatedQuery, ListCompaniesPaginatedQueryVariables>;
export const ListAllCompaniesOptionsDocument = gql`
    query ListAllCompaniesOptions($search: SearchCompanyInput!) {
  listCompaniesPaginated(search: $search) {
    docs {
      _id
      name
    }
  }
}
    `;

/**
 * __useListAllCompaniesOptionsQuery__
 *
 * To run a query within a React component, call `useListAllCompaniesOptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListAllCompaniesOptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListAllCompaniesOptionsQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useListAllCompaniesOptionsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<ListAllCompaniesOptionsQuery, ListAllCompaniesOptionsQueryVariables> & ({ variables: ListAllCompaniesOptionsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ListAllCompaniesOptionsQuery, ListAllCompaniesOptionsQueryVariables>(ListAllCompaniesOptionsDocument, options);
      }
export function useListAllCompaniesOptionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListAllCompaniesOptionsQuery, ListAllCompaniesOptionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ListAllCompaniesOptionsQuery, ListAllCompaniesOptionsQueryVariables>(ListAllCompaniesOptionsDocument, options);
        }
export function useListAllCompaniesOptionsSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<ListAllCompaniesOptionsQuery, ListAllCompaniesOptionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<ListAllCompaniesOptionsQuery, ListAllCompaniesOptionsQueryVariables>(ListAllCompaniesOptionsDocument, options);
        }
export type ListAllCompaniesOptionsQueryHookResult = ReturnType<typeof useListAllCompaniesOptionsQuery>;
export type ListAllCompaniesOptionsLazyQueryHookResult = ReturnType<typeof useListAllCompaniesOptionsLazyQuery>;
export type ListAllCompaniesOptionsSuspenseQueryHookResult = ReturnType<typeof useListAllCompaniesOptionsSuspenseQuery>;
export type ListAllCompaniesOptionsQueryResult = Apollo.QueryResult<ListAllCompaniesOptionsQuery, ListAllCompaniesOptionsQueryVariables>;
export const FindOneCompanyDocument = gql`
    query FindOneCompany($id: ObjectId!) {
  findOneCompany(id: $id) {
    _id
    name
    googleMapsLink
    categories {
      name
      slug
    }
    reviewsAmount
    reviewsRating
    categoriesId
    websiteUrl
    slug
    locationSlug
    locationName
    locationId
    address
    phoneNumber
    status
    merchantListingStatus
    createdAt
  }
}
    `;

/**
 * __useFindOneCompanyQuery__
 *
 * To run a query within a React component, call `useFindOneCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneCompanyQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindOneCompanyQuery(baseOptions: ApolloReactHooks.QueryHookOptions<FindOneCompanyQuery, FindOneCompanyQueryVariables> & ({ variables: FindOneCompanyQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<FindOneCompanyQuery, FindOneCompanyQueryVariables>(FindOneCompanyDocument, options);
      }
export function useFindOneCompanyLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindOneCompanyQuery, FindOneCompanyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<FindOneCompanyQuery, FindOneCompanyQueryVariables>(FindOneCompanyDocument, options);
        }
export function useFindOneCompanySuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<FindOneCompanyQuery, FindOneCompanyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<FindOneCompanyQuery, FindOneCompanyQueryVariables>(FindOneCompanyDocument, options);
        }
export type FindOneCompanyQueryHookResult = ReturnType<typeof useFindOneCompanyQuery>;
export type FindOneCompanyLazyQueryHookResult = ReturnType<typeof useFindOneCompanyLazyQuery>;
export type FindOneCompanySuspenseQueryHookResult = ReturnType<typeof useFindOneCompanySuspenseQuery>;
export type FindOneCompanyQueryResult = Apollo.QueryResult<FindOneCompanyQuery, FindOneCompanyQueryVariables>;
export const ListFaqsPaginatedDocument = gql`
    query ListFaqsPaginated($search: SearchBaseInput!) {
  listFaqsPaginated(search: $search) {
    docs {
      _id
      question
      answer
      slug
      categoryId
      categoryName
      locationId
      locationName
      status
      createdAt
    }
    page
    prevPage
    nextPage
    hasNextPage
    hasPrevPage
    limit
    totalDocs
    totalPages
  }
}
    `;

/**
 * __useListFaqsPaginatedQuery__
 *
 * To run a query within a React component, call `useListFaqsPaginatedQuery` and pass it any options that fit your needs.
 * When your component renders, `useListFaqsPaginatedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListFaqsPaginatedQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useListFaqsPaginatedQuery(baseOptions: ApolloReactHooks.QueryHookOptions<ListFaqsPaginatedQuery, ListFaqsPaginatedQueryVariables> & ({ variables: ListFaqsPaginatedQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ListFaqsPaginatedQuery, ListFaqsPaginatedQueryVariables>(ListFaqsPaginatedDocument, options);
      }
export function useListFaqsPaginatedLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListFaqsPaginatedQuery, ListFaqsPaginatedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ListFaqsPaginatedQuery, ListFaqsPaginatedQueryVariables>(ListFaqsPaginatedDocument, options);
        }
export function useListFaqsPaginatedSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<ListFaqsPaginatedQuery, ListFaqsPaginatedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<ListFaqsPaginatedQuery, ListFaqsPaginatedQueryVariables>(ListFaqsPaginatedDocument, options);
        }
export type ListFaqsPaginatedQueryHookResult = ReturnType<typeof useListFaqsPaginatedQuery>;
export type ListFaqsPaginatedLazyQueryHookResult = ReturnType<typeof useListFaqsPaginatedLazyQuery>;
export type ListFaqsPaginatedSuspenseQueryHookResult = ReturnType<typeof useListFaqsPaginatedSuspenseQuery>;
export type ListFaqsPaginatedQueryResult = Apollo.QueryResult<ListFaqsPaginatedQuery, ListFaqsPaginatedQueryVariables>;
export const ListLocationsPaginatedDocument = gql`
    query ListLocationsPaginated($search: SearchBaseInput!) {
  listLocationsPaginated(search: $search) {
    docs {
      _id
      name
      slug
      image
      status
      categoriesId
      categories {
        name
        slug
      }
      createdAt
    }
    page
    prevPage
    nextPage
    hasNextPage
    hasPrevPage
    limit
    totalDocs
    totalPages
  }
}
    `;

/**
 * __useListLocationsPaginatedQuery__
 *
 * To run a query within a React component, call `useListLocationsPaginatedQuery` and pass it any options that fit your needs.
 * When your component renders, `useListLocationsPaginatedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListLocationsPaginatedQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useListLocationsPaginatedQuery(baseOptions: ApolloReactHooks.QueryHookOptions<ListLocationsPaginatedQuery, ListLocationsPaginatedQueryVariables> & ({ variables: ListLocationsPaginatedQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ListLocationsPaginatedQuery, ListLocationsPaginatedQueryVariables>(ListLocationsPaginatedDocument, options);
      }
export function useListLocationsPaginatedLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListLocationsPaginatedQuery, ListLocationsPaginatedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ListLocationsPaginatedQuery, ListLocationsPaginatedQueryVariables>(ListLocationsPaginatedDocument, options);
        }
export function useListLocationsPaginatedSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<ListLocationsPaginatedQuery, ListLocationsPaginatedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<ListLocationsPaginatedQuery, ListLocationsPaginatedQueryVariables>(ListLocationsPaginatedDocument, options);
        }
export type ListLocationsPaginatedQueryHookResult = ReturnType<typeof useListLocationsPaginatedQuery>;
export type ListLocationsPaginatedLazyQueryHookResult = ReturnType<typeof useListLocationsPaginatedLazyQuery>;
export type ListLocationsPaginatedSuspenseQueryHookResult = ReturnType<typeof useListLocationsPaginatedSuspenseQuery>;
export type ListLocationsPaginatedQueryResult = Apollo.QueryResult<ListLocationsPaginatedQuery, ListLocationsPaginatedQueryVariables>;
export const ListAllLocationsOptionsDocument = gql`
    query ListAllLocationsOptions($search: SearchBaseInput!) {
  listLocationsPaginated(search: $search) {
    docs {
      _id
      name
      slug
    }
  }
}
    `;

/**
 * __useListAllLocationsOptionsQuery__
 *
 * To run a query within a React component, call `useListAllLocationsOptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListAllLocationsOptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListAllLocationsOptionsQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useListAllLocationsOptionsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<ListAllLocationsOptionsQuery, ListAllLocationsOptionsQueryVariables> & ({ variables: ListAllLocationsOptionsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ListAllLocationsOptionsQuery, ListAllLocationsOptionsQueryVariables>(ListAllLocationsOptionsDocument, options);
      }
export function useListAllLocationsOptionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListAllLocationsOptionsQuery, ListAllLocationsOptionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ListAllLocationsOptionsQuery, ListAllLocationsOptionsQueryVariables>(ListAllLocationsOptionsDocument, options);
        }
export function useListAllLocationsOptionsSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<ListAllLocationsOptionsQuery, ListAllLocationsOptionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<ListAllLocationsOptionsQuery, ListAllLocationsOptionsQueryVariables>(ListAllLocationsOptionsDocument, options);
        }
export type ListAllLocationsOptionsQueryHookResult = ReturnType<typeof useListAllLocationsOptionsQuery>;
export type ListAllLocationsOptionsLazyQueryHookResult = ReturnType<typeof useListAllLocationsOptionsLazyQuery>;
export type ListAllLocationsOptionsSuspenseQueryHookResult = ReturnType<typeof useListAllLocationsOptionsSuspenseQuery>;
export type ListAllLocationsOptionsQueryResult = Apollo.QueryResult<ListAllLocationsOptionsQuery, ListAllLocationsOptionsQueryVariables>;
export const ListProductsPaginatedDocument = gql`
    query ListProductsPaginated($search: SearchProductInput!) {
  listProductsPaginated(search: $search) {
    docs {
      _id
      name
      slug
      images
      price
      priceType
      serviceFee
      minimunDays
      companyId
      categoryId
      locationId
      status
      createdAt
    }
    page
    prevPage
    nextPage
    hasNextPage
    hasPrevPage
    limit
    totalDocs
    totalPages
  }
}
    `;

/**
 * __useListProductsPaginatedQuery__
 *
 * To run a query within a React component, call `useListProductsPaginatedQuery` and pass it any options that fit your needs.
 * When your component renders, `useListProductsPaginatedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListProductsPaginatedQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useListProductsPaginatedQuery(baseOptions: ApolloReactHooks.QueryHookOptions<ListProductsPaginatedQuery, ListProductsPaginatedQueryVariables> & ({ variables: ListProductsPaginatedQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ListProductsPaginatedQuery, ListProductsPaginatedQueryVariables>(ListProductsPaginatedDocument, options);
      }
export function useListProductsPaginatedLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListProductsPaginatedQuery, ListProductsPaginatedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ListProductsPaginatedQuery, ListProductsPaginatedQueryVariables>(ListProductsPaginatedDocument, options);
        }
export function useListProductsPaginatedSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<ListProductsPaginatedQuery, ListProductsPaginatedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<ListProductsPaginatedQuery, ListProductsPaginatedQueryVariables>(ListProductsPaginatedDocument, options);
        }
export type ListProductsPaginatedQueryHookResult = ReturnType<typeof useListProductsPaginatedQuery>;
export type ListProductsPaginatedLazyQueryHookResult = ReturnType<typeof useListProductsPaginatedLazyQuery>;
export type ListProductsPaginatedSuspenseQueryHookResult = ReturnType<typeof useListProductsPaginatedSuspenseQuery>;
export type ListProductsPaginatedQueryResult = Apollo.QueryResult<ListProductsPaginatedQuery, ListProductsPaginatedQueryVariables>;
export const FindOneProductDocument = gql`
    query FindOneProduct($id: ObjectId!) {
  findOneProduct(id: $id) {
    _id
    name
    images
    price
    amenities
    description
    priceType
    serviceFee
    full_price
    minimunDays
    companyId
    categoryId
    locationId
    spaceRequirements
    supervision
    safety
    insurancePlan
    notification
  }
}
    `;

/**
 * __useFindOneProductQuery__
 *
 * To run a query within a React component, call `useFindOneProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindOneProductQuery(baseOptions: ApolloReactHooks.QueryHookOptions<FindOneProductQuery, FindOneProductQueryVariables> & ({ variables: FindOneProductQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<FindOneProductQuery, FindOneProductQueryVariables>(FindOneProductDocument, options);
      }
export function useFindOneProductLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindOneProductQuery, FindOneProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<FindOneProductQuery, FindOneProductQueryVariables>(FindOneProductDocument, options);
        }
export function useFindOneProductSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<FindOneProductQuery, FindOneProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<FindOneProductQuery, FindOneProductQueryVariables>(FindOneProductDocument, options);
        }
export type FindOneProductQueryHookResult = ReturnType<typeof useFindOneProductQuery>;
export type FindOneProductLazyQueryHookResult = ReturnType<typeof useFindOneProductLazyQuery>;
export type FindOneProductSuspenseQueryHookResult = ReturnType<typeof useFindOneProductSuspenseQuery>;
export type FindOneProductQueryResult = Apollo.QueryResult<FindOneProductQuery, FindOneProductQueryVariables>;
export const FindAmenitiesDocument = gql`
    query FindAmenities($ids: [ObjectId!]!) {
  findAmenities(ids: $ids) {
    _id
    name
    description
    icon
  }
}
    `;

/**
 * __useFindAmenitiesQuery__
 *
 * To run a query within a React component, call `useFindAmenitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAmenitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAmenitiesQuery({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useFindAmenitiesQuery(baseOptions: ApolloReactHooks.QueryHookOptions<FindAmenitiesQuery, FindAmenitiesQueryVariables> & ({ variables: FindAmenitiesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<FindAmenitiesQuery, FindAmenitiesQueryVariables>(FindAmenitiesDocument, options);
      }
export function useFindAmenitiesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindAmenitiesQuery, FindAmenitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<FindAmenitiesQuery, FindAmenitiesQueryVariables>(FindAmenitiesDocument, options);
        }
export function useFindAmenitiesSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<FindAmenitiesQuery, FindAmenitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<FindAmenitiesQuery, FindAmenitiesQueryVariables>(FindAmenitiesDocument, options);
        }
export type FindAmenitiesQueryHookResult = ReturnType<typeof useFindAmenitiesQuery>;
export type FindAmenitiesLazyQueryHookResult = ReturnType<typeof useFindAmenitiesLazyQuery>;
export type FindAmenitiesSuspenseQueryHookResult = ReturnType<typeof useFindAmenitiesSuspenseQuery>;
export type FindAmenitiesQueryResult = Apollo.QueryResult<FindAmenitiesQuery, FindAmenitiesQueryVariables>;
export const ListAmenitiesPaginatedDocument = gql`
    query ListAmenitiesPaginated($search: SearchBaseInput!) {
  listAmenitiesPaginated(search: $search) {
    docs {
      _id
      name
      description
      icon
    }
    page
    totalDocs
  }
}
    `;

/**
 * __useListAmenitiesPaginatedQuery__
 *
 * To run a query within a React component, call `useListAmenitiesPaginatedQuery` and pass it any options that fit your needs.
 * When your component renders, `useListAmenitiesPaginatedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListAmenitiesPaginatedQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useListAmenitiesPaginatedQuery(baseOptions: ApolloReactHooks.QueryHookOptions<ListAmenitiesPaginatedQuery, ListAmenitiesPaginatedQueryVariables> & ({ variables: ListAmenitiesPaginatedQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ListAmenitiesPaginatedQuery, ListAmenitiesPaginatedQueryVariables>(ListAmenitiesPaginatedDocument, options);
      }
export function useListAmenitiesPaginatedLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListAmenitiesPaginatedQuery, ListAmenitiesPaginatedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ListAmenitiesPaginatedQuery, ListAmenitiesPaginatedQueryVariables>(ListAmenitiesPaginatedDocument, options);
        }
export function useListAmenitiesPaginatedSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<ListAmenitiesPaginatedQuery, ListAmenitiesPaginatedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<ListAmenitiesPaginatedQuery, ListAmenitiesPaginatedQueryVariables>(ListAmenitiesPaginatedDocument, options);
        }
export type ListAmenitiesPaginatedQueryHookResult = ReturnType<typeof useListAmenitiesPaginatedQuery>;
export type ListAmenitiesPaginatedLazyQueryHookResult = ReturnType<typeof useListAmenitiesPaginatedLazyQuery>;
export type ListAmenitiesPaginatedSuspenseQueryHookResult = ReturnType<typeof useListAmenitiesPaginatedSuspenseQuery>;
export type ListAmenitiesPaginatedQueryResult = Apollo.QueryResult<ListAmenitiesPaginatedQuery, ListAmenitiesPaginatedQueryVariables>;
export const ProfileDocument = gql`
    query Profile {
  me {
    __typename
    _id
    email
    fullName
    permissions
    profile
    avatar
    role
  }
}
    `;

/**
 * __useProfileQuery__
 *
 * To run a query within a React component, call `useProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useProfileQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
      }
export function useProfileLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
        }
export function useProfileSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
        }
export type ProfileQueryHookResult = ReturnType<typeof useProfileQuery>;
export type ProfileLazyQueryHookResult = ReturnType<typeof useProfileLazyQuery>;
export type ProfileSuspenseQueryHookResult = ReturnType<typeof useProfileSuspenseQuery>;
export type ProfileQueryResult = Apollo.QueryResult<ProfileQuery, ProfileQueryVariables>;
export const ListReviewsForCompanyPaginatedDocument = gql`
    query ListReviewsForCompanyPaginated($search: SearchBaseInput!, $companyId: ObjectId!) {
  listReviewsForCompany(search: $search, companyId: $companyId) {
    docs {
      _id
      fullName
      description
      companyId
      locationId
      amount
      locationName
      status
      createdAt
    }
    page
    prevPage
    nextPage
    hasNextPage
    hasPrevPage
    limit
    totalDocs
    totalPages
  }
}
    `;

/**
 * __useListReviewsForCompanyPaginatedQuery__
 *
 * To run a query within a React component, call `useListReviewsForCompanyPaginatedQuery` and pass it any options that fit your needs.
 * When your component renders, `useListReviewsForCompanyPaginatedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListReviewsForCompanyPaginatedQuery({
 *   variables: {
 *      search: // value for 'search'
 *      companyId: // value for 'companyId'
 *   },
 * });
 */
export function useListReviewsForCompanyPaginatedQuery(baseOptions: ApolloReactHooks.QueryHookOptions<ListReviewsForCompanyPaginatedQuery, ListReviewsForCompanyPaginatedQueryVariables> & ({ variables: ListReviewsForCompanyPaginatedQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ListReviewsForCompanyPaginatedQuery, ListReviewsForCompanyPaginatedQueryVariables>(ListReviewsForCompanyPaginatedDocument, options);
      }
export function useListReviewsForCompanyPaginatedLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListReviewsForCompanyPaginatedQuery, ListReviewsForCompanyPaginatedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ListReviewsForCompanyPaginatedQuery, ListReviewsForCompanyPaginatedQueryVariables>(ListReviewsForCompanyPaginatedDocument, options);
        }
export function useListReviewsForCompanyPaginatedSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<ListReviewsForCompanyPaginatedQuery, ListReviewsForCompanyPaginatedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<ListReviewsForCompanyPaginatedQuery, ListReviewsForCompanyPaginatedQueryVariables>(ListReviewsForCompanyPaginatedDocument, options);
        }
export type ListReviewsForCompanyPaginatedQueryHookResult = ReturnType<typeof useListReviewsForCompanyPaginatedQuery>;
export type ListReviewsForCompanyPaginatedLazyQueryHookResult = ReturnType<typeof useListReviewsForCompanyPaginatedLazyQuery>;
export type ListReviewsForCompanyPaginatedSuspenseQueryHookResult = ReturnType<typeof useListReviewsForCompanyPaginatedSuspenseQuery>;
export type ListReviewsForCompanyPaginatedQueryResult = Apollo.QueryResult<ListReviewsForCompanyPaginatedQuery, ListReviewsForCompanyPaginatedQueryVariables>;
export const GetSetttingsDocument = gql`
    query GetSetttings {
  getSettings {
    _id
    serviceFee
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetSetttingsQuery__
 *
 * To run a query within a React component, call `useGetSetttingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSetttingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSetttingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSetttingsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetSetttingsQuery, GetSetttingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetSetttingsQuery, GetSetttingsQueryVariables>(GetSetttingsDocument, options);
      }
export function useGetSetttingsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetSetttingsQuery, GetSetttingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetSetttingsQuery, GetSetttingsQueryVariables>(GetSetttingsDocument, options);
        }
export function useGetSetttingsSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetSetttingsQuery, GetSetttingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetSetttingsQuery, GetSetttingsQueryVariables>(GetSetttingsDocument, options);
        }
export type GetSetttingsQueryHookResult = ReturnType<typeof useGetSetttingsQuery>;
export type GetSetttingsLazyQueryHookResult = ReturnType<typeof useGetSetttingsLazyQuery>;
export type GetSetttingsSuspenseQueryHookResult = ReturnType<typeof useGetSetttingsSuspenseQuery>;
export type GetSetttingsQueryResult = Apollo.QueryResult<GetSetttingsQuery, GetSetttingsQueryVariables>;