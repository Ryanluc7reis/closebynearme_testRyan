import React, { useState } from 'react'
import axios from 'axios'
import { Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Modal, Pressable, View } from 'react-native'
import { BoxQuestion } from './components/BoxQuestion'
import { dataSteps } from './components/dataQuestions'

export const OnBoardingSellerComponent = () => {
  const [formData, setFormData] = useState({})
  const [password, setPassword] = useState('')
  const [modalVisible, setModalVisible] = useState(false)

  const URI = process.env.NEXT_PUBLIC_GRAPHQL_URL

  const handleAnswerChange = (updatedAnswers) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      ...updatedAnswers
    }))
  }

  const handleSubmit = () => {
    setModalVisible(true)
  }

  const handleConfirmPassword = async () => {
    setModalVisible(false)

    const updatedFormData = {
      ...formData,
      password,
      role: 'CLIENT',
      createdAt: new Date().toISOString()
    }
    console.log(updatedFormData)
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

      console.log(response.data.data.createSeller)
      alert('Seller created successfully')
    } catch (error) {
      console.error('Error to create Seller:', error)
      alert('Error to create Seller')
    }
  }
  console.log(formData)

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titleText}>Seller Questionary</Text>
      {dataSteps && (
        <BoxQuestion questions={dataSteps} onAnswerChange={handleAnswerChange} showModal={handleConfirmPassword} />
      )}
<View style={styles.submitButtonContainer}>
<TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>

</View>
    
      <Modal visible={modalVisible} transparent animationType='fade' onRequestClose={() => setModalVisible(false)}>
        <Pressable style={styles.modalContainer} onPress={() => setModalVisible(false)}>
          <Pressable onPress={(e) => e.stopPropagation()} style={styles.modalContent}>
            <Text style={styles.modalTitle}>Choose a Password</Text>
            <TextInput
              style={styles.passwordInput}
              placeholder='Enter your password'
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmPassword}>
              <Text style={styles.confirmButtonText}>Confirm</Text>
            </TouchableOpacity>
          </Pressable>
        </Pressable>
      </Modal>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
    flexDirection: 'column',
  },
  titleText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  submitButton: {
    backgroundColor: '#0BC9B4',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    width: '70%'
  },
  submitButtonContainer : {
    width: '100%',
    alignItems: 'center'
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '70%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20
  },
  passwordInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    marginBottom: 20
  },
  confirmButton: {
    backgroundColor: '#0BC9B4',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center'
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
})
