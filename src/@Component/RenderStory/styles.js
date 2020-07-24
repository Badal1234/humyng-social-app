import {scale, moderateScale} from 'react-native-size-matters';
import Config from '@Config/default';
import {StyleSheet, Dimensions} from 'react-native';
import Modal from 'react-native-modal';
const {
  Colors: {Secondary, Primary},
  font: {PrimaryF, regular, light, extralight},
} = Config;

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  main: {flexDirection: 'column', height: height * 2, backgroundColor: Primary,width:width},
  container: {
    width: width - moderateScale(0),
    marginLeft: moderateScale(0),
    borderRadius: moderateScale(20),
  },
  video: {
    width: width,
  },
  pause: {
    marginLeft: moderateScale(160),
    paddingTop: moderateScale(30),
  },
  progressbar: {
    width: width - 100,
    marginTop: moderateScale(390),
    marginLeft: moderateScale(50),
    marginRight: moderateScale(50),
  },
  lefttap: {
    width: moderateScale(100),
    height: moderateScale(600),
    backgroundColor: 'white',
  },
  videowrapper: {
    flexDirection: 'column',
    borderBottomLeftRadius: 20,
  },
  second: {},
  audio: {
    width: 0,
    height: 0,
  },
  title: {
    fontSize: 18,
    fontFamily: regular,
    letterSpacing: 1,
    color: 'white',
    marginLeft: moderateScale(20),
  },
  description: {
    color: 'white',
    fontFamily: light,
  },
  time: {
    color: 'white',
    fontFamily: extralight,
    fontSize: 10,
    marginLeft: moderateScale(20),
  },
  decsc: {
    marginLeft: moderateScale(20),
    marginTop: moderateScale(10),
  },
  bottom: {},
  commentbox: {
    position: 'absolute',
    marginTop: moderateScale(height - 100),
    backgroundColor: Primary,
    width: width,
    height: moderateScale(70),
    paddingTop: moderateScale(10),
  },
  image: {
    height: moderateScale(30),
    width: moderateScale(30),
    borderRadius: moderateScale(15),
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: moderateScale(5),
    width: '100%',
    backgroundColor: Primary,
    height: moderateScale(40),
    borderBottomLeftRadius: moderateScale(20),
  },
});
