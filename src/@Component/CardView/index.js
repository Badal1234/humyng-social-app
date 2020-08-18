/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  TextInput,
  Animated,
} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Video from 'react-native-video';
import NativeAdView, {
  CallToActionView,
  IconView,
  HeadlineView,
  AdvertiserView,
  AdBadge,
  MediaView,
} from 'react-native-admob-native-ads';
import {moderateScale} from 'react-native-size-matters';
import {Storage} from 'aws-amplify';
import Config from '@Config/default';
import {getAuthor} from '../../Api/Post';
import {KeyToUri, postTime} from 'utils/service.js';
import FollowButton from '../FollowButton';
const {
  Colors: {Secondary, Primary},
  font: {light},
} = Config;

export default function CardView({data, navigation, index, type}) {
  const [paused, set_paused] = useState(true);
  const [poster_img, set_poster_img] = useState('');
  const [video, set_video] = useState('');
  const [audio, set_audio] = useState('');
  const [author, set_author] = useState('');
  const [textHeight, set_textHeight] = useState(12);
  const [more, set_status] = useState(true);
  const [commentHeight, setHeight] = useState(0);
  const height = useState(new Animated.Value(commentHeight))[0];
  const [story, set_story] = useState([]);
  const [img, set_img] = useState('');

  var player = useRef();
  const preview = () => {
    setInterval(() => {
      if (player) {
        player.seek(2);
      }
    }, 10000);
  };

  const setMore = size => {
    set_status(!more);
  };

  useEffect(() => {
    if (type !== 'ad') {
    }
  });

  const commentAnimation = () => {
    Animated.timing(height, {
      toValue: 50,
      duration: 700,
      useNativeDriver: false,
    }).start();
  };

  //console.log(data.type)

  const renderImage = data1 => {
    KeyToUri(data.content.uri.raw.key).then(uri => set_img(uri));
    console.log(img);

    return (
      <>
        {renderHeader()}
        <View
          onTouchMove={() => commentAnimation()}
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <ImageBackground
            source={{
              uri: img,
            }}
            resizeMode={'stretch'}
            style={styles.image}>
            <Icon name={'play'} size={34} color={'white'} />
          </ImageBackground>
        </View>
        {renderIcons()}
        {renderComment()}
      </>
    );
  };

  const renderStory = data1 => {
    if (data.cover_uri != null) {
      KeyToUri(data.cover_uri.key).then(uri => set_poster_img(uri));
    }
    KeyToUri(data.content.key)
      .then(uri => fetch(uri))
      .then(data3 => data3.json())
      .then(a => set_story(a.content.content));

    console.log(poster_img);
    return (
      <>
        {renderHeader()}
        <TouchableOpacity
          onTouchMove={() => commentAnimation()}
          onPress={() => navigation.navigate('Story', {content: data.content})}>
          {poster_img ? (
            <Image
              source={{
                uri: poster_img,
              }}
              resizeMode={'stretch'}
              style={styles.image}
            />
          ) : null}

          <Text style={styles.story}>Click to read More</Text>
        </TouchableOpacity>
        {renderIcons()}
        {renderComment()}
      </>
    );
  };

  const renderVideo = () => {
    KeyToUri(data.content.uri.key).then(uri => set_video(uri));
    KeyToUri(data.cover_uri.key).then(uri => set_poster_img(uri));

    return (
      <>
        {renderHeader()}
        <View
          onTouchMove={() => commentAnimation()}
          onMagicTap={() => set_paused(!paused)}>
          <Video
            source={{uri: video}} // Can be a URL or a local file.
            //ref={vid => (player = vid)}
            poster={poster_img}
            style={{
              height: moderateScale(190),
              width: '100%',
              borderRadius: moderateScale(10),
            }}
            paused={paused}
            // onProgress={Progress}
            // onSeek={data1 => onSeek(data1)}
            ref={vid => (player = vid)}
            muted={true}
            onTouchStart={() => set_paused(!paused)}
            onTouchMove={() => set_paused(!paused)}
          />
        </View>
        {renderIcons()}
        {renderComment()}
      </>
    );
  };

  const renderAudio = uri => {
    Storage.get(data.public.content.uri.key, {level: 'public'})
      .then(result => {
        set_audio(result);
      })
      .catch(err => {
        console.log(err);
      });
    Storage.get(data.public.cover_uri.key, {level: 'public'})
      .then(result => {
        set_img(result);
      })
      .catch(err => {
        console.log(err);
      });
    return (
      <>
        <ImageBackground source={{uri: img}} style={styles.image}>
          <Video
            source={{uri: audio}} // Can be a URL or a local file.
            //ref={vid => (player = vid)}
            onLoad={() => preview()}
            paused={paused}
            // onProgress={Progress}
            // onSeek={data1 => onSeek(data1)}
            audioOnly={true}
            ref={vid => (player = vid)}
            onTouchStart={() => set_paused(!paused)}
            onTouchMove={() => set_paused(!paused)}
            playWhenInactive={false}
          />
        </ImageBackground>
      </>
    );
  };

  const renderMedia = data1 => {
    if (type === 'video') {
      return renderVideo(data1);
    } else if (type === 'audio') {
      return renderAudio();
    } else if (type === 'image') {
      return renderImage(data1);
    } else if (type === 'story') {
      return renderStory(data1);
    }
  };

  const text = 'fjfjfjfjf jf fj jf  fj fjjjj';

  const renderComment = () => {
    return (
      <View>
        <Text style={styles.description}>
          {data.title}
          <Text style={styles.more} onPress={setMore}>
            {more ? '...more' : null}
          </Text>
        </Text>
        {!more ? (
          <Text style={styles.description} onPress={setMore}>
            {data.description}
            <Text style={styles.more}>...less</Text>
          </Text>
        ) : null}

        <Animated.View style={[styles.commentBox, {height: height}]}>
          <Image style={styles.commentpic} source={{uri: img}} />
          <View>
            <TextInput
              placeholder={'give your comment'}
              placeholderTextColor={'white'}
            />
          </View>
        </Animated.View>
      </View>
    );
  };

  const renderAd = () => {
    return (
      <>
        <NativeAdView
          style={{
            height: moderateScale(300),
            width: '100%',
            alignSelf: 'center',
          }}
          adUnitID="ca-app-pub-2085032768852939/4257467377" // TEST adUnitID
        >
          <View
            style={{
              height: 275,
              width: '100%',
              backgroundColor: Secondary,
            }}>
            <View>
              <MediaView style={{height: moderateScale(200), width: '100%'}} />
            </View>
            <View
              style={{
                height: 75,
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}>
              <IconView
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <View
                style={{
                  width: '65%',
                  maxWidth: '65%',
                  paddingHorizontal: 6,
                }}>
                <AdvertiserView
                  style={{
                    fontSize: 14,
                    color: 'white',
                  }}
                />
                <HeadlineView
                  style={{
                    fontWeight: 'bold',
                    fontSize: 13,
                    color: 'white',
                    fontFamily: light,
                  }}
                />
              </View>
              <AdBadge
                style={{
                  marginLeft: moderateScale(20),
                  backgroundColor: 'white',
                }}
              />

              <CallToActionView
                style={{
                  height: 35,
                  paddingHorizontal: 10,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                  elevation: 10,
                  marginLeft: moderateScale(30),
                }}
                textStyle={{color: Primary, fontSize: 14}}
              />
            </View>
          </View>
        </NativeAdView>
      </>
    );
  };

  const renderInfo = data => {
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={styles.textwrapper}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.profile} />

            <Text style={styles.name}>{data.name}</Text>
          </View>
          <View>
            <Text style={styles.text}>{'cccc'}</Text>
          </View>
        </View>
        {data.type == 'video' || data.type == 'audio' ? (
          <TouchableOpacity
            style={styles.play}
            onPress={() => set_paused(!paused)}>
            <Icon
              name={paused ? 'play-circle' : 'pause-circle'}
              color={'white'}
              size={30}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    );
  };

  const renderIcons = () => {
    const like = data.isLike;
    return (
      <View style={{justifyContent: 'center'}}>
        <View style={styles.iconholder}>
          <TouchableOpacity style={styles.icon} onPress={() => alert('1')}>
            <View style={styles.iconround}>
              <Icon name="heart" color={like ? 'red' : 'white'} size={20} />
            </View>
            <Text style={styles.num}>{''}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => navigation.navigate('CommentSection')}>
            <View style={styles.iconround}>
              <Icon name="comment" color={'white'} size={15} />
            </View>
            <Text style={styles.num}>{''}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const renderHeader = () => {
    const time = postTime(data.time);

    return (
      <View style={styles.header}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Image style={styles.profileImage} />
          </View>
          <TouchableOpacity>
            <Text style={styles.name}>{data.userInfo.username}</Text>
            <Text style={styles.time}>{time}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FollowButton isFollow={data.isFollow} />
        </View>
        <View>
          <Icon name={'ellipsis-h'} color={'white'} size={24} />
        </View>
      </View>
    );
  };
  console.log(type);
  return (
    <View style={styles.container}>
      {type === 'ad' ? (
        renderAd()
      ) : (
        <View>
          <View>{renderMedia()}</View>
        </View>
      )}
    </View>
  );
}
