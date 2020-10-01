import React, {useState} from 'react';
import {View, Text, Animated, Image, TouchableOpacity} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import ParsedText from 'react-native-parsed-text';
import NativeAdView, {
  CallToActionView,
  IconView,
  HeadlineView,
  TaglineView,
  AdvertiserView,
  AdBadge,
  MediaView,
} from 'react-native-admob-native-ads';
import {styles} from './styles';

const InfoScreen = ({info}) => {
  const [textHeight, set_textHeight] = useState(12);
  const [more, set_status] = useState(true);
  const renderPrizePool = prize => {
    return (
      <View>
        <View>
          <Text style={styles.prize}>Prize Pool</Text>
          <Text style={styles.rule}>Prize Rule</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {prize.map(item => renderPrize(item))}
        </View>
      </View>
    );
  };
  const renderAd = () => {
    return (
      <View style={styles.Adcontainer}>
        <NativeAdView
          style={styles.adContainer}
          adUnitID="ca-app-pub-2085032768852939/1454879525" // TEST adUnitID
        >
          <View style={[{flexDirection: 'row'}]}>
            <AdBadge
              style={{
                marginLeft: moderateScale(5),
                backgroundColor: 'white',
              }}
            />
            <IconView style={[styles.icon, {marginLeft: moderateScale(20)}]} />
            <View
              style={{
                marginLeft: moderateScale(20),
                borderWidth: 0.5,
                borderBottomColor: '#874dc6',
                width: '90%',
              }}>
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
  const renderPrize = item => {
    return (
      <View style={styles.prizeContainer}>
        <View />
        <Text style={styles.position}>{item.name}</Text>
        <Text style={styles.position}>{item.amount}</Text>
      </View>
    );
  };
  const setMore = size => {
    set_status(!more);
    set_textHeight(size);
  };

  const handleUrlPress = () => {
    
  }

  if (!info) {
    return <View style={styles.infoContainer} />;
  } else {
    console.log(info);
    const text = info.description;
    return (
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.title}>{info.title}</Text>
        </View>
        <View
          style={styles.data}
          onLayout={e => console.log(e.nativeEvent.layout.height)}>
          <ParsedText style={styles.description} parse={[
            {type: 'url',style: styles.url, onPress: handleUrlPress},
          ]}>
            {`${text.substring(0, textHeight)}`}
            {text.length >= 12 ? (
              <Text
                style={styles.more}
                onPress={() => (more ? setMore(text.length) : setMore(12))}>
                {more ? '...more' : '...less'}
              </Text>
            ) : null}
          </ParsedText>
        </View>
        <TouchableOpacity style={styles.game}>
          <Image style={styles.logo} />
          <TouchableOpacity>
            <Text style={styles.info}>Clash Of Clan</Text>
            <Text style={styles.info}>Download it from GooglePlay</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        {renderAd()}
        {info.prize ? renderPrizePool(info ? info.tournament_prize : []) : []}
        <View>
          <View>
            <Text style={styles.prize}>Tournament Rules</Text>
            <Text style={styles.description}>{info.tournament_rule}</Text>
          </View>
        </View>
      </View>
    );
  }
};

export default InfoScreen;
