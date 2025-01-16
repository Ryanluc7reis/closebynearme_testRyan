import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export const CheckBoxComponent = ({ option, isChecked, onSelect }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.checkbox} onPress={onSelect}>
        {isChecked && <View style={styles.checked} />}
      </TouchableOpacity>
      <Text style={styles.label}>{option}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#000',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  checked: {
    width: 16,
    height: 16,
    borderRadius: 15,
    backgroundColor: '#0BC9B4'
  },

  label: {
    fontSize: 16
  }
})
