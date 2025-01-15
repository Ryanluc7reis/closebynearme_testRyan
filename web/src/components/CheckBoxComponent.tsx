import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from 'react-native'

interface CheckboxProps {
  option: string
  isChecked: boolean
  onSelect: () => void
}

export const CheckboxComponent: React.FC<CheckboxProps> = ({ option, isChecked, onSelect }) => {
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
  } as StyleProp<ViewStyle>,
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#000',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  } as StyleProp<ViewStyle>,
  checked: {
    width: 16,
    height: 16,
    borderRadius: 15,
    backgroundColor: '#0BC9B4'
  } as StyleProp<ViewStyle>,
  label: {
    fontSize: 16
  } as StyleProp<TextStyle>
})
