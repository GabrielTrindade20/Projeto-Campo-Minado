import { Dimensions } from 'react-native'

const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRadio: 0.15, //proporção do painel superior na tela
    difficultLevel: 0.1,

    getColumnsAmout() {
        const width = Dimensions.get('window').width
        return Math.floor(width / this.blockSize)
    },

    getRowsamout() {
        const totalHeight = Dimensions.get('window').height
        const borderHeight = totalHeight * (1 - this.headerRadio)
        return Math.floor(borderHeight / this.blockSize)
    }
}

export default params