import {StyleSheet} from 'react-native';
import {scale, moderateScale} from 'react-native-size-matters';
import Config from '@Config/default';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary,Secondary},
  font: {PrimaryF,light},
} = Config;


export const styles = StyleSheet.create({
  upperButton: {
    flexDirection: 'row',
    width: moderateScale(100),
    height: scale(35),
    backgroundColor: Black,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(40),
  },
  text1: {
    color: 'white',
    paddingRight: moderateScale(5),
  },
  icon: {
    marginRight: moderateScale(20),
  },
  container:{
marginLeft:moderateScale(10)
  },
  textinput:{
    width:moderateScale(40),
    height:moderateScale(40),
    borderWidth:0.5,
    textAlign:"center",
    marginTop:moderateScale(40),
    marginRight:moderateScale(20)
  },
  otp:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  text2:{
    fontFamily:PrimaryF,
    fontSize:20,
    paddingTop:moderateScale(20),
    letterSpacing:1,
    fontWeight:'bold'
  },
  button:{
    paddingTop:moderateScale(100)
  },
  input:{
    borderColor:Primary,
    borderBottomWidth:2,
    width:moderateScale(120),
    fontFamily:PrimaryF,
    fontSize:moderateScale(30),
    color:Secondary,
  },
  resend:{
    marginTop:moderateScale(40),
    flexDirection:'row'

  },
  text:{
    fontSize:moderateScale(14),
    color:Secondary,
    marginLeft:moderateScale(4),
    fontFamily:light
  }
})