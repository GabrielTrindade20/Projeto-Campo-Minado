import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';

import params from './src/params';
import MineField from './src/componets/MineField';
import {
  createMineBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
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
      board: createMineBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false
    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if (lost) {
      showMines(board)
      Alert.alert('VOCÊ PERDEU', 'TENTE NOVAMENTE')
    }

    if (won) {
      Alert.alert('PARABÉNS', 'VOCÊ GANHOU!')
    }

    this.setState({ board, lost, won })
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines!</Text>
        <Text style={styles.instructions}>Tamanho da grade:
          {params.getRowsamout()}x{params.getColumnsAmout()}
        </Text>

        <View style={styles.board}>
          <MineField board={this.state.board}
          onOpenField={this.onOpenField}/>
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
