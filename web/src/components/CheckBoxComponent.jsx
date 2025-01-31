import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const CheckBoxComponent = ({ option, isChecked, onSelect, type = 'radio' }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.baseBox,
          type === 'checkbox' ? styles.checkbox : styles.radio, // Aplica estilo específico para checkbox ou radio
        ]}
        onPress={onSelect}
      >
        {isChecked && (
          <View
            style={[
              type === 'checkbox' ? styles.checkboxChecked : styles.radioChecked, // Aplica estilo específico para checkbox ou radio
            ]}
          />
        )}
      </TouchableOpacity>
      <Text style={styles.label}>{option}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 13,
    marginBottom: 13,
  },

  baseBox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#000',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkbox: {
    borderRadius: 4, // Bordas levemente arredondadas para checkbox
  },

  radio: {
    borderRadius: 12, // Bordas completamente arredondadas para radio button
  },

  checkboxChecked: {
    width: 16,
    height: 16,
    borderRadius: 4, // Bordas levemente arredondadas para checkbox
    backgroundColor: '#0BC9B4',
  },

  radioChecked: {
    width: 16,
    height: 16,
    borderRadius: 8, // Bordas completamente arredondadas para radio button
    backgroundColor: '#0BC9B4',
  },

  label: {
    fontSize: 16,
  },
});
