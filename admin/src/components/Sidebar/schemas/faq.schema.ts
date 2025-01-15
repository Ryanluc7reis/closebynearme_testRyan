import * as yup from 'yup'
import { UpdateFaqData, CreateFaqInput, UpdateFaqInput } from '@graphql'
import { FormProps, SideFormValues } from '@components/Sidebar/interfaces'

export const CreateFaqSchema = yup.object().shape({
  answer: yup.string().required('This field is required'),
  question: yup.string().required('This field is required'),
  locationId: yup.string().not(['EMPTY'], 'Select one option').required('Field required'),
  categoryId: yup.string().not(['EMPTY'], 'Select one option').required('Field required')
})

export const UpdateFaqSchema = yup.object().shape({
  answer: yup.string().required('This field is required'),
  question: yup.string().required('This field is required'),
  locationId: yup.string().not(['EMPTY'], 'Select one option').required('Field required'),
  categoryId: yup.string().not(['EMPTY'], 'Select one option').required('Field required')
}) as any

export interface CreateFaqDefaultValues extends CreateFaqInput {}

export interface UpdateFaqDefaultValues extends UpdateFaqInput {}

export const CreateFaqFormDefaultValues: CreateFaqDefaultValues = {
  answer: '',
  question: '',
  categoryId: 'EMPTY',
  categoryName: '',
  locationId: 'EMPTY',
  locationName: ''
}

export const UpdateFaqFormDefaultValues = (id: string, data: UpdateFaqData): UpdateFaqDefaultValues => ({
  _id: id,
  data
})

export function FaqSidebarValues(props: FormProps): SideFormValues<CreateFaqDefaultValues>[] {
  return [
    {
      id: 'parent_group_1',
      values: [
        {
          id: 'input-question-id-01',
          label: 'Question',
          placeholder: 'Question',
          name: 'question',
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
          id: 'input-answer-id-01',
          label: 'Answer',
          placeholder: 'Answer',
          name: 'answer',
          type: 'text',
          fullWidth: true,
          required: true,
          multiline: true,
          rows: 0,
          minRows: 5,
          maxRows: 20,
          inputType: 'textEditor'
        }
      ]
    },
    {
      id: 'parent_group_3',
      values: [
        {
          id: 'select-category-id-01',
          label: 'Category',
          name: 'categoryId',
          type: 'text',
          fullWidth: true,
          required: true,
          inputType: 'selectInput',
          setValue: (value: string) => props.setValue('categoryName', value),
          options: props.filterOptions['categoriesOptions']
        }
      ]
    },
    {
      id: 'parent_group_4',
      values: [
        {
          id: 'select-location-id-01',
          label: 'Location',
          name: 'locationId',
          type: 'text',
          fullWidth: true,
          required: true,
          setValue: (value: string) => props.setValue('locationName', value),
          inputType: 'selectInput',
          options: props.filterOptions['locationsOptions']
        }
      ]
    }
  ]
}
