import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const MenuButton = ({title,underText}) => {
    return (
      <View style={styles.menuButtonContainer}>
        <TouchableOpacity style={styles.roundButton}>
                <Text style={styles.buttonMainText}>{title}</Text>
        </TouchableOpacity>
            <Text style={styles.buttonUnderText}>{underText}</Text>
      </View>
    );
}

export default MenuButton

const styles = StyleSheet.create({
    menuButtonContainer: {
        width: "33%",
        height: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    roundButton: {
        width: 60,
        height: 60,
        borderRadius: 40,
        backgroundColor: "#333",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonMainText: {
        color: "#FFF",
        fontSize: 8
    },
    buttonUnderText: {
        color: "#111"
    }
})
