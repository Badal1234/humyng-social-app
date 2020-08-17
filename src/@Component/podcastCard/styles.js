import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import Config from '@Config/default';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary, Secondary},
  font: {PrimaryF, light},
} = Config;

export const styles = StyleSheet.create({
  card: {
    width: moderateScale(120),
    height: moderateScale(90),
    backgroundColor: '#874dc6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(5),
    borderWidth: 2,
    marginRight: moderateScale(10),
  },
  image:{
    width: moderateScale(120),
    height: moderateScale(90),
  },
  container:{
      
  }
});
