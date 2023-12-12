import React from "react";
import { View, StyleSheet, Text } from "react-native";

import params from "../params";
import Mine from "./Mine";

export default props => {

    const { mined, opened, nearMines, exploded } = props

    const styleField = [styles.field]

    //estilo aberto
    if (opened) styleField.push(styles.opened)

    //estilo regular
    if (styleField.length === 1) styleField.push(styles.regular)

    //para saber se a mina está ou não explodida
    


    let color = null
    if (nearMines > 0) {
        if (nearMines == 1) color = '#D8DBED'
        if (nearMines == 2) color = '#586273'
        if (nearMines > 2 && nearMines < 6) color = '#BA5802'
        if (nearMines >= 6) color = '#A61C1A'
    }

    return (
        <View style={styleField}>
            {!mined && opened && nearMines > 0 ?
                <Text style={[styles.label, { color: color }]}>
                    {nearMines}
                </Text> : false
            }
        </View>
    )
}

const styles = StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize,
    },
    regular: {
        backgroundColor: '#999',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333',
    },
    opened: {
        backgroundColor: '#999',
        borderColor: '#777',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontWeight: 'bold',
        fontSize: params.fontSize,
    }
})