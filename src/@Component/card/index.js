/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
import Config from '@Config/default';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary, Secondary},
  font: {PrimarF},
} = Config;
const data = {
  uri:
    'https://firebasestorage.googleapis.com/v0/b/story-3a905.appspot.com/o/profilepic%2FSissd%2Fprofile.jpg?alt=media&token=c59e766e-3c9e-476a-b6db-5ec6dba141c1',
};
export default function Card({name, navigation}) {

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.5}
      onPress={() => navigation.navigate('EnterScreen')}>
      <View />
      <View style={styles.card}>
        <View>
          <Text style={styles.name}>{name}</Text>
        </View>

        <View />
      </View>
    </TouchableOpacity>
  );
}
