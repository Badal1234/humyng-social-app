import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import Config from '@Config/default';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary, Secondary},
  font: {PrimaryF, light},
} = Config;
const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: PrimaryF,
  },
  input: {
    width: width,
    borderWidth: 1,
  },
  color: {
    width: moderateScale(30),
    height: moderateScale(30),
    borderRadius: moderateScale(15),
    marginLeft: moderateScale(10),
  },
  modal: {
    bottom: 0,
    position: 'absolute',
    left: 0,
    right: 0,
    height: 400,
    backgroundColor: Primary,
  },
  type: {
    fontFamily: PrimaryF,
    fontSize: 16,
    margin: moderateScale(20),
  },
});
