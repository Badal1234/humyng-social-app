import React from 'react';
import {
  View,
  Animated,
  PanResponder,
  TouchableOpacity,
  Text,
} from 'react-native';
//import {LogLevel, RNFFmpeg} from 'react-native-ffmpeg';
import RNFS from 'react-native-fs';

const VideoEditingScreen = ({navigation}) => {
  const path = `${navigation.getParam('path')}`;

  const trim = () => {
  
  };

  return (
    <View>
      <TouchableOpacity onPress={() => trim()}>
        <Text>Trim</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VideoEditingScreen;
