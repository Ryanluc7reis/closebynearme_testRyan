
import React from 'react'
import Button from '@mui/material/Button'
import { useForm, Controller } from 'react-hook-form'
import { useAuth } from 'src/hooks/useAuth'
import styled from 'styled-components'
import NavbarHeader from '@core/components/navbar'
import TextField from '@mui/material/TextField'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: white;
`

const FormBox = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const Title = styled.h2`
  font-size: 19px;
  font-weight: 600;
  text-align: center;
  color: black;
  margin-bottom: 20px;
`

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  text-align: center;
`

const defaultValues = {
  email: '',
  password: ''
}

export interface LoginValues {
  email: string
  password: string
}

const LoginComponent = () => {


  const auth = useAuth()
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onBlur'
  })

  const onSubmit = (data: LoginValues) => {
    const { email, password } = data

    auth.loginSeller({ email, password, rememberMe: true }, () => {
      setError('email', {
        type: 'manual',
        message: 'Email or Password is invalid'
      })
    })
  }

  return (
    <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
      <NavbarHeader isMobile={false} type='ProductHeader' />
      <Container>
        <FormBox>
          <Title>Sign in with your account Seller</Title>
          <Controller
            name='email'
            control={control}
            rules={{ required: 'Email is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label='Email'
                type='email'
                placeholder='john@doe.com'
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />
          <Controller
            name='password'
            control={control}
            rules={{ required: 'Password is required' }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label='Password'
                type='password'
                placeholder='********'
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            )}
          />
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
          {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
          <Button variant='contained' fullWidth type='submit' style={{ backgroundColor: '#0BC9B4', color: '#fff' }}>
            Login
          </Button>
        </FormBox>
      </Container>
    </form>
  )
}

export default LoginComponent
