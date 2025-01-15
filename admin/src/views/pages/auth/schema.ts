import * as Yup from 'yup'

export interface LoginValues {
  email: string
  password: string
}

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Email not valid').required('Please enter this field'),
  password: Yup.string().min(8, 'Min 8 digits').required('Please enter this field')
})

export interface ForgotPasswordValues {
  email: string
}

export const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Email not valid').required('Please enter this field')
})

export interface ChangePasswordValues {
  password: string
  confirmPassword: string
}

export const ChangePasswordSchema = Yup.object().shape({
  password: Yup.string().min(8, 'Min 8 digits').required('Password is required'),
  confirmPassword: Yup.string()
    .required('Please enter this field')
    .min(8, 'Min 8 digits')
    .oneOf([Yup.ref('password')], 'Password mismatch ')
})
