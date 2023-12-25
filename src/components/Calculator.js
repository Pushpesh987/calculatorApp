import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Button, Text, SegmentedButton } from 'react-native-paper';
import styles from '../styles';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('');

  const calculate = () => {
    let res;
    switch (operation) {
      case '+':
        res = parseFloat(num1) + parseFloat(num2);
        break;
      case '-':
        res = parseFloat(num1) - parseFloat(num2);
        break;
      case 'x':
        res = parseFloat(num1) * parseFloat(num2);
        break;
      case '/':
        res = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        res = '';
    }
    setResult(res.toString());
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter first number"
        value={num1}
        onChangeText={(text) => setNum1(text)}
      />
      <SegmentedButton
        style={styles.segmentedButton}
        value={operation}
        onValueChange={(value) => setOperation(value)}
        buttons={[
          { label: '+', value: '+' },
          { label: '-', value: '-' },
          { label: 'x', value: 'x' },
          { label: '/', value: '/' },
        ]}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter second number"
        value={num2}
        onChangeText={(text) => setNum2(text)}
      />
      <Button mode="contained" onPress={calculate} style={styles.calculateButton}>
        Calculate
      </Button>
      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

export default Calculator;
