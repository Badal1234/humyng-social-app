import React, {useEffect} from 'react';
import {View} from 'react-native';
import {RNPhotoEditor} from 'react-native-photo-editor';
export default function ImageEditor({navigation}) {
  const path = navigation.getParam('path');
  const type = navigation.getParam('type');

  console.log(path);
  useEffect(() => {}, []);
  return (
    <View>
      {RNPhotoEditor.Edit({
        path: path,
        onDone: data => {
          console.log(data);
          navigation.navigate('MediaInfo', {
            path: `file://${data}`,
            type: type,
          });
        },
      })}
    </View>
  );
}
