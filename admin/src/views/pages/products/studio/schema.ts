import * as yup from 'yup'
import { UpdateProductData, CreateProductInput, UpdateProductInput, ProductPriceType } from '@graphql'

const shape = {
  name: yup.string().required('This field is required'),
  description: yup.string().required('This field is required'),
  price: yup.number().required('This field is required'),
  full_price: yup.number().required('This field is required'),
  serviceFee: yup.number().required('This field is required'),
  priceType: yup.string().not(['EMPTY'], 'Select one option').required('Field required'),
  categoryId: yup.string().not(['EMPTY'], 'Select one option').required('Field required'),
  companyId: yup.string().not(['EMPTY'], 'Select one option').required('Field required'),
  locationId: yup.string().not(['EMPTY'], 'Select one option').required('Field required'),
  categoryName: yup.string().optional(),
  locationName: yup.string().optional(),
  images: yup.array().of(yup.string()).min(1, 'Please upload a image').required('Field required'),

  insurancePlan: yup.string().optional(),
  notification: yup.string().optional(),
  safety: yup.string().optional(),
  spaceRequirements: yup.string().optional(),
  supervision: yup.string().optional(),

  amenities: yup.array().of(yup.string())
}

export const CreateProductSchema = yup.object().shape(shape)

export const UpdateProductSchema = yup.object().shape(shape) as any

export interface CreateProductDefaultValues extends CreateProductInput {}

export interface UpdateProductDefaultValues extends UpdateProductInput {}

export const CreateProductFormDefaultValues = (
  data: Partial<CreateProductDefaultValues>
): CreateProductDefaultValues => ({
  categoryId: 'EMPTY',
  companyId: 'EMPTY',
  locationId: 'EMPTY',
  images: [],
  amenities: [],
  full_price: 0,
  minimunDays: 2,
  name: '',
  price: 0,
  categoryName: '',
  locationName: '',
  description: '',
  serviceFee: 0,
  insurancePlan: '',
  notification: '',
  safety: '',
  spaceRequirements: '',
  supervision: '',
  priceType: ProductPriceType.Day,
  ...data
})

export const UpdateProductFormDefaultValues = (id: string, data: UpdateProductData): UpdateProductDefaultValues => ({
  _id: id,
  data
})
