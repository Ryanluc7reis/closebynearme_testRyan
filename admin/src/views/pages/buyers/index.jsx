import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Modal, ScrollView, StyleSheet } from 'react-native-web'
import axios from 'axios'

export const ListBuyersComponent = () => {
  const [selectedBuyer, setSelectedBuyer] = useState(null)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [buyersData, setBuyersData] = useState([])
  const URI = process.env.NEXT_PUBLIC_GRAPHQL_URL

  useEffect(() => {
    const getBuyers = async () => {
      try {
        const response = await axios.post(`${URI}`, {
          query: `
            query {
              findBuyers {
                _id
                birthday
                email
                fullName
                Additional_Details
                Areas_Of_Interest
                Delivery_Method
                Emotional_State
                Experience_Level
                Goals_And_Expectations
                Personality_Match
                Preferred_Psychic_Services
                Scheduling_Preferences
                Spiritual_Preferences
                Subscription_Preferences
              }
            }
          `
        })
        setBuyersData(response.data.data.findBuyers)
      } catch (error) {
        console.error('Error fetching buyers:', error)
      }
    }

    getBuyers()
  }, [])

  const openBuyersDetails = (buyer) => {
    setSelectedBuyer(buyer)
    setIsModalVisible(true)
  }

  const closeModal = () => {
    setIsModalVisible(false)
    setSelectedBuyer(null)
  }

  const renderBuyersDetails = (buyer) => {
    return Object.entries(buyer).map(([key, value], index) => (
      <View key={index} style={styles.detailItem}>
        <Text style={styles.detailTitle}>{key}:</Text>
        {Array.isArray(value) ? (
          value.map((item, itemIndex) => (
            <Text key={itemIndex} style={styles.detailText}>
              {item}
            </Text>
          ))
        ) : (
          <Text style={styles.detailText}>{value}</Text>
        )}
      </View>
    ))
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Buyers Registered</Text>

      {buyersData.map((buyer, index) => (
        <TouchableOpacity key={index} style={styles.userContainer} onPress={() => openBuyersDetails(buyer)}>
          <Text style={styles.userName}>{buyer.fullName}</Text>
          <Text style={styles.userEmail}>{buyer.email}</Text>
        </TouchableOpacity>
      ))}

      <Modal visible={isModalVisible} animationType='slide' onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          {selectedBuyer && (
            <ScrollView style={styles.detailsContainer}>{renderBuyersDetails(selectedBuyer)}</ScrollView>
          )}
          <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center'
  },
  userContainer: {
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  userEmail: {
    fontSize: 16,
    color: 'gray'
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white'
  },
  closeButton: {
    padding: 10,
    backgroundColor: '#FF6347',
    borderRadius: 5,
    marginBottom: 20
  },
  closeText: {
    color: 'white',
    textAlign: 'center'
  },
  detailsContainer: {
    flex: 1
  },
  detailItem: {
    marginBottom: 10
  },
  detailTitle: {
    fontSize: 18,
    fontWeight: '600'
  },
  detailText: {
    fontSize: 16,
    color: 'gray'
  }
})
