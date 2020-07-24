import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import Config from '@Config/default';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary, Secondary},
  font: {PrimaryF, light},
} = Config;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Primary,
  },
  profile: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(50),
    justifyContent: 'center',
  },
  image: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(50),
  },
  profileContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontFamily: PrimaryF,
    fontSize: 23,
    letterSpacing: 1,
    marginTop: moderateScale(5),
    color: 'white',
  },
  bodyCard: {
    height: moderateScale(30),
    width: '85%',
    borderRadius: moderateScale(10),
    backgroundColor: '#334761',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: moderateScale(10),
  },
  object: {
    color: 'white',
    fontFamily: light,
    fontSize: 17,
    marginLeft: moderateScale(70),
  },
  icon: {
    marginLeft: moderateScale(20),
  },
  follow: {
    margin: moderateScale(20),
  },
  number: {
    height: moderateScale(50),
    width: moderateScale(50),
    borderRadius: moderateScale(25),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#334761',
  },
  bio: {
    fontSize: moderateScale(14),
    color: 'white',
    fontFamily: PrimaryF,
    marginLeft: moderateScale(20),
    marginRight: moderateScale(20),
  },
});
