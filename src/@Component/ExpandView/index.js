import React, {useState} from 'react';
import {View, Animated, TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
const ExpandbleView = props => {
  const height = useState(new Animated.Value())[0];

  return (
    <Animated.View style={styles.container}>
      {props.children}
      <TouchableOpacity style={styles.expand} onPress={expand}>
        <Icon name={'angle-double-down'} size={24} color={'white'}/>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default ExpandbleView;
