import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Animated,
  StyleSheet,
} from 'react-native';
import Info from './Info';
import DesignButton from '@Component/designButton';
import StickyParallaxHeader from '@Component/AnimatedHeader';
import {styles} from './styles';
import Config from '@Config/default';
import PlayerScreen from './players';
import MatchScreen from './match';
import {
  RewardedAd,
  RewardedAdEventType,
  TestIds,
} from '@react-native-firebase/admob';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary, Secondary},
  font: {PrimaryF, light},
} = Config;

const windowHeight = Dimensions.get('window').height;
const {event, ValueXY} = Animated;
const scrollY = new ValueXY();

const text = {
  biography: `The bounty hunter known as "the Mandalorian" was dispatched by "the Client" and Imperial Dr. Pershing to capture the Child alive, however the Client would allow the Mandalorian to return the Child dead for a lower price.
  The assassin droid IG-11 was also dispatched to terminate him. After working together to storm the encampment the infant was being held in, the Mandalorian and IG-11 found the Child. IG-11 then attempted to terminate the Child. The Mandalorian shot the droid before the he was able to assassinate the Child.
  Shortly after, the Mandalorian took the Child back to his ship. On the way they were attacked by a trio of Trandoshan bounty hunters, who attempted to kill the Child. After the Mandalorian defeated them, he and the Child camped out in the desert for the night. While the Mandalorian sat by the fire, the Child ate one of the creatures moving around nearby. He then approached the bounty hunter and attempted to use the Force to heal one of the Mandalorian's wounds. The Mandalorian stopped him and placed him back into his pod. The next day, the pair made it to the Razor Crest only to find it being scavenged by Jawas. The Mandalorian attacked their sandcrawler for the scavenged parts and attempted to climb it while the Child followed in his pod. However, the Mandalorian was knocked down to the ground`,
  powers: 'Powers and Abilities',
  appearances: 'Appearances',
};

const rewarded = RewardedAd.createForAdRequest(
  'ca-app-pub-2085032768852939/5690076349',
  {
    requestNonPersonalizedAdsOnly: true,
    keywords: ['fashion', 'clothing'],
  },
);

const CutomHeaderScreen = ({navigation}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const eventListener = rewarded.onAdEvent((type, error, reward) => {
      if (type === RewardedAdEventType.LOADED) {
        setLoaded(true);
      }

      if (type === RewardedAdEventType.EARNED_REWARD) {
        console.log('User earned reward of ', reward);
      }
    });

    // Start loading the rewarded ad straight away
    rewarded.load();

    // Unsubscribe from events on unmount
    return () => {
      eventListener();
    };
  }, []);

  const renderContent = x => (
    <View style={styles.contentContiner}>
      <Text style={styles.contentText}>{x}</Text>
    </View>
  );
  const renderBody = () => {
    return (
      <View style={styles.container2}>
        <View>
          <DesignButton
            text={'Participate for 1 ticket'}
            onPress={() => navigation.navigate('AddName')}
          />
        </View>
        <View style={styles.border}>
          <Text style={styles.text}>You have 4 tickets</Text>
          <Text style={styles.text2} onPress={() => rewarded.show()}>
            Buy more >
          </Text>
        </View>
      </View>
    );
  };

  return (
    <StickyParallaxHeader
      headerType="TabbedHeader"
      backgroundColor={Primary}
      backgroundImage={require('../../../../static/index.jpeg')}
      renderMiddle={renderBody()}
      tabs={[
        {
          title: 'Info',
          content: <Info />,
        },
        {
          title: 'Participant',
          content: <PlayerScreen />,
        },
        {
          title: 'Winners',
          content: <MatchScreen />,
        },
      ]}
      tabTextContainerStyle={styles.tabTextContainerStyle}
      tabTextContainerActiveStyle={styles.tabTextContainerActiveStyle}
      tabTextStyle={styles.tabTextStyle}
      tabTextActiveStyle={styles.tabTextActiveStyle}
      tabWrapperStyle={styles.tabWrapperStyle}
      tabsContainerStyle={styles.tabsContainerStyle}
      scrollEvent={event([{nativeEvent: {contentOffset: {y: scrollY.y}}}], {
        useNativeDriver: false,
      })}
    />
  );
};
export default CutomHeaderScreen;
