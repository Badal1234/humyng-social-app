import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import Config from '@Config/default';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary, Secondary},
  font: {PrimaryF, light},
} = Config;
export const styles = StyleSheet.create({
  profile: {
    backgroundColor: 'white',
    height: moderateScale(80),
    width: moderateScale(80),
    borderRadius: moderateScale(40),
  },
  container: {
    flex: 1,
    backgroundColor:'#05010d'
  },
  profileCont: {
    height: moderateScale(230),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: moderateScale(80),
    width: moderateScale(80),
    borderRadius: moderateScale(40),
  },
  input: {
    borderBottomColor: Secondary,
    borderBottomWidth: 1,
  },
  inputHolder:{
      margin:moderateScale(20)
  },
  button:{
      marginLeft:moderateScale(20)
  },
  modal: {
    flexDirection: 'column',
    width: moderateScale(250),
    height: moderateScale(100),
    backgroundColor: '#f5f1ed',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: moderateScale(40),
    marginBottom: moderateScale(100),
    borderWidth: 0.3,
    borderRadius: 10,
    shadowColor: LightGrey,
    elevation: 20,
  },
});
