/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Animated,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Status from '@Component/StatusBar';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import Config from '@Config/default';
import {moderateScale} from 'react-native-size-matters';
import SmallCard from '@Component/CardView';
import SmallPlayer from '../smallPlayer';
import * as userAuthActions from '@Actions/user.authAction';
import {connect} from 'react-redux';
import {getPosts} from '../../../Api/Post';
import {setContentData} from '../../../redux/Action/user.authAction';
const {
  Colors: {LightGrey, Primary, Secondary},
} = Config;
const width = Dimensions.get('window').width;
const video = ['Recents', 'Popular', 'generes'];
const types = ['Recent', 'Popular', 'Video', 'Photo', 'Story', 'Podcast'];

const Home = ({navigation, setContentData, Items}) => {
  const [status, set_status] = useState(false);
  const [marker, show_marker] = useState(true);
  const [category, set_category] = useState(types);
  const [gener, set_gener] = useState(['horror', 'comic', 'shayari']);
  useEffect(() => {
    getPosts({}).then(data => {
      console.log(data)
      setContentData({
        Items: data.Items,
      });
    });
  }, [setContentData]);

  const showStatus = () => {
    set_status(true);
  };
  const value = useState(new Animated.Value(moderateScale(20)))[0];
  const opaci = useState(new Animated.Value(0.2))[0];

  const value1 = types.map(
    (tab, index) => useState(new Animated.Value(index === 0 ? 0.9 : 0.4))[0],
  );
  const value2 = new Animated.Value(0);
  console.log(typeof value1[0]);
  console.log(value1);
  const sum = index => {
    var sum1 = 0;
    for (var i = 0; i < index; i++) {
      sum1 += 20 + types[i].length * moderateScale(7);
    }

    return sum1;
  };

  const translate = (index, type) => {
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
  };

  const bodyLeft = data => {
    return (
      <View style={{marginTop: 20, marginLeft: 20}}>
        <SmallCard />
      </View>
    );
  };

  const renderGener = item => {
    return (
      <TouchableOpacity onPress={() => (video[-1] = item)}>
        <Text style={styles.genertext}>{item.toUpperCase()}</Text>
      </TouchableOpacity>
    );
  };

  const statusModal = () => {
    return (
      <Modal
        isVisible={status}
        animationIn={'flipInY'}
        animationOut={'flipOutY'}
        animationOutTiming={1000}
        animationInTiming={1000}
        backdropOpacity={0}
        style={{padding: 0, margin: 0, position: 'absolute', bottom: 0}}>
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
              <Icon name={'angle-double-down'} color={LightGrey} size={35} />
            </TouchableOpacity>
            <Status />
          </LinearGradient>
        </View>
      </Modal>
    );
  };

  return (
    <LinearGradient
      colors={[Secondary, Primary]}
      end={{x: 0.5, y: 0.6}}
      start={{x: 0.8, y: 0.9}}
      style={{flex: 1}}>
      <View>
        <View style={styles.container}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={styles.feed}>Feed</Text>
            </View>
            <TouchableOpacity onPress={() => showStatus()}>
              <Image />
            </TouchableOpacity>
          </View>
          <View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {category.map((type, index) => (
                <View key={index}>
                  <TouchableOpacity onPress={() => translate(index, type)}>
                    <Animated.View
                      style={{opacity: value1[index], flexDirection: 'row'}}>
                      <Text style={styles.type}>{type}</Text>
                      {type == 'generes' ? (
                        <Icon name={'chevron-down'} size={17} color={'white'} />
                      ) : null}
                    </Animated.View>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
            <Animated.View
              style={{
                width: (width - 200) / 5 + 30,
                height: 3,
                borderRadius: 5,
                backgroundColor: 'white',
                transform: [{translateX: value}],
              }}
            />
          </View>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {statusModal()}
          </View>
        </View>
        <View style={{marginBottom: moderateScale(120)}}>
          <FlatList
            data={Items}
            renderItem={({item}) => (
              <View style={{marginBottom: moderateScale(5)}}>
                <SmallCard data={item} navigation={navigation} />
              </View>
            )}
            key={item => item.id}
          />
        </View>
      </View>
      <Modal
        isVisible={false}
        style={{padding: 0, margin: 0, position: 'absolute', bottom: 0}}>
        <View style={styles.gener}>
          <FlatList
            data={gener}
            renderItem={({item, index}) => renderGener(item, index)}
          />
        </View>
      </Modal>
    </LinearGradient>
  );
};

const mapStateToProps = state => {
  return {
    isLogedin: state.auth.isLogedin,
    isUserFirstTime: state.auth.isUserFirstTime,
    uid: state.auth.uid,
    token: state.auth.token,
    Items: state.file.Items,
  };
};
const mapDispatchToProp = dispatch => ({
  setContentData: userData =>
    dispatch(userAuthActions.setContentData(userData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProp,
)(Home);
