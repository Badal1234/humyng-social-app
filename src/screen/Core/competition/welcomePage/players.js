import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {styles} from './styles';
import NativeAdView, {
  CallToActionView,
  IconView,
  HeadlineView,
  TaglineView,
  AdvertiserView,
  AdBadge,
  MediaView,
} from 'react-native-admob-native-ads';
import {moderateScale} from 'react-native-size-matters';

const players = [
  {
    name: 'siddharth padhi',
    game_id: 'badal_pro',
  },
  {
    name: 'siddharth padhi',
    game_id: 'badal_pro',
  },
  {
    name: 'siddharth padhi',
    game_id: 'badal_pro',
  },
];

const playerScreen = () => {
  const renderPlayers = item => {
    return (
      <TouchableOpacity style={styles.playercontainer}>
        <View>
          <Image source={{}} />
        </View>
        <View>
          <Text style={styles.playerName}>{item.name}</Text>
        </View>
        <View>
          <Text style={styles.gameid}>{item.game_id}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const renderAd = () => {
    return (
      <View style={styles.playercontainer}>
        <NativeAdView
          style={styles.adContainer}
          adUnitID="ca-app-pub-2085032768852939/2994627257" // TEST adUnitID
        >
          <View style={[{flexDirection: 'row'}]}>
            <AdBadge
              style={{
                marginLeft: moderateScale(0),
                backgroundColor: 'white',
              }}
            />
            <IconView style={[styles.icon, {marginLeft: moderateScale(20)}]} />
            <View style={{marginLeft: moderateScale(20)}}>
              <HeadlineView
                style={{
                  fontWeight: 'bold',
                  fontSize: 13,
                  color: 'white',
                }}
              />
              <TaglineView
                numberOfLines={1}
                style={{
                  fontSize: 7,
                  color: 'white',
                }}
              />
              <AdvertiserView
                style={{
                  fontSize: 10,
                  color: 'white',
                }}
              />
            </View>
          </View>
        </NativeAdView>
      </View>
    );
  };
  return (
    <View style={{alignItems: 'center'}}>
      {players
        .splice(0, Math.floor(Math.random() * players.length))
        .map(item => renderPlayers(item))}
      {renderAd()}
      {players.map(item => renderPlayers(item))}
    </View>
  );
};

export default playerScreen;
