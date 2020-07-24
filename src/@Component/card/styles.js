/* eslint-disable no-unused-vars */
import {scale, moderateScale} from 'react-native-size-matters';
import Config from '@Config/default';
import {StyleSheet, Dimensions} from 'react-native';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary, Secondary},
  font: {PrimarF, regular},
} = Config;

const width = Dimensions.get('window').width;
export const styles = StyleSheet.create({
  container: {
    marginLeft: moderateScale(10),
    marginRight: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: width - moderateScale(200),
    height: moderateScale(110),
    borderWidth: 0.1,
    marginTop: moderateScale(20),
    elevation: 10,
    backgroundColor: 'white',
    borderRadius: moderateScale(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width - moderateScale(0),
    height: moderateScale(390),
  },
  cardtype: {
    height: moderateScale(25),
    width: moderateScale(28),
    backgroundColor: Primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: moderateScale(3),
    marginTop: moderateScale(32),
    borderRadius: moderateScale(9),
    opacity: 0.7,
  },
  profileimage: {
    height: moderateScale(30),
    width: moderateScale(30),
    borderRadius: moderateScale(15),
  },
  profile: {
    height: moderateScale(30),
    width: moderateScale(30),
    marginLeft: moderateScale(10),
  },
  name: {
    marginTop: moderateScale(7),
    fontFamily: regular,
    marginLeft: moderateScale(6),
  },
  button: {
    paddingLeft: moderateScale(20),
    paddingRight: moderateScale(50),
    borderRightWidth: 0.6,
  },
  content: {
    justifyContent: 'center',
    alignContent: 'center',
  },
});
