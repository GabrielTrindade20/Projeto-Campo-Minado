import React, { cloneElement } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Flag from "./Flag";

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.buttonLabel}>Campo Minado By gab_roct</Text>
            </View>

            <View style={styles.infomations}>
                <View style={styles.selections}>
                    <TouchableOpacity style={styles.button}
                        onPress={props.onNewGame}>
                        <Text styles={styles.buttonLabel}>Novo Jogo</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}
                        onPress={props.onFlagPress}>
                        <Text styles={styles.buttonLabel}>Dificuldade</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.flagContainer}>
                    <Flag bigger />
                    <Text style={styles.flagsLeft}> = {props.flagsLeft}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#3B4827',
        padding: 5,
        alignItems: 'center',
    },
    infomations: {
        flexDirection: 'row',
        backgroundColor: '#E2D1B3',
        alignItems: 'center',
        justifyContent: 'space-around',
        
    },
    selections: {
        padding: 10,
        flex: 1,
       alignItems: 'center',
    },
    flagContainer: {
        justifyContent: 'space-between',
        textAlign: 'center',  
        flex: 1,      
    },
    flagButton: {
        marginTop: 10,
        minWidth: 30,
    },
    flagsLeft: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 30,
    },
    button: {
        backgroundColor: '#999',
        padding: 10,
        borderRadius: 5,
        marginBottom: 5,
        width: '80%',
    },
    buttonLabel: {
        fontSize: 20,
        color: '#DDD',
        fontWeight: 'bold',
    },
    bombLabel: {
        fontSize: 10,
        color: '#DDD',
        fontWeight: 'bold',
    }
})