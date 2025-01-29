import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native'
import { fieldMapping } from './dataQuestions'
import { CheckBoxComponent } from '../../../../components/CheckBoxComponent'

export const BoxQuestion = ({ questions, onAnswerChange }) => {
  const [answers, setAnswers] = useState({})
  const [textInputValues, setTextInputValues] = useState({})

  const handleTextChange = (index, value) => {
    const fieldKey = fieldMapping[index];
    const updatedAnswers = { ...answers, [fieldKey]: value };
  
    setAnswers(updatedAnswers);
    onAnswerChange(updatedAnswers);
  };
  
  const handleMultipleOptionsWithText = (index, option) => {
    const fieldKey = fieldMapping[index];
    const currentValues = answers[fieldKey] || [];
    const updatedValues = currentValues.includes(option)
      ? currentValues.filter((item) => item !== option)
      : [...currentValues, option];
  
    const updatedAnswers = { ...answers, [fieldKey]: updatedValues };
    
    setAnswers(updatedAnswers);
    onAnswerChange(updatedAnswers);
  };
  

  const handleTextInMultipleOptions = (index, value) => {
    const fieldKey = fieldMapping[index];
    const updatedAnswers = {
      ...answers,
      [fieldKey]: [...(answers[fieldKey] || []).filter((opt) => opt !== value), value],
    };
  
    setTextInputValues((prev) => ({ ...prev, [fieldKey]: value }));
    setAnswers(updatedAnswers);
    onAnswerChange(updatedAnswers);
  };
  
  

  const handleSingleOption = (index, option) => {
    const fieldKey = fieldMapping[index];
    const updatedAnswers = { ...answers, [fieldKey]: [option] };
  
    setAnswers(updatedAnswers);
    onAnswerChange(updatedAnswers);
  };
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {questions.map((question, index) => (
        <View key={index} style={styles.questionBox}>
          <Text style={styles.questionText}>{question.question}</Text>

          {question.textArea && !question.option && (
            <TextInput
              style={styles.textInput}
              placeholder='Enter here...'
              value={answers[fieldMapping[index]] || ''}
              onChangeText={(value) => handleTextChange(index, value)}
            />
          )}

          {question.textArea && question.option && (
            <View>
              {question.option.map((opt, optIndex) => (
                <CheckBoxComponent
                  key={optIndex}
                  option={opt}
                  isChecked={answers[fieldMapping[index]]?.includes(opt) || false}
                  onSelect={() => handleMultipleOptionsWithText(index, opt)}
                />
              ))}
              <TextInput
                style={styles.textInput}
                placeholder='Specify here...'
                value={textInputValues[fieldMapping[index]] || ''}
                onChangeText={(value) => handleTextInMultipleOptions(index, value)}
              />
            </View>
          )}

          {!question.textArea && question.option && (
            <View>
              {question.option.map((opt, optIndex) => (
                <CheckBoxComponent
                  key={optIndex}
                  option={opt}
                  isChecked={answers[fieldMapping[index]]?.includes(opt) || false}
                  onSelect={() => handleSingleOption(index, opt)}
                />
              ))}
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  questionBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: '70%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3
  },
  questionText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 10
  }
})
