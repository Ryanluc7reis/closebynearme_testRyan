import * as yup from 'yup'
import { UpdateCompanyData, CreateCompanyInput, UpdateCompanyInput, MerchantPublishedStatus } from '@graphql'
import { FormProps, SideFormValues } from '@components/Sidebar/interfaces'
import { slugify } from '@core/utils/slugify'

export const CreateCompanySchema = yup.object().shape({
  name: yup.string().required('This field is required'),
  address: yup.string().required('This field is required'),
  googleMapsLink: yup.string().optional(),
  phoneNumber: yup.string().required('This field is required'),
  websiteUrl: yup.string().optional(),
  locationId: yup.string().not(['EMPTY'], 'Select one option').required('Field required'),
  categoriesId: yup
    .array()
    .min(1, 'Select one option')
    .of(yup.string().required('Field required'))
    .required('Field required')
})

export const UpdateCompanySchema = yup.object().shape({
  name: yup.string().required('This field is required'),
  address: yup.string().required('This field is required'),
  googleMapsLink: yup.string().optional(),
  phoneNumber: yup.string().required('This field is required'),
  websiteUrl: yup.string().optional(),
  locationId: yup.string().not(['EMPTY'], 'Select one option').required('Field required'),
  categoriesId: yup
    .array()
    .min(1, 'Select one option')
    .of(yup.string().required('Field required'))
    .required('Field required')
}) as any

export interface CreateCompanyDefaultValues extends CreateCompanyInput {}

export interface UpdateCompanyDefaultValues extends UpdateCompanyInput {}

export const CreateCompanyFormDefaultValues: CreateCompanyDefaultValues = {
  name: '',
  address: '',
  merchantListingStatus: MerchantPublishedStatus.NotListing,
  categoriesId: [],
  categories: [],
  googleMapsLink: '',
  locationId: 'EMPTY',
  locationName: '',
  locationSlug: '',
  phoneNumber: '',
  websiteUrl: ''
}

export const UpdateCompanyFormDefaultValues = (id: string, data: UpdateCompanyData): UpdateCompanyDefaultValues => ({
  _id: id,
  data
})

export function CompanySidebarValues(props: FormProps): SideFormValues<CreateCompanyDefaultValues>[] {
  return [
    {
      id: 'parent_group_1',
      values: [
        {
          id: 'input-name-id-01',
          label: 'Name',
          placeholder: 'Company name',
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
          id: 'input-address-id-01',
          label: 'Address',
          placeholder: 'Address',
          name: 'address',
          type: 'text',
          multiline: true,
          maxRows: 5,
          fullWidth: true,
          inputType: 'textInput',
          required: true
        }
      ]
    },
    {
      id: 'parent_group_3',
      values: [
        {
          id: 'input-phone-number-id-01',
          label: 'Phone Number',
          placeholder: '(555) 555-5555',
          name: 'phoneNumber',
          type: 'text',
          fullWidth: true,
          inputType: 'textInput',
          required: true
        }
      ]
    },
    {
      id: 'parent_group_4',
      values: [
        {
          id: 'input-location-id-01',
          label: 'Location',
          placeholder: '',
          name: 'locationId',
          type: 'text',
          fullWidth: true,
          inputType: 'selectInput',
          required: true,
          setValue: (value: string) => {
            props.setValue('locationName', value)

            props.setValue('locationSlug', slugify(value))
          },
          options: props.filterOptions['locationsOptions']
        }
      ]
    },
    {
      id: 'parent_group_5',
      values: [
        {
          id: 'input-website-url-id-01',
          label: 'Website URL',
          placeholder: 'https://...',
          name: 'websiteUrl',
          type: 'text',
          fullWidth: true,
          inputType: 'textInput',
          required: false
        }
      ]
    },
    {
      id: 'parent_group_6',
      values: [
        {
          id: 'input-google-maps-link-id-01',
          label: 'Google Maps Link',
          placeholder: 'https://...',
          name: 'googleMapsLink',
          type: 'text',
          fullWidth: true,
          inputType: 'textInput',
          required: false
        }
      ]
    },
    {
      id: 'parent_group_7',
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
    }
  ]
}
