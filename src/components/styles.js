import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '80%',
    maxWidth: 300,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  segmentedButton: {
    width: '80%',
    maxWidth: 300,
    marginBottom: 20,
  },
  calculateButton: {
    width: '80%',
    maxWidth: 300,
    marginBottom: 20,
  },
  result: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default styles;
