/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
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
const {
  Colors: {Secondary, Primary},
  font: {light},
} = Config;

export default function CardView({data, navigation, index}) {
  const [paused, set_paused] = useState(true);
  const [poster_img, set_poster_img] = useState('');
  const [img, set_img] = useState('');
  const [video, set_video] = useState('');
  const [audio, set_audio] = useState('');
  const [author, set_author] = useState('');
  var player = useRef();
  const preview = () => {
    setInterval(() => {
      if (player) {
        player.seek(2);
      }
    }, 10000);
  };

  useEffect(() => {
    if (type !== 'ad') {
      getAuthor({
        id: data.public.author,
      }).then(data1 => console.log(data1.success.Item.public.info));
    }
  });

  const type = data.type;

  const renderImage = data1 => {
    Storage.get(data.public.content.uri.raw.key, {level: 'public'})
      .then(result => {
        set_img(result);
      })
      .catch(err => {
        console.log(err);
      });

    return (
      <Image
        source={{
          uri: img,
        }}
        resizeMode={'stretch'}
        style={styles.image}
      />
    );
  };

  const renderStory = data1 => {
    console.log(data1);
    Storage.get(data.public.cover_uri.raw.key, {level: 'public'})
      .then(result => {
        set_poster_img(result);
      })
      .catch(err => {
        console.log(err);
      });

    return (
      <Image
        source={{
          uri: poster_img,
        }}
        resizeMode={'stretch'}
        style={styles.image}
      />
    );
  };

  const renderVideo = uri => {
    Storage.get(data.public.content.uri.key, {level: 'public'})
      .then(result => {
        set_video(result);
      })
      .catch(err => {
        console.log(err);
      });

    return (
      <Video
        source={{uri: video}} // Can be a URL or a local file.
        //ref={vid => (player = vid)}
        onLoad={() => preview()}
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

  const renderMedia = data => {
    if (type === 'video') {
      return renderVideo(data);
    } else if (type === 'audio') {
      return renderAudio();
    } else if (type === 'image') {
      return renderImage(data);
    } else if (type == 'story') {
      console.log(data.type);
      return renderStory(data);
    }
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
          adUnitID="ca-app-pub-2085032768852939/1454879525" // TEST adUnitID
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
            <Text style={styles.text}>{data.public.description}</Text>
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
    return (
      <View style={{position: 'absolute', justifyContent: 'center'}}>
        <View style={styles.iconholder}>
          <View style={styles.icon1}>
            <Icon name="video-camera" color={'white'} size={14} />
          </View>
          <TouchableOpacity style={styles.icon} onPress={() => alert('1')}>
            <View style={styles.iconround}>
              <Icon name="heart" color={'red'} size={15} />
            </View>
            <Text style={styles.num}>{data.public.data.likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <View style={styles.iconround}>
              <Icon name="comment" color={'white'} size={15} />
            </View>
            <Text style={styles.num}>{data.public.description}</Text>
          </TouchableOpacity>
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
          <TouchableOpacity
            onPress={() => navigation.navigate('RenderScreen', {index: index})}>
            {renderMedia(data)}
            {renderIcons()}
          </TouchableOpacity>
          {renderInfo(data)}
        </View>
      )}
    </View>
  );
}
