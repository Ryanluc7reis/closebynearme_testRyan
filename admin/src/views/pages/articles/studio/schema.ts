import * as yup from 'yup'
import { UpdateArticleData, CreateArticleInput, UpdateArticleInput, ArticlesType } from '@graphql'

export const ArticleSchema = yup.object().shape({
  title: yup.string().required('This field is required'),
  description: yup.string().required('This field is required'),
  type: yup.string().not(['EMPTY'], 'Select one option').required('Field required'),
  categoryId: yup.string().not(['EMPTY'], 'Select one option').required('Field required'),
  locationId: yup.string().not(['EMPTY'], 'Select one option').required('Field required'),
  categoryName: yup.string().optional(),
  locationName: yup.string().optional(),
  image: yup.string().optional()
})

export const UpdateArticleSchema = yup.object().shape({
  title: yup.string().required('This field is required'),
  description: yup.string().required('This field is required'),
  type: yup.string().not(['EMPTY'], 'Select one option').required('Field required'),
  categoryId: yup.string().not(['EMPTY'], 'Select one option').required('Field required'),
  locationId: yup.string().not(['EMPTY'], 'Select one option').required('Field required'),
  categoryName: yup.string().optional(),
  locationName: yup.string().optional(),
  image: yup.string().optional()
}) as any

export interface ArticleDefaultValues extends CreateArticleInput {}

export interface ArticleUpdateDefaultValues extends UpdateArticleInput {}

export const ArticleFormDefaultValues: ArticleDefaultValues = {
  categoryId: 'EMPTY',
  categoryName: '',
  description: '',
  locationId: 'EMPTY',
  locationName: '',
  title: '',
  image: '',
  type: ArticlesType.Default
}

export const ArticleFormUpdateDefaultValues = (id: string, data: UpdateArticleData): ArticleUpdateDefaultValues => ({
  _id: id,
  data
})

export type ArticlesFieldValues = Record<keyof ArticleDefaultValues, any>
