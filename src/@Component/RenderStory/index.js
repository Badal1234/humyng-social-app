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

  return (
    <View style={[styles.main]}>
      <ScrollView
        style={styles.decsc}
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}>
        <View style={[styles.container]}>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: moderateScale(5),
              marginLeft: moderateScale(0),
            }}>
            <TouchableOpacity>
              <Image source={{uri: data.profile_uri}} style={styles.image} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginLeft: moderateScale(10),
                marginRight: moderateScale(100),
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white'}}>name</Text>
            </TouchableOpacity>
            <View style={{}}>
              <Follow />
            </View>
          </View>
          <View style={{}}>
            <View>
              <Text style={styles.title}>My first story</Text>
              <Text style={styles.time}>1 month ago</Text>
            </View>
          </View>
        </View>
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
    </View>
  );
}
