import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import Config from '@Config/default';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary, Secondary},
  font: {PrimaryF, light, regular},
} = Config;
const width = Dimensions.get('window').width
export const styles = StyleSheet.create({
  title: {
      backgroundColor:'white',
      height:40,
      width:50,
      marginTop:moderateScale(100)
  },
  container:{
      flex:1,
      backgroundColor:Primary
  }

});
