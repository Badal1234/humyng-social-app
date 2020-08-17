import React, {useEffect,useState} from 'react';
import {
  View,
  TextInput,
  Text,
  ScrollView,
} from 'react-native';
import {styles} from './styles';
import Button from '@Component/Button';
import {
  RewardedAd,
  RewardedAdEventType,
  TestIds,
} from '@react-native-firebase/admob';

const AddName = ({navigation}) => {
  const [loaded, setLoaded] = useState(false);
  const rewarded = RewardedAd.createForAdRequest(
    'ca-app-pub-2085032768852939/5690076349',
    {
      requestNonPersonalizedAdsOnly: true,
      keywords: ['fashion', 'clothing'],
    },
  );
  useEffect(() => {
    const eventListener = rewarded.onAdEvent((type, error, reward) => {
      if (type === RewardedAdEventType.LOADED) {
        setLoaded(true);
      }

      if (type === RewardedAdEventType.EARNED_REWARD) {
        console.log('User earned reward of ', reward);
        navigation.navigate('Competition')
      }
    });
    // Start loading the rewarded ad straight away
    rewarded.load();

    // Unsubscribe from events on unmount
    return () => {
      eventListener();
    };
  }, [rewarded]);

  return (
    <ScrollView style={styles.container} behavior={'height'}>
      <View style={styles.wrapContainer}>
        <Text style={styles.text}>Enter Your Nickname or UserName Of Game</Text>
        <TextInput style={styles.input} />
        <View>
          <Button
            text={'submit'}
            onPress={() => {
              rewarded.show();
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default AddName;
