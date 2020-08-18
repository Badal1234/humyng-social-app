import React, {useState} from 'react';
import {View, Animated, TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
const ExpandbleView = props => {
  const height = useState(new Animated.Value(75))[0];
  const [maxHeight, set_maxHeight] = useState(height);
  const expand = () => {
    Animated.spring(height, {
      toValue: maxHeight,
      useNativeDriver: true,
    });
  };

  return (
    <Animated.View
      style={[styles.container, {height: height}]}
      onLayout={e => console.log(e.nativeEvent.layout.height)}>
      <View onLayout={e => set_maxHeight(e.nativeEvent.layout.height)}>
        {props.children}
      </View>

      <TouchableOpacity style={styles.expand} onPress={expand}>
        <Icon name={'angle-double-down'} size={24} color={'white'} />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default ExpandbleView;
