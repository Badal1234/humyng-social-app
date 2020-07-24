import {scale, moderateScale} from 'react-native-size-matters';
import Config from '@Config/default';
import {StyleSheet} from 'react-native';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary},
  font: {PrimarF},
} = Config;

export const styles = StyleSheet.create({
  container: {
    height: moderateScale(50),
    width: moderateScale(50),
    borderRadius: moderateScale(25),
    borderWidth: 0.3,
    marginLeft:moderateScale(15)
  },
  image: {
    height: moderateScale(50),
    width: moderateScale(50),
    borderRadius: moderateScale(25),
   
  },
  seen:{
    position:'absolute',
    backgroundColor:LightGrey,
  }
});
