import * as React from 'react';
import {
  Easing,
  TextInput,
  Animated,
  Text,
  View,
  StyleSheet,
} from 'react-native';


import Svg, {G, Circle} from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export default function Donut({
  percentage = 100,
  radius = 100,
  strokeWidth = 10,
  duration = 500,
  color = 'tomato',
  delay = 0,
  textColor,
  max = 100,
  time,
  percentageTime
}) {
  const animated = React.useRef(new Animated.Value(0)).current;
  const circleRef = React.useRef();
  const inputRef = React.useRef();
  const circumference = 2 * Math.PI * radius;
  const halfCircle = radius + strokeWidth;

  const animation = toValue => {
    return Animated.timing(animated, {
      delay: 1000,
      toValue,
      duration,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start(() => {
      animation(toValue === 0 ? percentage : 0);
    });
  };

    React.useEffect(() => {
      const val = (percentageTime / 100) * 10
    const maxPerc = (100 * val) / max;
      const strokeDashoffset = circumference - (circumference * maxPerc) / 100;
      console.log("stroke dash",strokeDashoffset);
    circleRef.current.setNativeProps({
      strokeDashoffset,
    });

    //     animation(percentage);

    //     animated.addListener(
    //   v => {
    //     const maxPerc = (100 * v.value) / max;
    //         const strokeDashoffset = circumference - (circumference * maxPerc) / 100;
    //     console.log(v)
    //     if (inputRef?.current) {
    //       inputRef.current.setNativeProps({
    //         // text: `${Math.round(v.value)}`,
    //       });
    //     }
    //     if (circleRef?.current) {
    //       circleRef.current.setNativeProps({
    //         strokeDashoffset,
    //       });
    //     }
    //   },
    //   [max, percentage],
    // );

    // return () => {
    //   animated.removeAllListeners();
    // };
  }, []);

    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View
            style={{
              
              width: radius * 2,
              height: radius * 2,
            }}
          >
            <Svg
              height={radius * 2}
              width={radius * 2}
              viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
            >
              <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
                <Circle
                  ref={circleRef}
                  cx="50%"
                  cy="50%"
                  r={radius}
                  fill="transparent"
                  stroke={color}
                  strokeWidth={strokeWidth}
                  strokeLinecap="round"
                  strokeDashoffset={circumference}
                  strokeDasharray={circumference}
                />

                <Circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  fill="transparent"
                  stroke={color}
                  strokeWidth={strokeWidth}
                  strokeLinejoin="round"
                  strokeOpacity=".1"
                />
              </G>
            </Svg>

            <AnimatedTextInput
              ref={inputRef}
              underlineColorAndroid="transparent"
              editable={false}
              defaultValue={time}
              style={[
                StyleSheet.absoluteFillObject,
                {fontSize: radius / 4, color: textColor ?? color},
                styles.text,
              ]}
            />
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  text: {fontWeight: '900', textAlign: 'center'},
 
});
