/* eslint-disable no-unused-vars */
import {scale, moderateScale} from 'react-native-size-matters';
import Config from '@Config/default';
import {StyleSheet, Dimensions} from 'react-native';
import Modal from 'react-native-modal';
const {
  Colors: {Secondary, Primary},
  font: {PrimaryF, regular, light, extralight},
} = Config;
const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  card1: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  text: {
    marginLeft: moderateScale(10),
    color: '#fff',
    fontFamily: light,
    fontSize: 13,
  },
  icon: {
    height: moderateScale(26),
    borderRadius: moderateScale(18),
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: moderateScale(10),
    marginTop: moderateScale(10),
    flexDirection: 'row',
    paddingRight: moderateScale(5),
    marginRight: moderateScale(20),
  },
  icon1: {
    height: moderateScale(26),
    width: moderateScale(26),
    borderRadius: moderateScale(13),
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: moderateScale(10),
    marginTop: moderateScale(10),
  },
  iconholder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
  },
  container: {
    margin: moderateScale(10),
  },
  name: {
    color: '#fff',
    marginLeft: moderateScale(20),
    fontFamily: light,
    fontSize: 12,
  },
  textwrapper: {
    marginTop: moderateScale(5),
    width: '91%',
  },
  image: {
    width: width,
    height: moderateScale(300),
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {
    height: moderateScale(20),
    width: moderateScale(20),
    borderRadius: moderateScale(10),
    backgroundColor: 'white',
  },
  play: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(20),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateScale(10),
  },
  num: {
    marginLeft: moderateScale(5),
    color: 'white',
    fontFamily: light,
    fontSize: 10,
  },
  iconround: {
    height: moderateScale(20),
    width: moderateScale(20),
    borderRadius: 10,
    backgroundColor: Primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#11011a',
    height: moderateScale(40),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    color: 'white',
  },
  time: {
    color: 'white',
    opacity: 0.7,
  },
  profileImage: {
    height: moderateScale(50),
    width: moderateScale(50),
  },
  comment: {
    height: moderateScale(70),
  },
  description: {
    color: '#a2afa6',
  },
  more: {
    color: 'white',
    fontFamily: regular,
  },
  commentpic: {
    height: moderateScale(20),
    width: moderateScale(20),
    borderRadius: moderateScale(10),
    marginTop: moderateScale(10),
  },
  commentBox: {
    flexDirection: 'row',
  },
  story:{
    color:'white',
    fontFamily:regular,
    
  }
});
