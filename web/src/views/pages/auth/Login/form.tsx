import React from 'react'
import Box from '@mui/material/Box'
import Link from 'next/link'
import TextInput from '@components/Inputs/TextInput'
import TextInputPassword from '@components/Inputs/TextInputPassword'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAuth } from 'src/hooks/useAuth'
import { Typography } from '@mui/material'
import * as Yup from 'yup'

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Email not valid').required('Please enter this field'),
  password: Yup.string().min(8, 'Min 8 digits').required('Please enter this field')
})

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: `${theme.palette.primary.main} !important`
}))

const defaultValues = {
  email: '',
  password: ''
}

export interface LoginValues {
  email: string
  password: string
}

const LoginFormComponent = () => {
  const auth = useAuth()

  const { control, setError, handleSubmit } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(LoginSchema)
  })

  const onSubmit = (data: LoginValues) => {
    const { email, password } = data

    auth.loginSeller({ email, password, rememberMe: true }, (error) => {
      if (error) {
        console.error('Erro no login:', error) 
        setError('email', {
          type: 'manual',
          message: 'Email or Password is invalid'
        })
      } 
    })
  }

  return (
  
      <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ mb: 4 }}>
          <TextInput
            control={control}
            autoFocus
            fullWidth
            name='email'
            type='email'
            placeholder='john@doe.com'
            required
          />
        </Box>
        <Box sx={{ mb: 1.5 }}>
          <TextInputPassword control={control} fullWidth name='password' placeholder='********' required />
        </Box>
        <Box
          sx={{
            mt: 3,
            mb: 3,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div />
          <Typography component={LinkStyled} href='/auth/forgot-password'>
            Forgot Password?
          </Typography>
        </Box>
        <Button fullWidth type='submit' variant='contained' sx={{ mb: 4 }}>
          Login
        </Button>
      </form>
  )
}

export default LoginFormComponent
