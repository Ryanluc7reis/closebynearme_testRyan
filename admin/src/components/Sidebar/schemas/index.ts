import {
  CreateAdminDocument,
  CreateCategoryDocument,
  CreateCompanyDocument,
  CreateFaqDocument,
  CreateLocationDocument,
  CreateReviewDocument,
  UpdateAdminDocument,
  UpdateCategoryDocument,
  UpdateCompanyDocument,
  UpdateFaqDocument,
  UpdateLocationDocument,
  UpdateReviewDocument
} from '@graphql'
import { AdminSidebarValues, CreateAdminSchema, UpdateAdminSchema } from './admin_schema'
import { FormProps, SideFormValues, SidebarPrebuildComponentFormType } from '../interfaces'
import { CategorySidebarValues, CreateCategorySchema, UpdateCategorySchema } from './categories.schema'
import { CreateLocationSchema, LocationsSidebarValues, UpdateLocationSchema } from './locations.schema'
import { CreateReviewSchema, ReviewSidebarValues, UpdateReviewSchema } from './reviews.schema'
import { CreateFaqSchema, FaqSidebarValues, UpdateFaqSchema } from './faq.schema'
import { CompanySidebarValues, CreateCompanySchema, UpdateCompanySchema } from './company_schema'

interface ItemProp {
  document: any
  schema: any
  title: string
  sidebarValues: (props: FormProps) => SideFormValues<any>[]
}

interface ResponseProps {
  data: Record<SidebarPrebuildComponentFormType, ItemProp>
}

interface Props {
  editMode: boolean
}

export const SchemasPreBuild = ({ editMode }: Props): ResponseProps => {
  return {
    data: {
      admin: {
        document: editMode ? UpdateAdminDocument : CreateAdminDocument,
        schema: editMode ? UpdateAdminSchema : CreateAdminSchema,
        title: `${editMode ? 'Edit' : 'Create'} Admin`,
        sidebarValues: AdminSidebarValues
      },
      company: {
        document: editMode ? UpdateCompanyDocument : CreateCompanyDocument,
        schema: editMode ? UpdateCompanySchema : CreateCompanySchema,
        title: `${editMode ? 'Edit' : 'Create'} Company`,
        sidebarValues: CompanySidebarValues
      },
      category: {
        document: editMode ? UpdateCategoryDocument : CreateCategoryDocument,
        schema: editMode ? UpdateCategorySchema : CreateCategorySchema,
        title: `${editMode ? 'Edit' : 'Create'} Category`,
        sidebarValues: CategorySidebarValues
      },
      location: {
        document: editMode ? UpdateLocationDocument : CreateLocationDocument,
        schema: editMode ? UpdateLocationSchema : CreateLocationSchema,
        title: `${editMode ? 'Edit' : 'Create'} City`,
        sidebarValues: LocationsSidebarValues
      },
      review: {
        document: editMode ? UpdateReviewDocument : CreateReviewDocument,
        schema: editMode ? UpdateReviewSchema : CreateReviewSchema,
        title: `${editMode ? 'Edit' : 'Create'} Review`,
        sidebarValues: ReviewSidebarValues
      },
      faq: {
        document: editMode ? UpdateFaqDocument : CreateFaqDocument,
        schema: editMode ? UpdateFaqSchema : CreateFaqSchema,
        title: `${editMode ? 'Edit' : 'Create'} Faq`,
        sidebarValues: FaqSidebarValues
      }
    }
  }
}
