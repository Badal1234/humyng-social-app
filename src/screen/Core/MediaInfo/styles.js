import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import Config from '@Config/default';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary, Secondary},
  font: {PrimaryF, light},
} = Config;
const width = Dimensions.get('window').width
export const styles = StyleSheet.create({
  inputContainer: {
    marginTop: moderateScale(10),
  },
  input: {
    borderColor: 'white',
    width: moderateScale(250),
    marginLeft:moderateScale(20)
  },
  iconholder: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: 20,
    backgroundColor: LightGrey,
    opacity: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    margin: moderateScale(2),
  },
  holder: {
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: DarkGrey,
    borderRadius: moderateScale(40),
    padding: moderateScale(2),
    marginTop: moderateScale(50),
  },
  desholder: {
    borderBottomWidth: 0.4,
    flexDirection: 'row',
    borderBottomColor: DarkGrey,
    borderRadius: moderateScale(40),
    padding: moderateScale(2),
    marginTop: moderateScale(20),
  },
  button: {
    margin: moderateScale(20),
  },
  limit: {
    marginLeft: moderateScale(120),
  },
  category: {
    borderBottomWidth: 0.4,
    marginLeft: moderateScale(20),
    marginRight: moderateScale(20),
    justifyContent:'center',
    marginTop:moderateScale(20)
  },
  text:{
    color:LightGrey,
  },
  modal:{
    height:moderateScale(300),
    backgroundColor:'white',
    width:width,
    borderRadius:moderateScale(30),
    


  }
});
