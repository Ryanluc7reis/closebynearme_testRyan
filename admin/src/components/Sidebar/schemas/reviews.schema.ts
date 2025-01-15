import * as yup from 'yup'
import { UpdateReviewData, CreateReviewInput, UpdateReviewInput } from '@graphql'
import { FormProps, SideFormValues } from '@components/Sidebar/interfaces'

export const CreateReviewSchema = yup.object().shape({
  fullName: yup.string().required('This field is required'),
  description: yup.string().optional()
})

export const UpdateReviewSchema = yup.object().shape({
  fullName: yup.string().required('This field is required'),
  description: yup.string().optional()
})

export interface CreateReviewDefaultValues extends CreateReviewInput {}

export interface UpdateReviewDefaultValues extends UpdateReviewInput {}

export const CreateReviewFormDefaultValues: CreateReviewDefaultValues = {
  fullName: '',
  amount: 0,
  companyId: 'EMPTY',
  description: '',
  locationId: 'EMPTY',
  locationName: ''
}

export const UpdateReviewFormDefaultValues = (id: string, data: UpdateReviewData): UpdateReviewDefaultValues => ({
  _id: id,
  data
})

export function ReviewSidebarValues({}: FormProps): SideFormValues<CreateReviewDefaultValues>[] {
  return [
    {
      id: 'parent_group_1',
      values: [
        {
          id: 'input-review-name-id-01',
          label: 'Full name',
          placeholder: 'Sofia Vergara',
          name: 'fullName',
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
          id: 'input-description-name-id-01',
          label: 'Description',
          placeholder: '',
          name: 'description',
          type: 'text',
          multiline: true,
          rows: 10,
          fullWidth: true,
          required: false,
          inputType: 'textInput'
        }
      ]
    },
    {
      id: 'parent_group_3',
      values: [
        {
          id: 'input-ranking-id-01',
          label: 'Ranking',
          name: 'amount',
          type: 'text',
          inputType: 'ranking'
        }
      ]
    }
  ]
}
