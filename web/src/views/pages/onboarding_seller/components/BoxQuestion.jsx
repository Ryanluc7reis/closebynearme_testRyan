import React, { useState } from 'react'
import { TextField } from '@mui/material'
import styled from 'styled-components'

//import { useRouter } from 'next/router';
import { CheckBoxComponent } from '../../../../components/CheckBoxComponent'
import { fieldMapping } from './dataQuestions'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

const TitleContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 15px solid #0bc9b4;
  border-radius: 7px;
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  gap: 7px;
  @media(max-width: 768px){
    width: 87%;
   }
`

const TitleText = styled.h2`
  color: #000;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`

const SubTitleContainer = styled.div`
  display: flex;
  gap: 7px;
`

const SubTitleText = styled.p`
  color: #9fb1af;
  text-align: center;
`

const QuestionBox = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  width: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
   @media(max-width: 768px){
    width: 87%;
   }
`

const QuestionText = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
`

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`

const OptionText = styled.p`
  margin-top: 4px;
  font-size: 16px;
  font-weight: 500;
`

export const BoxQuestion = ({ questions, onAnswerChange }) => {
  const [answers, setAnswers] = useState({})
  const [textInputValues, setTextInputValues] = useState({})
  const [focusedInput, setFocusedInput] = useState(null)

  //const router = useRouter();
  const urlLoginSeller = 'http://localhost:3000/login-seller'

  const handleTextChange = (index, value) => {
    const fieldKey = fieldMapping[index]
    const updatedAnswers = { ...answers, [fieldKey]: value }

    setAnswers(updatedAnswers)
    onAnswerChange(updatedAnswers)
  }

  const handleMultipleOptionsWithText = (index, option) => {
    const fieldKey = fieldMapping[index]
    const currentValues = answers[fieldKey] || []
    const updatedValues = currentValues.includes(option)
      ? currentValues.filter((item) => item !== option)
      : [...currentValues, option]

    const updatedAnswers = { ...answers, [fieldKey]: updatedValues }

    setAnswers(updatedAnswers)
    onAnswerChange(updatedAnswers)
  }

  const handleTextInMultipleOptions = (index, value) => {
    const fieldKey = fieldMapping[index]
    const updatedAnswers = {
      ...answers,
      [fieldKey]: [...(answers[fieldKey] || []).filter((opt) => opt !== value), value]
    }

    setTextInputValues((prev) => ({ ...prev, [fieldKey]: value }))
    setAnswers(updatedAnswers)
    onAnswerChange(updatedAnswers)
  }

  const handleSingleOption = (index, option) => {
    const fieldKey = fieldMapping[index]
    const updatedAnswers = { ...answers, [fieldKey]: [option] }

    setAnswers(updatedAnswers)
    onAnswerChange(updatedAnswers)
  }

  const handleBlur = (index) => {
    const fieldKey = fieldMapping[index]
    const value = textInputValues[fieldKey] || ''
    if (value.trim() !== '') {
      handleTextInMultipleOptions(index, value)
    }
    setFocusedInput(null)
  }

  return (
    <Container>
      <TitleContainer>
        <TitleText>Seller Application</TitleText>
        <SubTitleContainer>
          <SubTitleText>Are you already a seller?</SubTitleText>
          <a href={urlLoginSeller} style={{ color: '#0BC9B4', textDecoration: 'none' }}>
            Login
          </a>
        </SubTitleContainer>
      </TitleContainer>
      {questions.map((question, index) => (
        <QuestionBox key={index}>
          <QuestionText>{question.question}</QuestionText>

          {question.textArea && !question.option && (
            <TextField
              fullWidth
              placeholder='Enter here...'
              value={answers[fieldMapping[index]] || ''}
              onChange={(e) => handleTextChange(index, e.target.value)}
              onFocus={() => setFocusedInput(index)}
              onBlur={() => handleBlur(index)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    border: 'none',
                    borderBottom: `2px solid ${focusedInput === index ? '#0BC9B4' : '#bebaba'}`
                  },
                  '&.Mui-focused fieldset': {
                    borderBottom: '2px solid #0BC9B4'
                  }
                }
              }}
            />
          )}

          {question.textArea && question.option && (
            <div>
              {question.option.map((opt, optIndex) => (
                <CheckBoxComponent
                  key={optIndex}
                  option={opt}
                  isChecked={answers[fieldMapping[index]]?.includes(opt) || false}
                  onSelect={() => handleMultipleOptionsWithText(index, opt)}
                  type='checkbox'
                />
              ))}
              <OptionContainer>
                <OptionText>Other</OptionText>
                <TextField
                  fullWidth
                  placeholder='Specify here...'
                  value={textInputValues[fieldMapping[index]] || ''}
                  onChange={(e) => setTextInputValues((prev) => ({ ...prev, [fieldMapping[index]]: e.target.value }))}
                  onBlur={() => handleBlur(index)}
                  onFocus={() => setFocusedInput(index)}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        border: 'none',
                        borderBottom: `2px solid ${focusedInput === index ? '#0BC9B4' : '#bebaba'}`
                      },
                      '&.Mui-focused fieldset': {
                        borderBottom: '2px solid #0BC9B4'
                      }
                    }
                  }}
                />
              </OptionContainer>
            </div>
          )}

          {!question.textArea && question.option && (
            <div>
              {question.option.map((opt, optIndex) => (
                <CheckBoxComponent
                  key={optIndex}
                  option={opt}
                  isChecked={answers[fieldMapping[index]]?.includes(opt) || false}
                  onSelect={() => handleSingleOption(index, opt)}
                  type='radio'
                />
              ))}
            </div>
          )}
        </QuestionBox>
      ))}
    </Container>
  )
}
