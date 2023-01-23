import React, { Component } from 'react'
import {StyleSheet, Text, View} from 'react-native';
import Carousel from './Carousel';
export class TasksContainer extends Component {
    render() {
        return (
          <View style={styles.container}>
            
            <Carousel
              style="stats"
              itemsPerInterval={3}
              items={[
                {
                  label: 'TODAY',
                  value: 1,
                },
                {
                  label: 'THIS WEEK',
                  value: 39,
                },
                {
                  label: 'THIS MONTH',
                  value: 120,
                },
                {
                  label: 'YESTERDAY',
                  value: 3,
                },
                {
                  label: 'LAST WEEK',
                  value: 25,
                },
                {
                  label: 'LAST MONTH',
                  value: 175,
                },
              ]}
            />

           
           
          </View>
        );
    }
}

export default TasksContainer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
