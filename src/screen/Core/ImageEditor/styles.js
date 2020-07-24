import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import Config from '@Config/default';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary, Secondary},
  font: {PrimaryF, light},
} = Config;

const width = Dimensions.get('window').width;
const height = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
  image: {
    height: height,
    width: width,
  },
  text: {
    position: 'absolute',
    justifyContent:'center',
    alignItems:'center'
  },
  input: {
      borderBottomColor:Primary,
      borderBottomWidth:1,
  },
});
