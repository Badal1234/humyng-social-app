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
    marginLeft: moderateScale(5),
    marginRight: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: moderateScale(110),
    height: moderateScale(70),
    borderWidth: 0.1,
    marginTop: moderateScale(5),
    elevation: 10,
    borderRadius: moderateScale(15),
    justifyContent: 'center',
    alignItems: 'center',
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
