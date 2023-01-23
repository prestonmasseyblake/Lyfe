import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './Slidestyle';

export const Slide = (props) => {
  const {title} = props;

  return (
    <View style={styles.slide}>
      <Text style={{...styles.slideText}}>{title}</Text>
    </View>
  );
};

export default Slide;
