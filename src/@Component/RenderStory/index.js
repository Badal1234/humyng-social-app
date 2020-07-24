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
import Icon from 'react-native-vector-icons/FontAwesome';
import CommentBox from '@Component/CommentBox';
import Comment from '@Component/CommentShown';
import Follow from '@Component/FollowButton';
import CommentModal from '@Component/commentmodal';
import SmallCard from '@Component/smallcard';
const data = [
  {
    key: '1',
    type: 'text',
    content: 'Hii my name is siddhartrh....I am here to help you',
  },
  {
    key: '2',
    type: 'media',
    content: [
      'https://unsplash.com/photos/yWwob8kwOCk/download',
      'https://unsplash.com/photos/nC6CyrVBtkU/download',
      'https://unsplash.com/photos/nC6CyrVBtkU/download',
    ],
  },
];

const {Value, set, add, event, interpolate, block} = Animated;
export default function RenderStory() {
  const [indicator, set_indicator] = useState(false);
  const [visible, set_visible] = useState(false);
  const translateY = useState(new Value(0))[0];
  const point = useState(new Value(height))[0];
  const translateX = useState(new Value(0))[0];

  const onPanGestureEvent = useCallback(
    event(
      [
        {
          nativeEvent: {
            translationY: translateY,
            translationX: translateX,
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
  const absoluteHeight = interpolate(add(point, translateX), {
    inputRange: [-width, 0, width],
    outputRange: [-width, width, -width * 2],
    extrapolate: 'clamp',
  });

  return (
    <View style={[styles.main]}>
      <View style={[styles.container]}>
        <View
          style={{
            position: 'absolute',
          }}>
          <View />
        </View>
        <View style={[styles.buttons]}>
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
        </View>
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
            <Text style={styles.title}>My first story</Text>
            <Text style={styles.time}>1 month ago</Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.decsc}>
        {data.map(item => {
          if (item.type == 'text') {
            return (
              <Text style={styles.description}>
                This video is shoot by me and published by me first time in
                histoiry.Yes i did it....Testing for more commetns and height
                sure to
              </Text>
            );
          } else {
            return (
              <ScrollView
                contentContainerStyle={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                horizontal={true}
                decelerationRate={'fast'}
                disableIntervalMomentum={true}>
                <View style={{flexDirection: 'row', width: width * 3}}>
                  {item.content.map(uri => (
                    <Image
                      source={{uri: uri}}
                      style={{height: 200, width: width - 50}}
                    />
                  ))}
                </View>
              </ScrollView>
            );
          }
        })}
        <Text style={styles.description}>
          This video is shoot by me and published by me first time in
          histoiry.Yes i did it....Testing for more commetns and height sure to
        </Text>
        <Text style={styles.description}>
          This video is shoot by me and published by me first time in
          histoiry.Yes i did it....Testing for more commetns and height sure to
        </Text>
        <Text style={styles.description}>
          This video is shoot by me and published by me first time in
          histoiry.Yes i did it....Testing for more commetns and height sure to
        </Text>
        <Text style={styles.description}>
          This video is shoot by me and published by me first time in
          histoiry.Yes i did it....Testing for more commetns and height sure to
        </Text>
        <Text style={styles.description}>
          This video is shoot by me and published by me first time in
          histoiry.Yes i did it....Testing for more commetns and height sure to
        </Text>
        <Text style={styles.description}>
          This video is shoot by me and published by me first time in
          histoiry.Yes i did it....Testing for more commetns and height sure to
        </Text>
        <Text style={styles.description}>
          This video is shoot by me and published by me first time in
          histoiry.Yes i did it....Testing for more commetns and height sure to
        </Text>
        <Text style={styles.description}>
          This video is shoot by me and published by me first time in
          histoiry.Yes i did it....Testing for more commetns and height sure to
        </Text>
        <Text style={styles.description}>
          This video is shoot by me and published by me first time in
          histoiry.Yes i did it....Testing for more commetns and height sure to
        </Text>
        <Text style={styles.description}>
          This video is shoot by me and published by me first time in
          histoiry.Yes i did it....Testing for more commetns and height sure to
        </Text>
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
