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

export type FindOneCompanyBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  companySlug: Scalars['String']['input'];
  categorySlug: Scalars['String']['input'];
  search: SearchBaseInput;
}>;


export type FindOneCompanyBySlugQuery = { __typename?: 'Query', findOneLocationBySlug: { __typename?: 'LocationStructured', location: { __typename?: 'Location', _id: string, name: string, image: string, slug: string, categories: Array<{ __typename?: 'CategoriesReduced', name: string, slug: string }> }, category: { __typename?: 'Category', _id: string, name: string, slug: string }, companies: { __typename?: 'CompaniesPaginateResponse', docs: Array<{ __typename?: 'Company', _id: string, name: string, slug: string }> } }, findOneCompanyBySlug: { __typename?: 'CompanyStructured', company: { __typename?: 'Company', _id: string, name: string, initialLetter: string }, products: { __typename?: 'ProductsPaginateResponse', docs: Array<{ __typename?: 'Product', _id: string, images: Array<string>, price: number, slug: string, name: string, priceType: ProductPriceType, full_price: number }> } } };

export type FindLocationBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  search: SearchBaseInput;
  categorySlug: Scalars['String']['input'];
}>;


export type FindLocationBySlugQuery = { __typename?: 'Query', findOneLocationBySlug: { __typename?: 'LocationStructured', location: { __typename?: 'Location', _id: string, name: string, image: string, slug: string }, category: { __typename?: 'Category', _id: string, name: string, slug: string }, faqs: { __typename?: 'FaqsPaginateResponse', docs: Array<{ __typename?: 'Faq', _id: string, question: string, answer: string, createdAt: any }> } } };

export type FindCompaniesInLocationAndCategorySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  search: SearchBaseInput;
  categorySlug: Scalars['String']['input'];
}>;


export type FindCompaniesInLocationAndCategorySlugQuery = { __typename?: 'Query', findOneLocationBySlug: { __typename?: 'LocationStructured', location: { __typename?: 'Location', _id: string, name: string, image: string, slug: string }, category: { __typename?: 'Category', _id: string, name: string, slug: string }, companies: { __typename?: 'CompaniesPaginateResponse', hasPrevPage: boolean, hasNextPage: boolean, nextPage?: number | null, prevPage?: number | null, page: number, docs: Array<{ __typename?: 'Company', _id: string, name: string, slug: string, locationName: string, initialLetter: string }> } } };

export type FindCompaniesByLocationSlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  search: SearchBaseInput;
  categorySlug: Scalars['String']['input'];
}>;


export type FindCompaniesByLocationSlugQuery = { __typename?: 'Query', findOneLocationBySlug: { __typename?: 'LocationStructured', companies: { __typename?: 'CompaniesPaginateResponse', hasPrevPage: boolean, hasNextPage: boolean, nextPage?: number | null, prevPage?: number | null, page: number, docs: Array<{ __typename?: 'Company', _id: string, name: string, slug: string, locationName: string, initialLetter: string }> } } };

export type FindArticlesByLocationSlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  search: SearchArticleInput;
  categorySlug: Scalars['String']['input'];
}>;


export type FindArticlesByLocationSlugQuery = { __typename?: 'Query', findOneLocationBySlug: { __typename?: 'LocationStructured', articles: { __typename?: 'ArticlesPaginateResponse', hasPrevPage: boolean, hasNextPage: boolean, nextPage?: number | null, prevPage?: number | null, page: number, docs: Array<{ __typename?: 'Article', _id: string, title: string, description: string, image: string, type: ArticlesType, createdAt: any }> } } };

export type FindFaqsByLocationSlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  search: SearchBaseInput;
  categorySlug: Scalars['String']['input'];
}>;


export type FindFaqsByLocationSlugQuery = { __typename?: 'Query', findOneLocationBySlug: { __typename?: 'LocationStructured', faqs: { __typename?: 'FaqsPaginateResponse', docs: Array<{ __typename?: 'Faq', _id: string, question: string, answer: string, createdAt: any }> } } };

export type FindLocationsQueryVariables = Exact<{
  search: SearchBaseInput;
}>;


export type FindLocationsQuery = { __typename?: 'Query', findLocations: { __typename?: 'LocationsPaginateResponse', docs: Array<{ __typename?: 'Location', _id: string, image: string, name: string, slug: string }> } };

export type FindCategoriesByLocationBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type FindCategoriesByLocationBySlugQuery = { __typename?: 'Query', findCategoriesByLocationBySlug: { __typename?: 'Location', _id: string, name: string, slug: string, categories: Array<{ __typename?: 'CategoriesReduced', name: string, slug: string }> } };

export type FindProductDetailsQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type FindProductDetailsQuery = { __typename?: 'Query', findOneProductPopulate: { __typename?: 'ProductPopulate', _id: string, images: Array<string>, price: number, slug: string, name: string, description: string, priceType: ProductPriceType, full_price: number, spaceRequirements: string, supervision: string, safety: string, insurancePlan: string, notification: string, amenities: Array<{ __typename?: 'Amenities', _id: string, name: string, description: string, icon: string }>, companyId: { __typename?: 'Company', _id: string, name: string, initialLetter: string, slug: string, reviewsAmount: number, reviewsRating: number, locationName: string, locationSlug: string }, locationId: { __typename?: 'Location', _id: string, name: string, image: string, slug: string, categories: Array<{ __typename?: 'CategoriesReduced', name: string, slug: string }> }, categoryId: { __typename?: 'Category', _id: string, name: string, slug: string, spaceRequirements: string, supervision: string, safety: string, insurancePlan: string, notification: string } } };

export type ListProductsSameCompanyQueryVariables = Exact<{
  search: SearchProductInput;
  slug: Scalars['String']['input'];
}>;


export type ListProductsSameCompanyQuery = { __typename?: 'Query', listProductsSameCompany: { __typename?: 'ProductsPaginateResponse', docs: Array<{ __typename?: 'Product', _id: string, name: string, price: number, full_price: number, priceType: ProductPriceType, images: Array<string>, slug: string }> } };

export type ListReviewsForCompanyQueryVariables = Exact<{
  search: SearchBaseInput;
  companyId: Scalars['ObjectId']['input'];
}>;


export type ListReviewsForCompanyQuery = { __typename?: 'Query', listReviewsForCompany: { __typename?: 'ReviewsPaginateResponse', docs: Array<{ __typename?: 'Review', _id: string, fullName: string, locationName: string, description: string, amount: number }> } };


export const FindOneCompanyBySlugDocument = gql`
    query FindOneCompanyBySlug($slug: String!, $companySlug: String!, $categorySlug: String!, $search: SearchBaseInput!) {
  findOneLocationBySlug(slug: $slug, categorySlug: $categorySlug) {
    location {
      _id
      name
      image
      slug
      categories {
        name
        slug
      }
    }
    category {
      _id
      name
      slug
    }
    companies(search: $search) {
      docs {
        _id
        name
        slug
      }
    }
  }
  findOneCompanyBySlug(companySlug: $companySlug) {
    company {
      _id
      name
      initialLetter
    }
    products(search: $search, slug: $categorySlug) {
      docs {
        _id
        images
        price
        slug
        name
        priceType
        full_price
      }
    }
  }
}
    `;

/**
 * __useFindOneCompanyBySlugQuery__
 *
 * To run a query within a React component, call `useFindOneCompanyBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneCompanyBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneCompanyBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      companySlug: // value for 'companySlug'
 *      categorySlug: // value for 'categorySlug'
 *      search: // value for 'search'
 *   },
 * });
 */
export function useFindOneCompanyBySlugQuery(baseOptions: ApolloReactHooks.QueryHookOptions<FindOneCompanyBySlugQuery, FindOneCompanyBySlugQueryVariables> & ({ variables: FindOneCompanyBySlugQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<FindOneCompanyBySlugQuery, FindOneCompanyBySlugQueryVariables>(FindOneCompanyBySlugDocument, options);
      }
export function useFindOneCompanyBySlugLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindOneCompanyBySlugQuery, FindOneCompanyBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<FindOneCompanyBySlugQuery, FindOneCompanyBySlugQueryVariables>(FindOneCompanyBySlugDocument, options);
        }
export function useFindOneCompanyBySlugSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<FindOneCompanyBySlugQuery, FindOneCompanyBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<FindOneCompanyBySlugQuery, FindOneCompanyBySlugQueryVariables>(FindOneCompanyBySlugDocument, options);
        }
export type FindOneCompanyBySlugQueryHookResult = ReturnType<typeof useFindOneCompanyBySlugQuery>;
export type FindOneCompanyBySlugLazyQueryHookResult = ReturnType<typeof useFindOneCompanyBySlugLazyQuery>;
export type FindOneCompanyBySlugSuspenseQueryHookResult = ReturnType<typeof useFindOneCompanyBySlugSuspenseQuery>;
export type FindOneCompanyBySlugQueryResult = Apollo.QueryResult<FindOneCompanyBySlugQuery, FindOneCompanyBySlugQueryVariables>;
export const FindLocationBySlugDocument = gql`
    query FindLocationBySlug($slug: String!, $search: SearchBaseInput!, $categorySlug: String!) {
  findOneLocationBySlug(slug: $slug, categorySlug: $categorySlug) {
    location {
      _id
      name
      image
      slug
    }
    category {
      _id
      name
      slug
    }
    faqs(search: $search) {
      docs {
        _id
        question
        answer
        createdAt
      }
    }
  }
}
    `;

/**
 * __useFindLocationBySlugQuery__
 *
 * To run a query within a React component, call `useFindLocationBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindLocationBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindLocationBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      search: // value for 'search'
 *      categorySlug: // value for 'categorySlug'
 *   },
 * });
 */
export function useFindLocationBySlugQuery(baseOptions: ApolloReactHooks.QueryHookOptions<FindLocationBySlugQuery, FindLocationBySlugQueryVariables> & ({ variables: FindLocationBySlugQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<FindLocationBySlugQuery, FindLocationBySlugQueryVariables>(FindLocationBySlugDocument, options);
      }
export function useFindLocationBySlugLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindLocationBySlugQuery, FindLocationBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<FindLocationBySlugQuery, FindLocationBySlugQueryVariables>(FindLocationBySlugDocument, options);
        }
export function useFindLocationBySlugSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<FindLocationBySlugQuery, FindLocationBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<FindLocationBySlugQuery, FindLocationBySlugQueryVariables>(FindLocationBySlugDocument, options);
        }
export type FindLocationBySlugQueryHookResult = ReturnType<typeof useFindLocationBySlugQuery>;
export type FindLocationBySlugLazyQueryHookResult = ReturnType<typeof useFindLocationBySlugLazyQuery>;
export type FindLocationBySlugSuspenseQueryHookResult = ReturnType<typeof useFindLocationBySlugSuspenseQuery>;
export type FindLocationBySlugQueryResult = Apollo.QueryResult<FindLocationBySlugQuery, FindLocationBySlugQueryVariables>;
export const FindCompaniesInLocationAndCategorySlugDocument = gql`
    query FindCompaniesInLocationAndCategorySlug($slug: String!, $search: SearchBaseInput!, $categorySlug: String!) {
  findOneLocationBySlug(slug: $slug, categorySlug: $categorySlug) {
    location {
      _id
      name
      image
      slug
    }
    category {
      _id
      name
      slug
    }
    companies(search: $search) {
      docs {
        _id
        name
        slug
        locationName
        initialLetter
      }
      hasPrevPage
      hasNextPage
      nextPage
      prevPage
      page
    }
  }
}
    `;

/**
 * __useFindCompaniesInLocationAndCategorySlugQuery__
 *
 * To run a query within a React component, call `useFindCompaniesInLocationAndCategorySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCompaniesInLocationAndCategorySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCompaniesInLocationAndCategorySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      search: // value for 'search'
 *      categorySlug: // value for 'categorySlug'
 *   },
 * });
 */
export function useFindCompaniesInLocationAndCategorySlugQuery(baseOptions: ApolloReactHooks.QueryHookOptions<FindCompaniesInLocationAndCategorySlugQuery, FindCompaniesInLocationAndCategorySlugQueryVariables> & ({ variables: FindCompaniesInLocationAndCategorySlugQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<FindCompaniesInLocationAndCategorySlugQuery, FindCompaniesInLocationAndCategorySlugQueryVariables>(FindCompaniesInLocationAndCategorySlugDocument, options);
      }
export function useFindCompaniesInLocationAndCategorySlugLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindCompaniesInLocationAndCategorySlugQuery, FindCompaniesInLocationAndCategorySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<FindCompaniesInLocationAndCategorySlugQuery, FindCompaniesInLocationAndCategorySlugQueryVariables>(FindCompaniesInLocationAndCategorySlugDocument, options);
        }
export function useFindCompaniesInLocationAndCategorySlugSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<FindCompaniesInLocationAndCategorySlugQuery, FindCompaniesInLocationAndCategorySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<FindCompaniesInLocationAndCategorySlugQuery, FindCompaniesInLocationAndCategorySlugQueryVariables>(FindCompaniesInLocationAndCategorySlugDocument, options);
        }
export type FindCompaniesInLocationAndCategorySlugQueryHookResult = ReturnType<typeof useFindCompaniesInLocationAndCategorySlugQuery>;
export type FindCompaniesInLocationAndCategorySlugLazyQueryHookResult = ReturnType<typeof useFindCompaniesInLocationAndCategorySlugLazyQuery>;
export type FindCompaniesInLocationAndCategorySlugSuspenseQueryHookResult = ReturnType<typeof useFindCompaniesInLocationAndCategorySlugSuspenseQuery>;
export type FindCompaniesInLocationAndCategorySlugQueryResult = Apollo.QueryResult<FindCompaniesInLocationAndCategorySlugQuery, FindCompaniesInLocationAndCategorySlugQueryVariables>;
export const FindCompaniesByLocationSlugDocument = gql`
    query FindCompaniesByLocationSlug($slug: String!, $search: SearchBaseInput!, $categorySlug: String!) {
  findOneLocationBySlug(slug: $slug, categorySlug: $categorySlug) {
    companies(search: $search) {
      docs {
        _id
        name
        slug
        locationName
        initialLetter
      }
      hasPrevPage
      hasNextPage
      nextPage
      prevPage
      page
    }
  }
}
    `;

/**
 * __useFindCompaniesByLocationSlugQuery__
 *
 * To run a query within a React component, call `useFindCompaniesByLocationSlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCompaniesByLocationSlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCompaniesByLocationSlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      search: // value for 'search'
 *      categorySlug: // value for 'categorySlug'
 *   },
 * });
 */
export function useFindCompaniesByLocationSlugQuery(baseOptions: ApolloReactHooks.QueryHookOptions<FindCompaniesByLocationSlugQuery, FindCompaniesByLocationSlugQueryVariables> & ({ variables: FindCompaniesByLocationSlugQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<FindCompaniesByLocationSlugQuery, FindCompaniesByLocationSlugQueryVariables>(FindCompaniesByLocationSlugDocument, options);
      }
export function useFindCompaniesByLocationSlugLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindCompaniesByLocationSlugQuery, FindCompaniesByLocationSlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<FindCompaniesByLocationSlugQuery, FindCompaniesByLocationSlugQueryVariables>(FindCompaniesByLocationSlugDocument, options);
        }
export function useFindCompaniesByLocationSlugSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<FindCompaniesByLocationSlugQuery, FindCompaniesByLocationSlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<FindCompaniesByLocationSlugQuery, FindCompaniesByLocationSlugQueryVariables>(FindCompaniesByLocationSlugDocument, options);
        }
export type FindCompaniesByLocationSlugQueryHookResult = ReturnType<typeof useFindCompaniesByLocationSlugQuery>;
export type FindCompaniesByLocationSlugLazyQueryHookResult = ReturnType<typeof useFindCompaniesByLocationSlugLazyQuery>;
export type FindCompaniesByLocationSlugSuspenseQueryHookResult = ReturnType<typeof useFindCompaniesByLocationSlugSuspenseQuery>;
export type FindCompaniesByLocationSlugQueryResult = Apollo.QueryResult<FindCompaniesByLocationSlugQuery, FindCompaniesByLocationSlugQueryVariables>;
export const FindArticlesByLocationSlugDocument = gql`
    query FindArticlesByLocationSlug($slug: String!, $search: SearchArticleInput!, $categorySlug: String!) {
  findOneLocationBySlug(slug: $slug, categorySlug: $categorySlug) {
    articles(search: $search) {
      docs {
        _id
        title
        description
        image
        type
        createdAt
      }
      hasPrevPage
      hasNextPage
      nextPage
      prevPage
      page
    }
  }
}
    `;

/**
 * __useFindArticlesByLocationSlugQuery__
 *
 * To run a query within a React component, call `useFindArticlesByLocationSlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindArticlesByLocationSlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindArticlesByLocationSlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      search: // value for 'search'
 *      categorySlug: // value for 'categorySlug'
 *   },
 * });
 */
export function useFindArticlesByLocationSlugQuery(baseOptions: ApolloReactHooks.QueryHookOptions<FindArticlesByLocationSlugQuery, FindArticlesByLocationSlugQueryVariables> & ({ variables: FindArticlesByLocationSlugQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<FindArticlesByLocationSlugQuery, FindArticlesByLocationSlugQueryVariables>(FindArticlesByLocationSlugDocument, options);
      }
export function useFindArticlesByLocationSlugLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindArticlesByLocationSlugQuery, FindArticlesByLocationSlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<FindArticlesByLocationSlugQuery, FindArticlesByLocationSlugQueryVariables>(FindArticlesByLocationSlugDocument, options);
        }
export function useFindArticlesByLocationSlugSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<FindArticlesByLocationSlugQuery, FindArticlesByLocationSlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<FindArticlesByLocationSlugQuery, FindArticlesByLocationSlugQueryVariables>(FindArticlesByLocationSlugDocument, options);
        }
export type FindArticlesByLocationSlugQueryHookResult = ReturnType<typeof useFindArticlesByLocationSlugQuery>;
export type FindArticlesByLocationSlugLazyQueryHookResult = ReturnType<typeof useFindArticlesByLocationSlugLazyQuery>;
export type FindArticlesByLocationSlugSuspenseQueryHookResult = ReturnType<typeof useFindArticlesByLocationSlugSuspenseQuery>;
export type FindArticlesByLocationSlugQueryResult = Apollo.QueryResult<FindArticlesByLocationSlugQuery, FindArticlesByLocationSlugQueryVariables>;
export const FindFaqsByLocationSlugDocument = gql`
    query FindFaqsByLocationSlug($slug: String!, $search: SearchBaseInput!, $categorySlug: String!) {
  findOneLocationBySlug(slug: $slug, categorySlug: $categorySlug) {
    faqs(search: $search) {
      docs {
        _id
        question
        answer
        createdAt
      }
    }
  }
}
    `;

/**
 * __useFindFaqsByLocationSlugQuery__
 *
 * To run a query within a React component, call `useFindFaqsByLocationSlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindFaqsByLocationSlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindFaqsByLocationSlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      search: // value for 'search'
 *      categorySlug: // value for 'categorySlug'
 *   },
 * });
 */
export function useFindFaqsByLocationSlugQuery(baseOptions: ApolloReactHooks.QueryHookOptions<FindFaqsByLocationSlugQuery, FindFaqsByLocationSlugQueryVariables> & ({ variables: FindFaqsByLocationSlugQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<FindFaqsByLocationSlugQuery, FindFaqsByLocationSlugQueryVariables>(FindFaqsByLocationSlugDocument, options);
      }
export function useFindFaqsByLocationSlugLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindFaqsByLocationSlugQuery, FindFaqsByLocationSlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<FindFaqsByLocationSlugQuery, FindFaqsByLocationSlugQueryVariables>(FindFaqsByLocationSlugDocument, options);
        }
export function useFindFaqsByLocationSlugSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<FindFaqsByLocationSlugQuery, FindFaqsByLocationSlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<FindFaqsByLocationSlugQuery, FindFaqsByLocationSlugQueryVariables>(FindFaqsByLocationSlugDocument, options);
        }
export type FindFaqsByLocationSlugQueryHookResult = ReturnType<typeof useFindFaqsByLocationSlugQuery>;
export type FindFaqsByLocationSlugLazyQueryHookResult = ReturnType<typeof useFindFaqsByLocationSlugLazyQuery>;
export type FindFaqsByLocationSlugSuspenseQueryHookResult = ReturnType<typeof useFindFaqsByLocationSlugSuspenseQuery>;
export type FindFaqsByLocationSlugQueryResult = Apollo.QueryResult<FindFaqsByLocationSlugQuery, FindFaqsByLocationSlugQueryVariables>;
export const FindLocationsDocument = gql`
    query FindLocations($search: SearchBaseInput!) {
  findLocations(search: $search) {
    docs {
      _id
      image
      name
      slug
    }
  }
}
    `;

/**
 * __useFindLocationsQuery__
 *
 * To run a query within a React component, call `useFindLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindLocationsQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useFindLocationsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<FindLocationsQuery, FindLocationsQueryVariables> & ({ variables: FindLocationsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<FindLocationsQuery, FindLocationsQueryVariables>(FindLocationsDocument, options);
      }
export function useFindLocationsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindLocationsQuery, FindLocationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<FindLocationsQuery, FindLocationsQueryVariables>(FindLocationsDocument, options);
        }
export function useFindLocationsSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<FindLocationsQuery, FindLocationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<FindLocationsQuery, FindLocationsQueryVariables>(FindLocationsDocument, options);
        }
export type FindLocationsQueryHookResult = ReturnType<typeof useFindLocationsQuery>;
export type FindLocationsLazyQueryHookResult = ReturnType<typeof useFindLocationsLazyQuery>;
export type FindLocationsSuspenseQueryHookResult = ReturnType<typeof useFindLocationsSuspenseQuery>;
export type FindLocationsQueryResult = Apollo.QueryResult<FindLocationsQuery, FindLocationsQueryVariables>;
export const FindCategoriesByLocationBySlugDocument = gql`
    query FindCategoriesByLocationBySlug($slug: String!) {
  findCategoriesByLocationBySlug(slug: $slug) {
    _id
    name
    slug
    categories {
      name
      slug
    }
  }
}
    `;

/**
 * __useFindCategoriesByLocationBySlugQuery__
 *
 * To run a query within a React component, call `useFindCategoriesByLocationBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCategoriesByLocationBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCategoriesByLocationBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useFindCategoriesByLocationBySlugQuery(baseOptions: ApolloReactHooks.QueryHookOptions<FindCategoriesByLocationBySlugQuery, FindCategoriesByLocationBySlugQueryVariables> & ({ variables: FindCategoriesByLocationBySlugQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<FindCategoriesByLocationBySlugQuery, FindCategoriesByLocationBySlugQueryVariables>(FindCategoriesByLocationBySlugDocument, options);
      }
export function useFindCategoriesByLocationBySlugLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindCategoriesByLocationBySlugQuery, FindCategoriesByLocationBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<FindCategoriesByLocationBySlugQuery, FindCategoriesByLocationBySlugQueryVariables>(FindCategoriesByLocationBySlugDocument, options);
        }
export function useFindCategoriesByLocationBySlugSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<FindCategoriesByLocationBySlugQuery, FindCategoriesByLocationBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<FindCategoriesByLocationBySlugQuery, FindCategoriesByLocationBySlugQueryVariables>(FindCategoriesByLocationBySlugDocument, options);
        }
export type FindCategoriesByLocationBySlugQueryHookResult = ReturnType<typeof useFindCategoriesByLocationBySlugQuery>;
export type FindCategoriesByLocationBySlugLazyQueryHookResult = ReturnType<typeof useFindCategoriesByLocationBySlugLazyQuery>;
export type FindCategoriesByLocationBySlugSuspenseQueryHookResult = ReturnType<typeof useFindCategoriesByLocationBySlugSuspenseQuery>;
export type FindCategoriesByLocationBySlugQueryResult = Apollo.QueryResult<FindCategoriesByLocationBySlugQuery, FindCategoriesByLocationBySlugQueryVariables>;
export const FindProductDetailsDocument = gql`
    query FindProductDetails($slug: String!) {
  findOneProductPopulate(slug: $slug) {
    _id
    images
    price
    slug
    name
    description
    priceType
    full_price
    amenities {
      _id
      name
      description
      icon
    }
    companyId {
      _id
      name
      initialLetter
      slug
      reviewsAmount
      reviewsRating
      locationName
      locationSlug
    }
    locationId {
      _id
      name
      image
      slug
      categories {
        name
        slug
      }
    }
    categoryId {
      _id
      name
      slug
      spaceRequirements
      supervision
      safety
      insurancePlan
      notification
    }
    spaceRequirements
    supervision
    safety
    insurancePlan
    notification
  }
}
    `;

/**
 * __useFindProductDetailsQuery__
 *
 * To run a query within a React component, call `useFindProductDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindProductDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindProductDetailsQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useFindProductDetailsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<FindProductDetailsQuery, FindProductDetailsQueryVariables> & ({ variables: FindProductDetailsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<FindProductDetailsQuery, FindProductDetailsQueryVariables>(FindProductDetailsDocument, options);
      }
export function useFindProductDetailsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindProductDetailsQuery, FindProductDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<FindProductDetailsQuery, FindProductDetailsQueryVariables>(FindProductDetailsDocument, options);
        }
export function useFindProductDetailsSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<FindProductDetailsQuery, FindProductDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<FindProductDetailsQuery, FindProductDetailsQueryVariables>(FindProductDetailsDocument, options);
        }
export type FindProductDetailsQueryHookResult = ReturnType<typeof useFindProductDetailsQuery>;
export type FindProductDetailsLazyQueryHookResult = ReturnType<typeof useFindProductDetailsLazyQuery>;
export type FindProductDetailsSuspenseQueryHookResult = ReturnType<typeof useFindProductDetailsSuspenseQuery>;
export type FindProductDetailsQueryResult = Apollo.QueryResult<FindProductDetailsQuery, FindProductDetailsQueryVariables>;
export const ListProductsSameCompanyDocument = gql`
    query ListProductsSameCompany($search: SearchProductInput!, $slug: String!) {
  listProductsSameCompany(search: $search, slug: $slug) {
    docs {
      _id
      name
      price
      full_price
      priceType
      images
      slug
    }
  }
}
    `;

/**
 * __useListProductsSameCompanyQuery__
 *
 * To run a query within a React component, call `useListProductsSameCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useListProductsSameCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListProductsSameCompanyQuery({
 *   variables: {
 *      search: // value for 'search'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useListProductsSameCompanyQuery(baseOptions: ApolloReactHooks.QueryHookOptions<ListProductsSameCompanyQuery, ListProductsSameCompanyQueryVariables> & ({ variables: ListProductsSameCompanyQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ListProductsSameCompanyQuery, ListProductsSameCompanyQueryVariables>(ListProductsSameCompanyDocument, options);
      }
export function useListProductsSameCompanyLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListProductsSameCompanyQuery, ListProductsSameCompanyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ListProductsSameCompanyQuery, ListProductsSameCompanyQueryVariables>(ListProductsSameCompanyDocument, options);
        }
export function useListProductsSameCompanySuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<ListProductsSameCompanyQuery, ListProductsSameCompanyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<ListProductsSameCompanyQuery, ListProductsSameCompanyQueryVariables>(ListProductsSameCompanyDocument, options);
        }
export type ListProductsSameCompanyQueryHookResult = ReturnType<typeof useListProductsSameCompanyQuery>;
export type ListProductsSameCompanyLazyQueryHookResult = ReturnType<typeof useListProductsSameCompanyLazyQuery>;
export type ListProductsSameCompanySuspenseQueryHookResult = ReturnType<typeof useListProductsSameCompanySuspenseQuery>;
export type ListProductsSameCompanyQueryResult = Apollo.QueryResult<ListProductsSameCompanyQuery, ListProductsSameCompanyQueryVariables>;
export const ListReviewsForCompanyDocument = gql`
    query ListReviewsForCompany($search: SearchBaseInput!, $companyId: ObjectId!) {
  listReviewsForCompany(search: $search, companyId: $companyId) {
    docs {
      _id
      fullName
      locationName
      description
      amount
    }
  }
}
    `;

/**
 * __useListReviewsForCompanyQuery__
 *
 * To run a query within a React component, call `useListReviewsForCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useListReviewsForCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListReviewsForCompanyQuery({
 *   variables: {
 *      search: // value for 'search'
 *      companyId: // value for 'companyId'
 *   },
 * });
 */
export function useListReviewsForCompanyQuery(baseOptions: ApolloReactHooks.QueryHookOptions<ListReviewsForCompanyQuery, ListReviewsForCompanyQueryVariables> & ({ variables: ListReviewsForCompanyQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ListReviewsForCompanyQuery, ListReviewsForCompanyQueryVariables>(ListReviewsForCompanyDocument, options);
      }
export function useListReviewsForCompanyLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListReviewsForCompanyQuery, ListReviewsForCompanyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ListReviewsForCompanyQuery, ListReviewsForCompanyQueryVariables>(ListReviewsForCompanyDocument, options);
        }
export function useListReviewsForCompanySuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<ListReviewsForCompanyQuery, ListReviewsForCompanyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<ListReviewsForCompanyQuery, ListReviewsForCompanyQueryVariables>(ListReviewsForCompanyDocument, options);
        }
export type ListReviewsForCompanyQueryHookResult = ReturnType<typeof useListReviewsForCompanyQuery>;
export type ListReviewsForCompanyLazyQueryHookResult = ReturnType<typeof useListReviewsForCompanyLazyQuery>;
export type ListReviewsForCompanySuspenseQueryHookResult = ReturnType<typeof useListReviewsForCompanySuspenseQuery>;
export type ListReviewsForCompanyQueryResult = Apollo.QueryResult<ListReviewsForCompanyQuery, ListReviewsForCompanyQueryVariables>;