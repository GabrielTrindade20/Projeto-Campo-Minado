import React from "react";
import { View, StyleSheet } from "react-native";

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.coreMine} />
            <View style={styles.line} />
            <View style={[styles.line , {transform: [{rotate: '45deg'}] }]}/>
            <View style={[styles.line , {transform: [{rotate: '90deg'}] }]}/>
            <View style={[styles.line , {transform: [{rotate: '135deg'}] }]}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignContent: 'center', 
        justifyContent: 'center',       
    },
    coreMine: {
        height: 11,
        width: 11,
        borderRadius: 10,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    line: {
        position: 'absolute',
        height: 3,
        width: 18,
        borderRadius: 3,
        backgroundColor: 'black',
        alignItems: 'center',
        textAlign: 'center',
    }
})