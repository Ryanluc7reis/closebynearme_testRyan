import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { BoxQuestion } from './components/BoxQuestion'
import { dataSteps } from './components/dataQuestions'
import NavbarHeader from '@core/components/navbar'
import { useRouter } from 'next/router'

export const OnBoardingSellerComponent = () => {
  const [currentSellerData, setCurrentSellerData] = useState({})
  const router = useRouter()

  const handleAnswerChange = (updatedAnswers) => {
    setCurrentSellerData((prevFormData) => ({
      ...prevFormData,
      ...updatedAnswers
    }))
  }

  useEffect(() => {
    localStorage.setItem('sellerData', JSON.stringify(currentSellerData))
  }, [currentSellerData])

  return (
    <Container>
      <NavbarHeader isMobile={false} type={'ProductHeader'} />
      {dataSteps && <BoxQuestion questions={dataSteps} onAnswerChange={handleAnswerChange} />}
      <SubmitButtonContainer>
        <SubmitButton onClick={() => router.push('confirm_onboarding_seller')}>Submit</SubmitButton>
      </SubmitButtonContainer>
    </Container>
  )
}

const Container = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const SubmitButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

const SubmitButton = styled.button`
  background-color: #0bc9b4;
  padding: 15px;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  width: 20%;
  text-align: center;

  &:hover {
    background-color: #0aa89d;
  }
`

export default OnBoardingSellerComponent
