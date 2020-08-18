import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {styles} from './styles';
const podcastCard = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image}>
        <View style={styles.card}>
          <Text
            adjustsFontSizeToFit
            allowFontScaling={true}
            style={styles.name}>
            My first audio
          </Text>
          <Icon name={'play'} color={'white'} size={18} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default podcastCard;
