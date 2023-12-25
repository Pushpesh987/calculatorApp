import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Button, Text } from 'react-native-paper';
import SegmentedControl from '@react-native-community/segmented-control';
import styles from './styles';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operationIndex, setOperationIndex] = useState(0);
  const [result, setResult] = useState('');

  const operations = ['+', '-', '*', '/'];

  const calculate = () => {
    const selectedOperation = operations[operationIndex];
    let res;

    switch (selectedOperation) {
      case '+':
        res = parseFloat(num1) + parseFloat(num2);
        break;
      case '-':
        res = parseFloat(num1) - parseFloat(num2);
        break;
      case '*':
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
      <SegmentedControl
        style={styles.segmentedButton}
        values={operations}
        selectedIndex={operationIndex}
        onChange={(event) => setOperationIndex(event.nativeEvent.selectedSegmentIndex)}
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
