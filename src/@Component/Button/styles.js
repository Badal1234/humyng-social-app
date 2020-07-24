import {scale, moderateScale} from 'react-native-size-matters';
import Config from '@Config/default';
import {StyleSheet} from 'react-native';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary},
} = Config;

export const styles = StyleSheet.create({
  Button: {
    width: moderateScale(320),
    height: scale(45),
    borderRadius: moderateScale(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator:{
    
  }
});
