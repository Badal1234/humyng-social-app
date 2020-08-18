import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import Config from '@Config/default';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary, Secondary},
  font: {PrimaryF, light, regular, danceScript, galada, extralight},
} = Config;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Primary,
    paddingLeft: moderateScale(20),
    paddingRight: moderateScale(20),
  },
  input: {
    borderWidth: 1,
    borderColor: '#874dc6',
    width: '90%',
    borderRadius: moderateScale(10),
    color: '#ddccef',
    marginBottom: moderateScale(25),
    marginTop: moderateScale(25),
    fontFamily: regular,
  },
  prize: {
    color: '#ddccef',
  },
  modal: {
    height: moderateScale(200),
    width: moderateScale(230),
    borderColor: '#874dc6',
    borderWidth: 2,
    backgroundColor: Primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  currency: {
    color: 'white',
    fontSize: moderateScale(24),
    fontFamily: regular,
  },
  header: {
    color: '#874dc6',
    fontSize: moderateScale(45),
    fontFamily: danceScript,
  },
  text: {
    color: 'white',
    fontFamily: regular,
  },
  poster: {
    borderWidth: 1,
    borderColor: '#874dc6',
    height: moderateScale(120),
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
