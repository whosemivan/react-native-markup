import React from 'react';
import { StyleSheet, View} from 'react-native';
import Header from './src/components/Header';
import Form from './src/components/Form';
import {COLORS} from './constants';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    paddingTop: 120
  }
});