import {scale, moderateScale} from 'react-native-size-matters';
import Config from '@Config/default';
import {StyleSheet, Dimensions} from 'react-native';
const {
  Colors: {Secondary, Primary},
  font: {light},
} = Config;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: moderateScale(90),
    height: moderateScale(30),
    borderRadius: moderateScale(20),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginLeft: moderateScale(10),
    fontFamily: light,
    color: Secondary,
    letterSpacing: 1,
  },
});
