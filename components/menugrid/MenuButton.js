import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const MenuButton = () => {
    return (
      <View>
        <TouchableOpacity style={styles.roundButton}>
          <Text style={styles.buttonMainText}>Finances</Text>
        </TouchableOpacity>
        <Text>This is a button</Text>
      </View>
    );
}

export default MenuButton

const styles = StyleSheet.create({
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
    }
})
