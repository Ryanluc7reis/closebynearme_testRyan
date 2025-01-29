import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Modal, ScrollView, StyleSheet } from 'react-native-web'
import axios from 'axios'

export const ListSellersComponent = () => {
  const [selectedSeller, setSelectedSeller] = useState(null)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isModalDeleteVisible, setIsModalDeleteVisible] = useState(false)
  const [sellersData, setSellersData] = useState([])
  const URI = process.env.NEXT_PUBLIC_GRAPHQL_URL

  useEffect(() => {
    const getSellers = async () => {
      try {
        const response = await axios.post(`${URI}`, {
          query: `
           query {
              findSellers{
                _id
                companyName
                email
                phone
                contactPersonName
                serviceArea
                physicalLocation
                rentalsAdvertises
                rentalsOffers
                password
                isApproved
                role
                createdAt
              }
            }
          `
        })
        console.log(response)
        setSellersData(response.data.data.findSellers)
      } catch (error) {
        console.error('Error fetching seller:', error)
      }
    }

    getSellers()
  }, [])

  const handleDeleteSeller = (_id) => {
    const query = {
      query: `
      mutation DeleteSeller($input: UpdateSellerInput!) {
        deleteSeller(input: $input)
        }
    `,
      variables: {
        input: _id
      }
    }
    try {
      const response = axios.post(`${URI}`, query, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(response)
      if (response.status === 200 && response.data.data.deleteSeller === 'Seller deleted successfully') {
        alert('Seller deleted successfully')
        getSellers()
        setIsModalDeleteVisible(false)
      }
    } catch (error) {
      console.error('Error to delete seller:', error)
      alert('Error to delete seller  ')
    }
  }

  const handleApprovedSeller = (_id) => {
    const query = {
      query: `
          mutation UpdateSeller($input: UpdateSellerInput!) {
            updateSeller(input: $input)
          }
    `,
      variables: {
        input: _id
      }
    }
    try {
      const response = axios.post(`${URI}`, query, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        console.log(response)
      if (response.status === 200 && response.data.data.updateSeller === 'Seller updated successfully') {
        alert('Seller approved successfully')
        getSellers()
      }
    } catch (error) {
      console.error('Error to update seller:', error)
      alert('Error to approved seller  ')
    }
  }
  const openDeleteModal = () => {
    setIsModalDeleteVisible(true)
  }
  const closeDeleteModal = () => {
    setIsModalDeleteVisible(false)
  }

  const openSellersDetails = (seller) => {
    setSelectedSeller(seller)
    setIsModalVisible(true)
  }

  const closeModal = () => {
    setIsModalVisible(false)
    setSelectedSeller(null)
  }

  const renderSellersDetails = (seller) => {
    return Object.entries(seller).map(([key, value], index) => (
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
      <Text style={styles.title}>Sellers Registered</Text>

      {sellersData.map((seller, index) => (
        <>
          <TouchableOpacity key={index} style={styles.userContainer} onPress={() => openSellersDetails(seller)}>
            <View style={styles.userDataFlex}>
              <Text style={styles.userTitleData}>Contact Person Name</Text>
              <Text style={styles.userTextData}>{seller.contactPersonName}</Text>
            </View>
            <View style={styles.userDataFlex}>
              <Text style={styles.userTitleData}>E-mail</Text>
              <Text style={styles.userTextData}>{seller.email}</Text>
            </View>
            <View style={styles.userDataFlex}>
              <Text style={styles.userTitleData}>Company Name</Text>
              <Text style={styles.userTextData}>{seller.companyName}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleApprovedSeller(seller._id)} style={styles.approvedButton}>
            <Text>Approved</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={openDeleteModal} style={styles.deleteButton}>
            <Text>Delete</Text>
          </TouchableOpacity>

          <Modal visible={isModalDeleteVisible} animationType='slide' onRequestClose={closeDeleteModal}>
            <View style={styles.modalContainer}>
              <Text>Are you sure you want to delete this seller ?</Text>
              <TouchableOpacity onPress={handleDeleteSeller(seller._id)} style={styles.deleteButton}>
                <Text>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={closeDeleteModal}>
                <Text>Cancel</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </>
      ))}

      <Modal visible={isModalVisible} animationType='slide' onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          {selectedSeller && (
            <ScrollView style={styles.detailsContainer}>{renderSellersDetails(selectedSeller)}</ScrollView>
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
    borderRadius: 8,
    flexDirection: 'row',
    gap: 10
  },
  userTitleData: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  userTextData: {
    fontSize: 16,
    color: 'gray'
  },
  userDataFlex: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 7
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
  approvedButton: {
    padding: 8,
    borderRadius: 7,
    backgroundColor: '#7da5fa',
    color: '#2464ee'
  },
  deleteButton: {
    padding: 8,
    borderRadius: 7,
    backgroundColor: '#f74e4e',
    color: '#f30101'
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
