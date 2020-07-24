import {scale, moderateScale} from 'react-native-size-matters';
import Config from '@Config/default';
import {StyleSheet, Dimensions} from 'react-native';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary, Secondary},
  font: {PrimarF, regular},
} = Config;

const width = Dimensions.get('window').width;
export const styles = StyleSheet.create({
  container: {},
  input: {
    paddingHorizontal: moderateScale(65),
    color: 'white',
    borderWidth: 0.3,
    borderColor: LightGrey,
    borderRadius: moderateScale(30),
  },
  icon: {
    paddingLeft: moderateScale(10),
    paddingTop: moderateScale(12),
  },
});
