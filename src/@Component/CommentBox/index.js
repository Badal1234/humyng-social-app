/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function CommentBox({onPress}) {
  const [comment,set_comment] = useState(null)
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={styles.container}>
        <TextInput
          placeholder={'put your comments'}
          placeholderTextColor={'white'}
          style={styles.input}
          multiline={true}
          selectionColor={'white'}
          onChangeText={text=>set_comment(text)}
        />
      </View>
      <TouchableOpacity style={styles.icon} onPress={onPress}>
        <Icon name={'chevron-right'} size={24} color={'#757575'} />
      </TouchableOpacity>
    </View>
  );
}
