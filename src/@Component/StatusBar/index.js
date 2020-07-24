import React, {useEffect} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import auth from '@react-native-firebase/auth';
import LinearGradient from 'react-native-linear-gradient';
import Config from '@Config/default';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary, Secondary},
  font: {PrimarF},
} = Config;

const status = [
  {
    profile_url:
      'https://firebasestorage.googleapis.com/v0/b/story-3a905.appspot.com/o/profilepic%2FSissd%2Fprofile.jpg?alt=media&token=c59e766e-3c9e-476a-b6db-5ec6dba141c1',
    status_content: '',
    profile_name: '',
    time: '',
    key: '1',
  },
  {
    profile_url:
      'https://firebasestorage.googleapis.com/v0/b/story-3a905.appspot.com/o/profilepic%2FSissd%2Fprofile.jpg?alt=media&token=c59e766e-3c9e-476a-b6db-5ec6dba141c1',
    status_content: '',
    profile_name: '',
    time: '',
    key: '2',
  },
  {
    profile_url:
      'https://firebasestorage.googleapis.com/v0/b/story-3a905.appspot.com/o/profilepic%2FBadal223%2Fprofile.jpg?alt=media&token=085511b5-1b37-4db5-85be-979f4d2bfba1',
    status_content: '',
    profile_name: '',
    time: '',
    key: 3,
  },
  {
    profile_url:
      'https://firebasestorage.googleapis.com/v0/b/story-3a905.appspot.com/o/profilepic%2FBadal223%2Fprofile.jpg?alt=media&token=085511b5-1b37-4db5-85be-979f4d2bfba1',
    status_content: '',
    profile_name: '',
    time: '',
    key: 4,
  },
  {
    profile_url:
      'https://firebasestorage.googleapis.com/v0/b/story-3a905.appspot.com/o/profilepic%2FBadal223%2Fprofile.jpg?alt=media&token=085511b5-1b37-4db5-85be-979f4d2bfba1',
    status_content: '',
    profile_name: '',
    time: '',
    key: 5,
  },
  {
    profile_url:
      'https://firebasestorage.googleapis.com/v0/b/story-3a905.appspot.com/o/profilepic%2FBadal223%2Fprofile.jpg?alt=media&token=085511b5-1b37-4db5-85be-979f4d2bfba1',
    status_content: '',
    profile_name: '',
    time: '',
    key: 6,
  },
  {
    profile_url:
      'https://firebasestorage.googleapis.com/v0/b/story-3a905.appspot.com/o/profilepic%2FBadal223%2Fprofile.jpg?alt=media&token=085511b5-1b37-4db5-85be-979f4d2bfba1',
    status_content: '',
    profile_name: '',
    time: '',
    key: 6,
  },
  {
    profile_url:
      'https://firebasestorage.googleapis.com/v0/b/story-3a905.appspot.com/o/profilepic%2FBadal223%2Fprofile.jpg?alt=media&token=085511b5-1b37-4db5-85be-979f4d2bfba1',
    status_content: '',
    profile_name: '',
    time: '',
    key: 6,
  },
];

export default function StatusBar() {
  useEffect(() => {
    auth().currentUser.reload();
    console.log(auth().currentUser);
  });
  return (
    <View style={{flex: 1}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {status.map(data => (
          <View>
            <TouchableOpacity style={styles.container} key={data.key}>
              <Image source={{uri: data.profile_url}} style={styles.image} />
            </TouchableOpacity>
            <View style={styles.seen} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
