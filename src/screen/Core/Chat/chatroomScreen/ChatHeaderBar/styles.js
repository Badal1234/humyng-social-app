import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import Config from '@Config/default';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary, Secondary},
  font: {PrimaryF, light, regular, danceScript, galada, extralight},
} = Config;
const width = Dimensions.get("window").width
export const styles = StyleSheet.create({
  header: {
    width: width,
    height: moderateScale(40),
    backgroundColor: '#2b2c33', 
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:moderateScale(10)
  },
  profile:{
    height:moderateScale(30),
    width:moderateScale(30),
    borderRadius:moderateScale(15),
    backgroundColor:'white',
    marginLeft:moderateScale(20)
  },
  name:{
    fontSize:moderateScale(16),
    color:'white',
    fontFamily:regular,
    marginLeft:moderateScale(5)
  }
});
