/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-labels */
import React, {useState, useRef, useCallback} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Text,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import Animated from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {moderateScale} from 'react-native-size-matters';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import {styles} from './styles';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import CommentBox from '../CommentBox';
import Comment from '../CommentShown';
import Follow from '../FollowButton';
import CommentModal from '../commentmodal';
import SmallCard from '@Component/smallcard';
const data = {
  uri:
    'https://firebasestorage.googleapis.com/v0/b/story-3a905.appspot.com/o/uploads%2FDon%20-%20Gulzaar%20Chhaniwala.mp3?alt=media&token=a4535ae2-38d8-4719-8674-b76e5c7635b5',
  profile_uri:
    'https://firebasestorage.googleapis.com/v0/b/story-3a905.appspot.com/o/profilepic%2FSissd%2Fprofile.jpg?alt=media&token=c59e766e-3c9e-476a-b6db-5ec6dba141c1',

  recomended: [
    {
      type: 'video',
      name: 'siddharth Padhi',
      uri:
        'https://firebasestorage.googleapis.com/v0/b/story-3a905.appspot.com/o/uploads%2Fvideo?alt=media&token=dd0a0675-4cb6-4992-825d-4526037e9ee6',
      like: '55',
      comment: '55',
      id: 'jsnsfi34iinf839344n49j tngu5i3gh483hjt58g85g4nv',
    },
    {
      type: 'audio',
      name: 'siddharth Padhi',
      uri:
        'https://firebasestorage.googleapis.com/v0/b/story-3a905.appspot.com/o/uploads%2FDon%20-%20Gulzaar%20Chhaniwala.mp3?alt=media&token=a4535ae2-38d8-4719-8674-b76e5c7635b5',
      like: '55',
      comment: '55',
      id: 'jsnsfi34iinf8vknfdjnfdoibnfdjn fdjknsfdj83hjt58g85g4nv',
    },
  ],
};

const {Value, set, add, event, interpolate, block} = Animated;
export default function VideoPlayer({translationX}) {
  const loading = () => {
    set_indicator(true);
  };
  const [paused, set_paused] = useState(false);
  const [pos, set_pos] = useState(1);
  const [total, set_total] = useState(0);
  const [indicator, set_indicator] = useState(false);
  const [audio, set_audio] = useState(false);
  const [visible, set_visible] = useState(false);
  var player = useRef();
  const pausedfun = () => {
    set_paused(!paused);
  };
  const onSeek = seek => {
    console.log(seek);
  };
  const seekVideo = event => {
    const position = event.nativeEvent.locationX;
    console.log(position);
    const toPosition = (total / (width - 100)) * position;
    console.log(toPosition);
    player.seek(toPosition);
    set_pos(toPosition);
  };
  const Progress = progress => {
    set_total(progress.seekableDuration);
    set_pos(progress.currentTime / progress.seekableDuration);
  };
  const translateY = useState(new Value(0))[0];
  const point = useState(new Value(height))[0];

  const onPanGestureEvent = useCallback(
    event(
      [
        {
          nativeEvent: {
            translationY: translationX,
            y: point,
          },
        },
      ],
      {
        useNativeDriver: true,
      },
    ),
    [],
  );

  const videoHeight = interpolate(add(point, translateY), {
    inputRange: [height / 2, height - 150],
    outputRange: [height / 3.5, height - 150],
    extrapolate: 'clamp',
  });
  const absoluteHeight = interpolate(add(point, translateY), {
    inputRange: [height / 2, height - 150],
    outputRange: [-height / 1.9, 0],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.main} >
      <PanGestureHandler onGestureEvent={onPanGestureEvent}>
        <Animated.View style={[styles.container]}>
          <Animated.View style={[styles.videowrapper, {height: videoHeight}]}>
            {audio ? (
              <View>
                <Animated.Image
                  source={{uri: data.profile_uri}}
                  style={{
                    height: videoHeight,
                    width: width,
                    borderBottomLeftRadius: moderateScale(50),
                    borderBottomRightRadius: moderateScale(50),
                  }}
                />
              </View>
            ) : null}
            <Video
              source={{
                uri:
                  'https://myvodstreams-dev-output-boapstrk.s3.ap-south-1.amazonaws.com/video/video_Ott_Hls_Ts_Avc_Aac_16x9_480x270p_15Hz_400Kbps.m3u8',
              }} // Can be a URL or a local file.
              onLoadStart={loading}
              onVideoLoadStart={loading}
              onBuffer={loading}
              onReadyForDisplay={() => set_indicator(false)}
              onVideoLoad={() => set_indicator(false)}
              ref={vid => (player = vid)}
              style={audio ? styles.audio : StyleSheet.absoluteFill}
              resizeMode={'contain'}
              paused={paused}
              onProgress={Progress}
              onSeek={data1 => onSeek(data1)}
              audioOnly={audio}
            />
          </Animated.View>

          <Animated.View
            style={{
              position: 'absolute',
              transform: [{translateY: absoluteHeight}],
            }}>
            <View>{<ActivityIndicator animation={indicator} />}</View>

            <Animated.View>
              <TouchableOpacity
                style={styles.progressbar}
                onPress={e => seekVideo(e)}>
                <ProgressBar
                  styleAttr="Horizontal"
                  indeterminate={false}
                  progress={pos}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.pause}
                onPress={() => pausedfun()}>
                <Icon
                  name={paused ? 'pause-circle' : 'play-circle'}
                  size={44}
                  color={'white'}
                />
              </TouchableOpacity>
            </Animated.View>
          </Animated.View>
          <Animated.View style={[styles.buttons]}>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 30,
                marginRight: moderateScale(100),
              }}>
              <Icon name="heart" size={24} color={'red'} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                marginRight: moderateScale(100),
              }}>
              <Text style={{color: 'white'}}>scroll up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon name={'bookmark'} size={24} color={'white'} />
            </TouchableOpacity>
          </Animated.View>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: moderateScale(5),
              marginLeft: moderateScale(20),
            }}>
            <TouchableOpacity>
              <Image source={{uri: data.profile_uri}} style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginLeft: moderateScale(10),
                marginRight: moderateScale(140),
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white'}}>name</Text>
            </TouchableOpacity>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Follow />
            </View>
          </View>
          <View style={{width: width}}>
            <View>
              <Text style={styles.title}>My first video</Text>
              <Text style={styles.time}>1 month ago</Text>
            </View>
          </View>
        </Animated.View>
      </PanGestureHandler>
      <ScrollView style={styles.decsc} >
        <Text style={styles.description}>
          This video is shoot by me and published by me first time in
          histoiry.Yes i did it....Testing for more commetns and height sure to
        </Text>
        <FlatList
          data={data.recomended}
          renderItem={({item}) => <SmallCard data={item} />}
          horizontal={true}
        />
        <View style={{paddingTop: moderateScale(20)}}>
          <CommentBox />
        </View>

        <View>
          <Comment />
        </View>
      </ScrollView>

      <View style={{width: width * 2}}>
        <CommentModal visible={visible} setVisible={set_visible} />
      </View>
    </View>
  );
}
