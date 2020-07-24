/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function CommentBox() {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={styles.container}>
        <TextInput
          placeholder={'comments'}
          placeholderTextColor={'#757575'}
          style={styles.input}
          multiline={true}
          selectionColor={'white'}
        />
      </View>
      <TouchableOpacity style={styles.icon}>
        <Icon name={'chevron-right'} size={24} color={'#757575'} />
      </TouchableOpacity>
    </View>
  );
}
