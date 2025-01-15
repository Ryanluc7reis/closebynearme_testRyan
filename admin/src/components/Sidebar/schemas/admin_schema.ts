import * as yup from 'yup'
import { UpdateAdminData, CreateAdminInput, Roles, Status, UpdateAdminInput } from '@graphql'
import { FormProps, SideFormValues } from '@components/Sidebar/interfaces'

export const CreateAdminSchema = yup.object().shape({
  fullName: yup.string().required('Field required'),

  avatar: yup.string().optional(),
  email: yup.string().email('Correo inválido').required('Field required'),
  password: yup.string().min(8, 'Min 8 digits').max(16),
  confirmPassword: yup
    .string()
    .required('Field required')
    .min(8, 'Password min 8 digits')
    .oneOf([yup.ref('password')], 'Password missmatch'),
  status: yup.string().not(['EMPTY'], 'Please select one').required('Field required'),
  permissions: yup
    .array()
    .min(1, 'Select one or more')
    .of(yup.string().required('Select one or more'))
    .required('Field required')
})

export const UpdateAdminSchema = yup.object().shape({
  fullName: yup.string().required('Field required'),

  avatar: yup.string().optional(),
  email: yup.string().email('Invalid email').required('Field required'),
  password: yup.string().optional().min(8, 'Min 8 digits').max(16),
  confirmPassword: yup
    .string()
    .optional()
    .min(8, 'Min 8 digits')
    .oneOf([yup.ref('password')], 'Password missmatch'),
  status: yup.string().not(['EMPTY'], 'Field required').required('Field required'),
  permissions: yup
    .array()
    .min(1, 'Select one or more')
    .of(yup.string().required('Select one or more'))
    .required('Select one or more')
})

export interface CreateAdminDefaultValues extends CreateAdminInput {
  confirmPassword: string
}

export interface UpdateAdminDefaultValues extends UpdateAdminInput {
  confirmPassword: string
}

export const CreateAdminFormDefaultValues: CreateAdminDefaultValues = {
  fullName: '',
  avatar: '',
  email: '',
  status: Status.Active,
  password: '',
  confirmPassword: '',
  permissions: [],
  profile: [Roles.Admin]
}

export const UpdateAdminFormDefaultValues = (id: string, data: UpdateAdminData): UpdateAdminDefaultValues => ({
  _id: id,
  data,
  confirmPassword: ''
})

export function AdminSidebarValues({
  defaultOptions,
  editMode
}: FormProps): SideFormValues<CreateAdminDefaultValues>[] {
  return [
    {
      id: 'parent_group_1',
      values: [
        {
          id: 'input-full-name-id-01',
          label: 'Name',
          placeholder: 'John Doe',
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
          id: 'input-email-id-01',
          label: 'Email',
          placeholder: 'john@doe.com',
          name: 'email',
          autoComplete: 'new-email',
          type: 'text',
          fullWidth: true,
          required: true,
          inputType: 'textInput'
        }
      ]
    },
    {
      id: 'parent_group_3',
      values: [
        {
          id: 'input-password-id-01',
          name: 'password',
          label: 'Password',
          placeholder: '******',
          inputType: 'passwordInput',
          required: !editMode,
          autoComplete: 'new-password',
          type: 'password'
        },
        {
          id: 'input-password-id-02',
          name: 'confirmPassword',
          label: 'Confirm Password',
          placeholder: '******',
          inputType: 'passwordInput',
          required: !editMode,
          autoComplete: 'new-password',
          type: 'password'
        }
      ]
    },
    {
      id: 'parent_group_4',
      values: [
        {
          id: 'select-input-id-01',
          name: 'permissions',
          label: 'Permissions',
          options: defaultOptions['permissionsOptions'],
          type: 'text',
          required: true,
          fullWidth: true,
          inputType: 'selectMultipleInput'
        }
      ]
    }
  ]
}
