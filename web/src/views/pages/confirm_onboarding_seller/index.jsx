import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { TextField, Button } from '@mui/material'

//import { useRouter } from 'next/router';
import NavbarHeader from '@core/components/navbar'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

const BoxContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  width: 50%;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 7px;
`

const TitleText = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`

const SuccessText = styled.p`
  color: green;
  font-size: 14px;
  margin-bottom: 10px;
`

export const ConfirmOnBoardingSellerComponent = () => {
  const [formData, setFormData] = useState({})
  const [password, setPassword] = useState('')
  const [confirmedPassword, setConfirmedPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  //const router = useRouter();
  const URI = process.env.NEXT_PUBLIC_GRAPHQL_URL

  useEffect(() => {
    const sellerData = localStorage.getItem('sellerData')
    if (sellerData) {
      setFormData(JSON.parse(sellerData))
    }
  }, [])

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
    validatePasswords(event.target.value, confirmedPassword)
  }

  const handleConfirmedPasswordChange = (event) => {
    setConfirmedPassword(event.target.value)
    validatePasswords(password, event.target.value)
  }

  const validatePasswords = (password, confirmedPassword) => {
    if (password !== confirmedPassword) {
      setErrorMessage('Passwords do not match.')
    } else {
      setErrorMessage('')
    }
  }

  const handleSubmit = async () => {
    if (password !== confirmedPassword) {
      setErrorMessage('Passwords do not match.')

      return
    }

    const updatedFormData = {
      ...formData,
      password,
      role: 'CLIENT',
      createdAt: new Date().toISOString()
    }

    const query = {
      query: `
        mutation CreateSeller($input: CreateSellerInput!) {
          createSeller(input: $input)
        }
      `,
      variables: {
        input: updatedFormData
      }
    }

    try {
      const response = await axios.post(`${URI}`, query, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (response.status && response.data.data.createSeller === 'Seller created successfully') {
        setIsFormSubmitted(true)
        alert('Success: Your form has been submitted for approval.')
      }
    } catch (error) {
      console.error('Error to create Seller:', error)
      alert('Error: Failed to create seller. Please try again.')
    }
  }

  return (
    <Container>
      <NavbarHeader isMobile={false} type='ProductHeader' />
      <BoxContainer>
        <TitleText>Seller Application</TitleText>

        <TextField
          fullWidth
          onChange={handlePasswordChange}
          placeholder='Enter your password'
          type='password'
          value={password}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                border: 'none',
                borderBottom: '2px solid #bebaba'
              },
              '&.Mui-focused fieldset': {
                borderBottom: '2px solid #0BC9B4'
              }
            }
          }}
        />

        <TextField
          fullWidth
          onChange={handleConfirmedPasswordChange}
          placeholder='Confirm your password'
          type='password'
          value={confirmedPassword}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                border: 'none',
                borderBottom: '2px solid #bebaba'
              },
              '&.Mui-focused fieldset': {
                borderBottom: '2px solid #0BC9B4'
              }
            }
          }}
        />

        {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
        {isFormSubmitted && <SuccessText>Your form has been submitted for approval.</SuccessText>}

        <Button
          variant='contained'
          onClick={handleSubmit}
          disabled={!!errorMessage || password === '' || confirmedPassword === ''}
          style={{ backgroundColor: '#0BC9B4', color: '#fff' }}
        >
          Submit
        </Button>
      </BoxContainer>
    </Container>
  )
}
