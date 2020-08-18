import {scale, moderateScale} from 'react-native-size-matters';
import Config from '@Config/default';
import {StyleSheet} from 'react-native';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary},
  font: {PrimarF},
} = Config;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#874dc6',
    width: moderateScale(50),
    height: moderateScale(20),
    borderRadius: moderateScale(20),
  },
  toogle: {
    height: moderateScale(20),
    width: moderateScale(20),
    backgroundColor: 'white',
    borderRadius: moderateScale(10),
  },
});
