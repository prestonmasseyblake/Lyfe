import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MenuButton from './MenuButton'
const menuContainer = ({navigation}) => {
    return (
      <View style={styles.MainContainer}>
        <MenuButton title={'block'} underText={'block'} />
        <MenuButton title={'finance'} underText={'finance'} />
        <MenuButton title={'todos'} underText={'todos'} />
        <MenuButton title={'gym'} underText={'gym'} />
        <MenuButton title={'diet'} underText={'diet'} />
        <MenuButton title={'alarms'} underText={'alarms'} />
      </View>
    );
}

export default menuContainer

const styles = StyleSheet.create({
    MainContainer: {
        backgroundColor: "#FFF",
        flex: 1,
         flexDirection: 'row', flexWrap: 'wrap',
        padding: 20
    }
})
