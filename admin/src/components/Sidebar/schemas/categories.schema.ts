import * as yup from 'yup'
import { UpdateCategoryData, CreateCategoryInput, UpdateCategoryInput } from '@graphql'
import { FormProps, SideFormValues } from '@components/Sidebar/interfaces'

const shape = {
  name: yup.string().required('This field is required'),
  insurancePlan: yup.string().optional(),
  notification: yup.string().optional(),
  safety: yup.string().optional(),
  spaceRequirements: yup.string().optional(),
  supervision: yup.string().optional()
}

export const CreateCategorySchema = yup.object().shape(shape)

export const UpdateCategorySchema = yup.object().shape(shape)

export interface CreateCategoryDefaultValues extends CreateCategoryInput {}

export interface UpdateCategoryDefaultValues extends UpdateCategoryInput {}

export const CreateCategoryFormDefaultValues: CreateCategoryDefaultValues = {
  name: '',
  insurancePlan: '',
  notification: '',
  safety: '',
  spaceRequirements: '',
  supervision: ''
}

export const UpdateCategoryFormDefaultValues = (id: string, data: UpdateCategoryData): UpdateCategoryDefaultValues => ({
  _id: id,
  data
})

export function CategorySidebarValues({}: FormProps): SideFormValues<CreateCategoryDefaultValues>[] {
  return [
    {
      id: 'parent_group_1',
      values: [
        {
          id: 'input-name-id-01',
          label: 'Name',
          placeholder: 'Bounce house rental',
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
          id: 'input-name-id-02',
          label: 'Space requirements',
          placeholder: 'Text example',
          name: 'spaceRequirements',
          type: 'text',
          fullWidth: true,
          multiline: true,
          rows: 4,
          inputType: 'textInput'
        }
      ]
    },
    {
      id: 'parent_group_3',
      values: [
        {
          id: 'input-name-id-03',
          label: 'Supervision',
          placeholder: 'Text example',
          name: 'supervision',
          type: 'text',
          fullWidth: true,
          multiline: true,
          rows: 4,
          inputType: 'textInput'
        }
      ]
    },
    {
      id: 'parent_group_4',
      values: [
        {
          id: 'input-name-id-04',
          label: 'Safety',
          placeholder: 'Text example',
          name: 'safety',
          type: 'text',
          fullWidth: true,
          multiline: true,
          rows: 4,
          inputType: 'textInput'
        }
      ]
    },
    {
      id: 'parent_group_5',
      values: [
        {
          id: 'input-textfield-id-05',
          label: 'Cancellation/Returns/Refunds',
          placeholder: 'Text example',
          name: 'insurancePlan',
          type: 'text',
          multiline: true,
          rows: 4,
          fullWidth: true,
          inputType: 'textInput'
        }
      ]
    },
    {
      id: 'parent_group_6',
      values: [
        {
          id: 'input-textfield-id-06',
          label: 'Additional information',
          placeholder: 'Text example',
          name: 'notification',
          type: 'text',
          multiline: true,
          rows: 4,
          fullWidth: true,
          inputType: 'textInput'
        }
      ]
    }
  ]
}
