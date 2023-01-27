import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
const MenuButton = ({title,underText}) => {
    const navigation = useNavigation(); 
    return (
      <View style={styles.menuButtonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Finance')}
          style={styles.roundButton}
        >
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
        marginTop: 10,
        color: "#111"
    }
})
