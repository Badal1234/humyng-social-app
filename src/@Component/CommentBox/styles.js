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
    color: 'white',
    borderWidth: 0.1,
    borderColor: LightGrey,
    borderRadius: moderateScale(30),
    backgroundColor:'#000',
    width:width-50
  },
  icon: {
    paddingLeft: moderateScale(10),
    paddingTop: moderateScale(12),
  },
});
