import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MenuButton from './MenuButton'
const menuContainer = () => {
    return (
        <View style={styles.MainContainer}>
            <MenuButton/>
        </View>
    )
}

export default menuContainer

const styles = StyleSheet.create({
    MainContainer: {
        backgroundColor: "#FFF",
        flex: 1,
        padding: 20
    }
})
