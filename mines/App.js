import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import params from './src/params';
import MineField from './src/componets/MineField';
import {
  createMineBoard
} from './src/functions'


export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  //Calcula a quantidade de minas no tabluleiro
  minesAmount = () => {
    const cols = params.getColumnsAmout()
    const rows = params.getRowsamout()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  //Cria o estado do componente(ex: tabuleiro, os campos abertos, com mina)
  createState = () => {
    const cols = params.getColumnsAmout()
    const rows = params.getRowsamout()
    return {
      board: createMineBoard(rows, cols, this.minesAmount())
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines!</Text>
        <Text style={styles.instructions}>Tamanho da grade:
          {params.getRowsamout()}x{params.getColumnsAmout()}
        </Text>

        <View style={styles.board}>
          <MineField board={this.state.board} />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  },
});
