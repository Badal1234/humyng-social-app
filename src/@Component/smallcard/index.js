import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Config from '@Config/default';
import Video from 'react-native-video';
import {moderateScale} from 'react-native-size-matters';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary, Secondary},
  font: {PrimarF},
} = Config;
const data = {
  uri:
    'https://firebasestorage.googleapis.com/v0/b/story-3a905.appspot.com/o/profilepic%2FSissd%2Fprofile.jpg?alt=media&token=c59e766e-3c9e-476a-b6db-5ec6dba141c1',
};

export default function Card({data}) {
  const [paused, set_paused] = useState(true);
  var player = useRef();
  const preview = () => {
    setInterval(() => {
      if (player) {
        player.seek(2);
      }
    }, 10000);
  };
  const type = data.type;
  console.log(data);

  const renderVideo = uri => {
    return (
      <Video
        source={{uri: uri}} // Can be a URL or a local file.
        //ref={vid => (player = vid)}
        onLoad={() => preview()}
        style={{height: '100%', width: '100%'}}
        paused={paused}
        // onProgress={Progress}
        // onSeek={data1 => onSeek(data1)}
        ref={vid => (player = vid)}
        muted={true}
        onTouchStart={() => set_paused(!paused)}
        onTouchMove={() => set_paused(!paused)}
      />
    );
  };
  const renderAudio = uri => {
    return (
      <>
        <Image source={{uri: uri}} style={styles.image} />
        <Video
          source={{uri: uri}} // Can be a URL or a local file.
          //ref={vid => (player = vid)}
          onLoad={() => preview()}
          style={{height: '100%', width: '100%'}}
          paused={paused}
          // onProgress={Progress}
          // onSeek={data1 => onSeek(data1)}
          audioOnly={true}
          ref={vid => (player = vid)}
          onTouchStart={() => set_paused(!paused)}
          onTouchMove={() => set_paused(!paused)}
          playWhenInactive={false}
        />
        <TouchableOpacity
          style={{position: 'absolute', marginTop: moderateScale(10)}}>
          <Icon name={'play-circle'} color={'white'} size={24} />
        </TouchableOpacity>
      </>
    );
  };
  const renderImage = uri => {
    return <Image source={{uri: uri}} style={styles.image} />;
  };

  const renderMedia = data => {
    if (type === 'video') {
      return renderVideo(data.uri);
    } else if (type === 'audio') {
      return renderAudio(data.uri);
    } else if (type === 'image') {
      return renderImage(data.uri);
    } else {
      console.log(data.type);
      return renderImage(data.uri);
    }
  };

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5}>
      <View style={styles.card}>{renderMedia(data)}</View>
    </TouchableOpacity>
  );
}
