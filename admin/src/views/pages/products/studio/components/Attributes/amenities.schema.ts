import * as yup from 'yup'
import { UpdateAmenitiesInput, UpdateAmenitiesData, CreateAmenitiesInput } from '@graphql'

const shape = {
  name: yup.string().required('This field is required'),
  description: yup.string().required('This field is required'),
  icon: yup.string().required('This field is required')
}

export const CreateAmenitiesSchema = yup.object().shape(shape)

export const UpdateAmenitiesSchema = yup.object().shape(shape) as any

export interface CreateAmenitiesDefaultValues extends CreateAmenitiesInput {}

export interface UpdateAmenitiesDefaultValues extends UpdateAmenitiesInput {}

export const CreateAmenitiesFormDefaultValues: CreateAmenitiesDefaultValues = {
  name: '',
  description: '',
  icon: ''
}

export const UpdateAmenitiesFormDefaultValues = (
  id: string,
  data: UpdateAmenitiesData
): UpdateAmenitiesDefaultValues => ({
  _id: id,
  data
})
