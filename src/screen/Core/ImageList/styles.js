import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import Config from '@Config/default';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary, Secondary},
  font: {PrimaryF, light},
} = Config;

export const styles = StyleSheet.create({
  search: {
    paddingHorizontal: moderateScale(24),
    borderWidth: 0.2,
    borderRadius: moderateScale(40),
    marginTop: moderateScale(20),
    marginBottom: moderateScale(20),
  },
});
