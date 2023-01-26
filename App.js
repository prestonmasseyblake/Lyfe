/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import TimeCurrent from "./components/CurrentTime";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CurrentTime from './components/CurrentTime';
import TasksContainer from './components/tasksbar/TasksContainer';
import MenuContainer from './components/menugrid/menuContainer';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
     
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor:'#25252A' 
  };

  const viewStyle = {
    paddingBottom: 20,
    backgroundColor: '#25252A',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View contentInsetAdjustmentBehavior="automatic" style={viewStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? '#25252A' : '#25252A',
          }}
        >
          <Section>
            <CurrentTime />
          </Section>
        </View>
      </View>
      <View style={styles.taskContainer}>
        <TasksContainer />
      </View>
      <View>
        <MenuContainer/>
      </View>
    </SafeAreaView>
  );
};

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
    height:  154,
  }
});

export default App;
