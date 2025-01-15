import * as yup from 'yup'

export const AddressSchema = yup.object().shape({
  line1: yup.string().optional(),
  line2: yup.string().optional(),
  fullAddress: yup.string().optional(),
  cityName: yup.string().optional(),
  postalCode: yup.string().optional()
})
