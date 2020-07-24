/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScreenHeader from '@Component/ScreenHeader';
import Status from '@Component/StatusBar';
import {useSafeArea} from 'react-native-safe-area-context';
import Modal from 'react-native-modal';
import Card from '@Component/card';
import LinearGradient from 'react-native-linear-gradient';
import Config from '@Config/default';
import {moderateScale} from 'react-native-size-matters';
const {
  Colors: {LightGrey, Primary, Secondary},
} = Config;
const width = Dimensions.get('window').width;
const video = [
  'Recents',
  'Popular',
  'comedy',
  'motivation',
  'sports',
  'movie',
  'other',
];
const types = ['Recent', 'Popular', 'Video', 'Photo', 'Story', 'Podcast'];
export default function Home({navigation}) {
  const [status, set_status] = useState(false);
  const [marker, show_marker] = useState(true);
  const [category, set_category] = useState(types);
  const showStatus = () => {
    set_status(true);
  };
  const value = useState(new Animated.Value(moderateScale(20)))[0];
  const opaci = useState(new Animated.Value(0.2))[0];

  const value1 = types.map(
    (tab, index) => useState(new Animated.Value(index === 0 ? 0.9 : 0.2))[0],
  );
  const value2 = new Animated.Value(0);
  console.log(typeof value1[0]);
  console.log(value1);
  const sum = index => {
    var sum1 = 0;
    for (var i = 0; i < index; i++) {
      sum1 += 20 + types[i].length * 8;
    }

    return sum1;
  };

  const translate = (index, type) => {
    if (type == 'Video') {
      set_category(video);
    } else {
      Animated.sequence([
        ...value1.map(value3 =>
          Animated.timing(value3, {
            toValue: 0.3,
            duration: 30,
            useNativeDriver: true,
          }),
        ),
        Animated.parallel([
          Animated.timing(value, {
            toValue: sum(index),
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(value1[index], {
            toValue: 1,
            duration: 100,
            useNativeDriver: true,
          }),
        ]),
      ]).start();
    }
  };

  return (
    <LinearGradient
      colors={[Primary, Secondary]}
      end={{x: 0.7, y: 0.9}}
      start={{x: 0.3, y: 0.8}}
      style={{flex: 1}}>
      <View>
        <View style={styles.container}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={styles.feed}>Feed</Text>
            </View>
            <TouchableOpacity onPress={() => showStatus()}>
              <Text style={styles.status}>status</Text>
            </TouchableOpacity>
          </View>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Modal
              isVisible={status}
              animationIn={'flipInY'}
              animationOut={'flipOutY'}
              animationOutTiming={1000}
              animationInTiming={1000}
              backdropOpacity={0}
              style={{padding: 0, margin: 0, position: 'absolute', bottom: 0}}
              coverScreen={true}
              >
              <View style={styles.modal}>
                <LinearGradient
                  colors={[Primary, Secondary]}
                  end={{x: 0.8, y: 0.5}}
                  start={{x: 0.2, y: 0.8}}
                  style={styles.modal}>
                  <TouchableOpacity
                    style={styles.close}
                    onPress={() => set_status(false)}
                    activeOpacity={0.2}>
                    <Icon
                      name={'angle-double-down'}
                      color={LightGrey}
                      size={35}
                    />
                  </TouchableOpacity>
                  <Status />
                </LinearGradient>
              </View>
            </Modal>
          </View>
        </View>
        <View style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row', marginTop: 30}}>
            <View>
              <Card name={'Recents'} navigation={navigation} />
            </View>
            <View>
              <Card name={'Popular'} />
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 30}}>
            <View>
              <Card name={'Image'} />
            </View>
            <View>
              <Card name={'Videos'} />
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 30}}>
            <View>
              <Card name={'Stories'} />
            </View>
            <View>
              <Card name={'Podcast'} navigation={navigation} />
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}
