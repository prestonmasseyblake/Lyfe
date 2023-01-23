import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Donut from './Donut';

function calculatePercentageOfDayDone() {
    let now = new Date(); // current date and time
    let startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // start of the current day
    let endOfDay = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        23,
        59,
        59,
        999,
    ); // end of the current day
    let elapsedTime = now - startOfDay; // time elapsed since the start of the day
    let totalTime = endOfDay - startOfDay; // total time in a day
    let percentage = (elapsedTime / totalTime) * 100; // percentage of the day that is done
    return percentage;

}

  const data = [
    {
      percentage: 8,
      color: 'tomato',
      max: 10,
    },
  ];

  function CurrentTime() {
      const [time, setTime] = useState(new Date().toLocaleTimeString());
      const [percentageTime, setPercentageTime] = useState(75);

      useEffect(() => {
        setPercentageTime(calculatePercentageOfDayDone());
        console.log(percentageTime);
      const interval = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000);
        
        return () => clearInterval(interval);
        
       
  
    },[]);
  

  

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      > 
        {data.map((p, i) => {
          return (
            <Donut
              key={i}
              percentage={p.percentage}
              color={p.color}
              delay={500 + 100 * i}
              max={p.max}
              time={time}
              percentageTime={percentageTime}
            />
          );
        })}
      </View>
    </View>
  );
}

export default CurrentTime;

const styles = StyleSheet.create({
  
  
});
