import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Flag from "./Flag";

export default props => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}
                onPress={props.onNewGame}>
                <Text styles={styles.buttonLabel}>Novo Jogo</Text>
            </TouchableOpacity>

            <View style={styles.flagContainer}>
                <TouchableOpacity onPress={props.onFlagPress}
                    style={styles.flagButton}>
                    <Flag bigger />
                </TouchableOpacity>
                <Text style={styles.flagsLeft}>= {props.flagsLeft}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#E2D1B3',
        alignItems: 'cente',
        justifyContent: 'space-around',
        paddingHorizontal: 30,
        paddingVertical: 50,
    },
    flagContainer: {
        flexDirection: 'row',
        paddingRight: 10,
    },
    flagButton: {
        marginTop: 10,
        minWidth: 30,
    },
    flagsLeft: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 5,
        marginLeft: 10,
    },
    button: {
        backgroundColor: '#999',
        padding: 15,
        borderRadius: 5,
    },
    buttonLabel: {
        fontSize: 20,
        color: '#DDD',
        fontWeight: 'bold',
    }
})