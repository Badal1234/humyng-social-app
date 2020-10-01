import React, {useEffect,useState} from 'react';
import {
  View,
  TextInput,
  Text,
  ScrollView,
} from 'react-native';
import {styles} from './styles';
import Button from '@Component/Button';
import NativeAdView, {
  CallToActionView,
  IconView,
  HeadlineView,
  TaglineView,
  AdvertiserView,
  AdBadge,
  MediaView,
} from 'react-native-admob-native-ads';
import { makeParticipate} from '../../../Api/tournament';
import { InterstitialAd, TestIds, AdEventType } from '@react-native-firebase/admob';
const interstitial = InterstitialAd.createForAdRequest('ca-app-pub-2085032768852939/1056294781', {
  requestNonPersonalizedAdsOnly: true,
});

const AddName = ({navigation}) => {
  const [loaded, setLoaded] = useState(false);
  const [name , set_name] = useState('')

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
  const tournament_id = navigation.getParam('tournament_id')


  const participate = () => {
    makeParticipate({tournament_id: tournament_id,game_username:name})
    .then(() => {
      console.log('participated');
      interstitial.show() 
      navigation.goBack()
     
    })
    .catch(err => {
      navigation.goback()
      
      console.log(err);
    });
  }
  useEffect(() => {
    const eventListener = interstitial.onAdEvent(type => {
      if (type === AdEventType.LOADED) {
        setLoaded(true);
      }
    });

    // Start loading the interstitial straight away
    interstitial.load();

    // Unsubscribe from events on unmount
    return () => {
      eventListener();
    };
  }, []);

  // No advert ready to show yet
 


  return (
    <ScrollView style={styles.container} behavior={'height'} stickyHeaderIndices={[0]}>
      {renderAd}
      <View style={styles.wrapContainer}>
        <Text style={styles.text}>Enter Your Nickname or UserName Of Game</Text>
        <TextInput style={styles.input} onChangeText={text=>set_name(text)}/>
        <View>
          <Button
            text={'submit'}
            onPress={participate}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default AddName;
