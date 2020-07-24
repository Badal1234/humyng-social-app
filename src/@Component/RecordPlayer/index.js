import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';
const RecordAudio = ({item}) => {
  const [pause, set_pause] = useState(true);
  console.log(item);
  console.log(pause);
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Video
        source={{uri: item.path}}
        paused={pause}
        audioOnly={true}
        onVideoEnd={() => set_pause(!pause)}
        repeat={true}
      />
      <TouchableOpacity>
        <Text style={styles.name}>{item.name}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          set_pause(!pause);
        }}>
        <Icon name={pause ? 'play' : 'pause'} size={21} />
      </TouchableOpacity>
    </View>
  );
};

export default RecordAudio;
