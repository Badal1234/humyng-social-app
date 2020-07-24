import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import {styles} from './styles'
export default function BackButton() {
  return (
    <TouchableOpacity style={styles.upperButton}>
      <View style={styles.icon}>
        <Icon name="chevron-left" color={'white'} size={20} />
      </View>
      <Text style={styles.text1}>BACK</Text>
    </TouchableOpacity>
  );
}
