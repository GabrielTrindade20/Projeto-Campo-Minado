import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import params from './src/params';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Iniciando o Mines!</Text>
      <Text style={styles.instructions}>Tamanho da grade:
      {params.getRowsamout()}x{params.getColumnsAmout()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    textAling: 'center',
    margin: 10
  },
  instructions: {
    fontSize: 15,
    textAling: 'center',
    margin: 10,
  }
});
