import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, SafeAreaView, StatusBar } from 'react-native';

import params from './src/params';
import MineField from './src/componets/MineField';
import Header from './src/componets/Header';
import LevelSelection from './src/screens/LevelSelection';
import {
  createMineBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed,
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
      lost: false,
      showLevelSelection: false,
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

  //marca a bandeira
  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board)
    //função de inverter a flag
    invertFlag(board, row, column)
    //para ganhar o jogo
    const won = wonGame(board)

    //verifica se o usuário ganhou
    if (won) {
      Alert.alert('VOCÊ PERDEU', 'TENTE NOVAMENTE')
    }
    //muda o estado do componente
    this.setState({ board, won })
  }


  onLevelSelected = level => {
    params.difficultLevel = level
    this.setState(this.createState())
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <LevelSelection isVisible={this.state.showLevelSelection}
          onLevelSelected={this.onLevelSelected}
          onCancel={() => this.setState({ showLevelSelection: false })} />

        <Header flagsLeft={this.minesAmount() - flagsUsed(this.state.board)}
          onNewGame={() => this.setState(this.createState())}
          onFlagPress={() => this.setState({ showLevelSelection: true })}
        />

        <View style={styles.board}>
          <MineField board={this.state.board}
            onOpenField={this.onOpenField}
            onSelectField={this.onSelectField} />
        </View>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  },
});
