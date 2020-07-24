import {scale, moderateScale} from 'react-native-size-matters';
import Config from '@Config/default';
import {StyleSheet, Dimensions} from 'react-native';
const {
  Colors: {Secondary, Primary, LightGrey,DarkGrey},
  font: {light},
} = Config;

export const styles = StyleSheet.create({
  text: {
    color: 'white',
    justifyContent: 'flex-end',
  },
  container: {},
  expand: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: LightGrey,
    borderBottomWidth:1,
    borderTopWidth:0.7,
    borderTopColor:DarkGrey,
  },
});
