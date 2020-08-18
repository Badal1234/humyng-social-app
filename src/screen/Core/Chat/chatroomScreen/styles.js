import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import Config from '@Config/default';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary, Secondary},
  font: {PrimaryF, light, regular, danceScript, galada, extralight},
} = Config;

export const styles = StyleSheet.create({
  input: {
    fontFamily: PrimaryF,
    backgroundColor: Primary,
    color: 'white',
    borderRadius: moderateScale(20),
    paddingHorizontal: moderateScale(10),
  },
  send: {
    justifyContent: 'center',
    marginLeft: moderateScale(5),
    marginRight: moderateScale(10),
  },
  container: {
    backgroundColor: Primary,
  },
  leftMessageContainer: {
    backgroundColor: '#46474f',
    borderRadius: moderateScale(20),
  },
  text: {
    fontFamily: light,
    color: 'white',
    fontWeight: '300',
    fontSize: moderateScale(12),
  },
  footer:{
    backgroundColor:'#46474f',
    height:moderateScale(60),
    position:'absolute'
  }
});
