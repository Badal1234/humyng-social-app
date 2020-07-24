import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import Config from '@Config/default';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary, Secondary},
  font: {PrimaryF, light},
} = Config;

export const styles = StyleSheet.create({
  search: {
    width: moderateScale(250),
    borderBottomWidth:0.3
    
  },
  searchcont: {
    flexDirection: 'row',
    marginLeft:moderateScale(20)
  },
});
