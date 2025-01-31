import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { TextField, Button } from '@mui/material'
import NavbarHeader from '@core/components/navbar'

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
font-weight: 600,
  text-align: center;
  color: black;
  margin-bottom: 20px;
  margin-left: 7px;
`

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  text-align: center;
`

const LoginComponent = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async () => {
    setError('')

    const query = {
      query: `
        mutation loginSeller($input: LoginInput!) {
          loginSeller(input: $input) {
            token
          }
        }
      `,
      variables: {
        input: { email, password }
      }
    }

    try {
      const response = await axios.post(`https://api.closebynearme.com/auth/login-seller`, query, {
        headers: { 'Content-Type': 'application/json' }
      })
      if (response.status === 200 && response.data.data.loginSeller) router.push('/dashboard-seller')
      console.log('Login Successful:', response.data)
    } catch (err) {
      setError('Invalid email or password')
    }
  }

  return (
    <>
      <NavbarHeader isMobile={false} type='ProductHeader' />
      <Container>
        <FormBox>
          <Title>Sign in with your account Seller</Title>
          <TextField
            fullWidth
            label='Email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': { borderColor: '#0BC9B4' }
              }
            }}
          />
          <TextField
            fullWidth
            label='Password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': { borderColor: '#0BC9B4' }
              }
            }}
          />
          {error && <ErrorText>{error}</ErrorText>}
          <Button
            variant='contained'
            fullWidth
            onClick={handleSubmit}
            style={{ backgroundColor: '#0BC9B4', color: '#fff' }}
          >
            Login
          </Button>
        </FormBox>
      </Container>
    </>
  )
}

export default LoginComponent
