import React, {useState} from 'react';
import {View, TouchableOpacity, Animated,Easing} from 'react-native';
import {scale, moderateScale} from 'react-native-size-matters';
import {styles} from './styles';
const ToogleButton = (props) => {
    const {set_prize} = props
  const translate = useState(new Animated.Value(0))[0];
  const [toogle , setToogle] = useState(true)

  const move = () => {
    console.log('sdd');
  console.log(translate)
    Animated.timing(translate, {
      toValue: !toogle?0:moderateScale(30),
      useNativeDriver: true,
      duration: 100,
      easing: Easing.elastic(0.7),
    }).start();
    setToogle(!toogle)
    set_prize(toogle)
  };
  return (
    <TouchableOpacity style={[styles.container]} onPress={() => move()}>
      <Animated.View style={[styles.toogle, {translateX: translate}]} />
    </TouchableOpacity>
  );
};

export default ToogleButton;
