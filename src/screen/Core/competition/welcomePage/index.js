/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Animated,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import Info from './Info';
import DesignButton from '@Component/designButton';
import StickyParallaxHeader from '@Component/AnimatedHeader';
import {styles} from './styles';
import Config from '@Config/default';
import PlayerScreen from './players';
import MatchScreen from './match';
import RazorpayCheckout from 'react-native-razorpay';
import {
  RewardedAd,
  RewardedAdEventType,
  TestIds,
} from '@react-native-firebase/admob';
import {
  getDetailsbyId,
  getPlayers,
  makeParticipate,
  createPayment,
  paymentVerify,
} from '../../../../Api/tournament';
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
  const [data, set_data] = useState();
  const [players, set_player] = useState();
  const [start, set_start] = useState(false);
  const id = navigation.getParam('id');

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

  useEffect(() => {
    getDetailsbyId({id: id})
      .then(data_tour => set_data(data_tour.data))
      .catch(err => console.log(err));
    console.log(data);
  }, []);

  useEffect(() => {
    getPlayers({id: id})
      .then(data_tour => set_players(data_tour))
      .catch(err => console.log(err));
    console.log(players);
  }, []);

  const renderContent = x => {
    return (
      <View style={styles.contentContiner}>
        <Text style={styles.contentText}>{x}chh</Text>
      </View>
    );
  };

 
  const checkout = ({order_id, currency, amount}) => {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: currency,
      key: 'rzp_test_0eAquAvAWKjVly',
      amount: amount,
      name: 'Acme Corp',
      order_id: order_id, //Replace this with an order_id created using Orders API. Learn more at https://razorpay.com/docs/api/orders.
      prefill: {
        email: 'gaurav.kumar@example.com',
        contact: '9191919191',
        name: 'Gaurav Kumar',
      },
      theme: {color: '#53a20e'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        paymentVerify({...data, tournament_id: id})
          .then(() => {
            navigation.navigate('AddName',{tournament_id:id})

          })
          .catch(err => set_start(false));
      })
      .catch(error => {
        set_start(false);
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };

  const renderJoin = () => {
    set_start(true);
    if (data.prize) {
      createPayment({id: id}).then(({data}) => {
        console.log(data);
        checkout({
          order_id: data.id,
          currency: data.currency,
          amount: data.amount,
        });
      });
    } else {
      navigation.navigate('AddName',{tournament_id:id})
    }
  };

  const renderBody = () => {
    return (
      <View style={styles.container2}>
        <View>
          <Text style={styles.prize}>{data ? data.prize_pool : null}</Text>
        </View>
        <View>
          <DesignButton
            text1={'paticipate'}
            text2={'participated'}
            tournament_id={data ? data.tournament_id : null}
            status={start}
            onPress={() => renderJoin()}
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
    <>
      <StatusBar backgroundColor={'transparent'} />
      <ActivityIndicator animating={start} />
      <StickyParallaxHeader
        headerType="TabbedHeader"
        logo={{}}
        backgroundColor={Primary}
        backgroundImage={require('../../../../static/index.jpeg')}
        renderMiddle={renderBody()}
        title={data ? `${data.name}` : null}
        renderBody={title => renderContent(title)}
        
        tabs={[
          {
            title: 'Info',
            content: <Info info={data} />,
          },
          {
            title: 'Participant',
            content: (
              <PlayerScreen tournament_id={data ? data.tournament_id : null} />
            ),
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
    </>
  );
};
export default CutomHeaderScreen;
