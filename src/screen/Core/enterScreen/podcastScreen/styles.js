import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import Config from '@Config/default';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary, Secondary},
  font: {PrimaryF, light},
} = Config;
const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  header: {
    fontFamily: PrimaryF,
    color: 'white',
    fontSize: moderateScale(20),
    marginLeft: moderateScale(20),
    marginTop: moderateScale(20),
  },
  card: {
    width: moderateScale(120),
    height: moderateScale(90),
    backgroundColor: '#874dc6',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:moderateScale(5),
    borderWidth:2,
    marginRight:moderateScale(10)
    
  },
  name:{
      color:'white',
      fontFamily:light
  },
  cardDiscover:{
    width: moderateScale(width-50),
    height: moderateScale(180),
    backgroundColor: '#874dc6',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:moderateScale(5),
    borderWidth:2,
    marginRight:moderateScale(10),
    marginBottom:moderateScale(40)

  },
  image:{
    width: moderateScale(120),
    height: moderateScale(90),

  },
  wrapper:{
  }
});
