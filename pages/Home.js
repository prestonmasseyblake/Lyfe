import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
    StyleSheet, 
  Text,
  useColorScheme,
  View,
} from 'react-native';
import TasksContainer from '../components/tasksbar/TasksContainer';
import CurrentTime from '../components/CurrentTime';
import MenuContainer from '../components/menugrid/MenuContainer';
const viewStyle = {
  paddingBottom: 20,
  backgroundColor: '#25252A',
  flexDirection: 'row',
  justifyContent: 'center',
  flexWrap: 'wrap',
  alignItems: 'center',
};
 const backgroundStyle = {
   backgroundColor: '#25252A',
 };
const Home = () => {
    const isDarkMode = useColorScheme() === 'dark';
  return (
    <>
      <SafeAreaView style={backgroundStyle}>
        {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
        <View contentInsetAdjustmentBehavior="automatic" style={viewStyle}>
          <View
            style={{
              backgroundColor: isDarkMode ? '#25252A' : '#25252A',
            }}
          >
            <CurrentTime />
          </View>
        </View>
        <View style={styles.taskContainer}>
          <TasksContainer />
        </View>
        <View>
          <MenuContainer />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  taskContainer: {
    // flex:1,
    height: 154,
  },
});
