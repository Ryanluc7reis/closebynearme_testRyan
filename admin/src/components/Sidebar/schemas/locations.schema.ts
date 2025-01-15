import * as yup from 'yup'
import { UpdateLocationData, CreateLocationInput, UpdateLocationInput } from '@graphql'
import { FormProps, SideFormValues } from '@components/Sidebar/interfaces'

export const CreateLocationSchema = yup.object().shape({
  name: yup.string().required('This field is required'),
  categoriesId: yup
    .array()
    .min(1, 'Select one option')
    .of(yup.string().required('Field required'))
    .required('Field required')
})

export const UpdateLocationSchema = yup.object().shape({
  name: yup.string().required('This field is required'),
  categoriesId: yup
    .array()
    .min(1, 'Select one option')
    .of(yup.string().required('Field required'))
    .required('Field required')
})

export interface CreateLocationDefaultValues extends CreateLocationInput {}

export interface UpdateLocationDefaultValues extends UpdateLocationInput {}

export const CreateLocationFormDefaultValues: CreateLocationDefaultValues = {
  name: '',
  categories: [],
  categoriesId: [],
  image: ''
}

export const UpdateLocationFormDefaultValues = (id: string, data: UpdateLocationData): UpdateLocationDefaultValues => ({
  _id: id,
  data
})

export function LocationsSidebarValues(props: FormProps): SideFormValues<CreateLocationDefaultValues>[] {
  return [
    {
      id: 'parent_group_1',
      values: [
        {
          id: 'input-name-id-01',
          label: 'Name',
          placeholder: 'New York',
          name: 'name',
          type: 'text',
          autoFocus: true,
          fullWidth: true,
          required: true,
          inputType: 'textInput'
        }
      ]
    },
    {
      id: 'parent_group_2',
      values: [
        {
          id: 'select-multiple-categories-id-01',
          label: 'Categories',
          placeholder: '',
          name: 'categoriesId',
          type: 'text',
          inputType: 'selectMultipleInput',
          required: true,
          options: props.filterOptions['categoriesOptions']
        }
      ]
    },
    {
      id: 'parent_group_2',
      values: [
        {
          id: 'input-city-image-id-01',
          label: 'Image',
          name: 'image',
          type: 'text',
          mb: 4,
          fullWidth: true,
          required: true,
          inputType: 'image-upload'
        }
      ]
    }
  ]
}
