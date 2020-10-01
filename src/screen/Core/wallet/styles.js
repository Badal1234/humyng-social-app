import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import Config from '@Config/default';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary, Secondary},
  font: {PrimaryF, light, regular},
} = Config;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Primary,
  },
  text1: {
    color: 'white',
    fontFamily: regular,
    fontSize: 18,
  },
  text2: {
    color: 'white',
    fontFamily: light,
    fontSize: 16,
  },
  input: {
    borderColor: '#2e1a3c',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth:moderateScale(10),
    color:'white',
    fontSize:moderateScale(28),
    fontFamily:PrimaryF
  },
  button: {
    height: moderateScale(60),
    justifyContent: 'center',
    backgroundColor: '#2e1a3c',
    alignItems: 'center',
    marginBottom: moderateScale(20),
    borderBottomColor: 'black',
    borderBottomWidth: 3,
  },
  upper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: moderateScale(120),
    alignItems: 'center',
  },
  pad:{
      color:'white',
      fontSize:moderateScale(31),
      padding:moderateScale(40),
      fontFamily:PrimaryF
     
  }
});
