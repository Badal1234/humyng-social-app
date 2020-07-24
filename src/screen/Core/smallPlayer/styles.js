import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import Config from '@Config/default';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary, Secondary},
  font: {PrimaryF, light},
} = Config;
const width = Dimensions.get('window').width;
export const styles = StyleSheet.create({
  container: {
    width: width,
    height: moderateScale(90),
    backgroundColor:'white'
  },
});
