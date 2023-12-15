import React from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";

import params from "../params";
import Mine from "./Mine";
import Flag from "./Flag";

export default props => {

    const { mined, opened, nearMines, exploded, flagged } = props

    const styleField = [styles.field]

    //estilo aberto
    if (opened) styleField.push(styles.opened)

    //estilo regular
    if (styleField.length === 1) styleField.push(styles.regular)

    //para saber se a mina está ou não explodida
    if (exploded) styleField.push(styles.exploded)

    //se estiver marcado com a bandeira
    if (flagged) styleField.push(styles.flagged)

    //se não for aberto e explodido
    if (!opened && !exploded) styleField.push(styles.regular)

    let color = null
    if (nearMines > 0) {
        if (nearMines == 1) color = '#586273'
        if (nearMines == 2) color = '#826565'
        if (nearMines > 2 && nearMines < 6) color = '#D65831'
        if (nearMines >= 6) color = '#B31302'
    }

    return (
        <TouchableWithoutFeedback onPress={props.onOpen}>
            <View style={styleField}>
                {!mined && opened && nearMines > 0 ?
                    <Text style={[styles.label, { color: color }]}>
                        {nearMines}
                    </Text> : false
                }

                {
                    mined && opened ? <Mine /> : false
                }

                {
                    flagged && !opened ? <Flag /> : false
                }

            </View>
        </TouchableWithoutFeedback>
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
    },
    exploded: {
        backgroundColor: 'red',
        borderColor: '#BE0106',
    },

})