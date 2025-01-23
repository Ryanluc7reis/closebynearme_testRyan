import React, { useState } from 'react'
import axios from 'axios'
import { CheckBoxComponent } from '../../../components/CheckBoxComponent'
import { dataSteps } from './dataQuestions.js'
import { fieldMapping } from './dataQuestions.js'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'

export const MultiStepFormComponent = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [selections, setSelections] = useState({})
  const [customInput, setCustomInput] = useState('')
  const [formData, setFormData] = useState({})
  const [personalData, setPersonalData] = useState({
    fullName: '',
    email: '',
    birthday: ''
  })
  const [errorMessage, setErrorMessage] = useState('')
  const URI = process.env.NEXT_PUBLIC_GRAPHQL_URL

  const handleNext = () => {
    if (!personalData.fullName || !personalData.email ) {
      let emptyField = ''
      if (!personalData.fullName) emptyField = 'fullName'
      else if (!personalData.email) emptyField = 'email'

      setErrorMessage(`The field "${emptyField}" can't be empty.`)

      return
    }

    setErrorMessage('')

    if (currentStep < dataSteps.length - 1) {
      setCustomInput('')
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCustomInput('')
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSelect = (index) => {
    let selectedOption = dataSteps[currentStep][index].option

    setSelections((prev) => ({
      ...prev,
      [currentStep]: [selectedOption]
    }))
    setFormData((prev) => ({
      ...prev,
      [fieldMapping[currentStep]]: [selectedOption]
    }))
  }

  const handleSelectOverOptions = (index) => {
    let selectedOption = dataSteps[currentStep][index].option
    let currentField = fieldMapping[currentStep]
    let currentSelections = formData[currentField] || []

    if (currentSelections.includes(selectedOption)) {
      setSelections((prev) => ({
        ...prev,
        [currentStep]: prev[currentStep].filter((item) => item !== selectedOption)
      }))

      setFormData((prev) => ({
        ...prev,
        [currentField]: currentSelections.filter((item) => item !== selectedOption)
      }))
    } else {
      const maxSelections = currentStep === 1 ? 3 : Infinity
      if (currentSelections.length < maxSelections) {
        setSelections((prev) => ({
          ...prev,
          [currentStep]: [...(prev[currentStep] || []), selectedOption]
        }))

        setFormData((prev) => ({
          ...prev,
          [currentField]: [...currentSelections, selectedOption]
        }))
      }
    }
  }

  const handlePersonalDataInputChange = (field, value) => {
    setPersonalData((prevData) => ({
      ...prevData,
      [field]: value
    }))
  }

  const handleCustomInputChange = (text) => {
    setCustomInput(text)

    let currentField = fieldMapping[currentStep]
    setFormData((prev) => ({
      ...prev,
      [currentField]: [...(prev[currentField] || []).filter((v) => v !== customInput), text]
    }))
  }

  const handleSubmit = async () => {
    const updatedFormData = {
      ...formData,
      fullName: personalData.fullName || '',
      email: personalData.email || '',
      birthday: personalData.birthday || '',
      role: 'CLIENT',
      createdAt: new Date().toISOString()
    }

    const query = {
      query: `
        mutation createBuyer($createBuyerInput: CreateBuyerInput!) {
          createBuyer(createBuyerInput: $createBuyerInput) {
            message
            success
          }
        }
      `,
      variables: {
        createBuyerInput: updatedFormData
      }
    }

    try {
      const response = await axios.post(`${URI}`, query, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      console.log('Answer from API:', response.data.createBuyer)
    } catch (error) {
      console.error('Error to send data:', error)
    }
  }

  const selectedOptions = selections[currentStep] || []

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {dataSteps[currentStep].map((option, index) => (
        <View key={`${currentStep}-${index}`} style={styles.optionContainer}>
          <Text style={styles.textQuestion}>{option.question}</Text>

          {!option.textArea && !option.hasOverInput && (
            <>
              {currentStep === 1 || currentStep === 9 ? (
                <CheckBoxComponent
                  option={option.option}
                  isChecked={selectedOptions.includes(option.option)}
                  onSelect={() => handleSelectOverOptions(index)}
                />
              ) : (
                <CheckBoxComponent
                  option={option.option}
                  isChecked={selectedOptions.includes(option.option)}
                  onSelect={() => handleSelect(index)}
                />
              )}
            </>
          )}

          {option.hasCustomInput === true && (
            <View>
              <Text style={styles.textOption}>Other</Text>
              <TextInput
                style={styles.textInput}
                placeholder='Please specify here..'
                value={customInput}
                onChangeText={handleCustomInputChange}
              />
            </View>
          )}

          {option.textArea === true && (
            <View>
              <TextInput
                style={styles.textInput}
                placeholder='Please explain here..'
                value={customInput}
                onChangeText={handleCustomInputChange}
              />
            </View>
          )}

          {option.hasOverInput === true && (
            <View>
              <Text style={styles.label}>Full Name (Required)</Text>
              <Text style={styles.subLabel}>First Name, Last Name </Text>
              <TextInput
                style={styles.input}
                placeholder=' Jane Dempsey'
                placeholderTextColor='#575454'
                value={personalData.fullName}
                onChangeText={(text) => handlePersonalDataInputChange('fullName', text)}
              />
              <Text style={styles.label}>Email Address (Required)</Text>
              <Text style={styles.subLabel}>For session notifications and personalized updates</Text>
              <TextInput
                style={styles.input}
                placeholder='jana12@gmail.com'
                keyboardType='email-address'
                value={personalData.email}
                onChangeText={(text) => handlePersonalDataInputChange('email', text)}
              />
              <Text style={styles.label}>Date of Birth (Optional)</Text>
              <Text style={styles.subLabel}>Used for astrology or numerology insights</Text>
              <TextInput
                style={styles.input}
                placeholder='08/20/2003'
                value={personalData.birthday}
                onChangeText={(text) => handlePersonalDataInputChange('birthday', text)}
              />
            </View>
          )}
        </View>
      ))}

      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

      <View style={styles.buttonFlex}>
        <TouchableOpacity
          style={[styles.button, currentStep === 0 && styles.disabledButton]}
          onPress={handleBack}
          disabled={currentStep === 0}
        >
          <Text style={styles.textButton}>Back</Text>
        </TouchableOpacity>
        {currentStep === dataSteps.length - 1 ? (
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.textButton}>Submit</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.textButton}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    minHeight: '100%'
  },
  textOption: {
    fontSize: 17,
    marginTop: 8
  },
  textQuestion: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 15
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20
  },
  buttonFlex: {
    flexDirection: 'row',
    marginTop: 10,
    width: '100%',
    justifyContent: 'space-between'
  },
  button: {
    padding: 10,
    backgroundColor: '#0BC9B4',
    borderRadius: 5
  },
  textButton: {
    color: '#fff'
  },
  disabledButton: {
    backgroundColor: 'gray'
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginTop: 8,
    marginBottom: 10
  },
  label: {
    fontSize: 18
  },
  subLabel: {
    fontSize: 12,
    color: 'rgb(170, 162, 162)'
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center'
  }
})
