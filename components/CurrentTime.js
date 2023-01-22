import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';

function CurrentTime() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View>
          <Text style={styles.text}>{time}</Text>
    </View>
  );
}

export default CurrentTime;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
});
