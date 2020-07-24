import React, {useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import Video from '@Component/VideoPlayer';
import {styles} from './styles';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Camera() {
  const [show, set_show] = useState(true);
  return <View />;
}
