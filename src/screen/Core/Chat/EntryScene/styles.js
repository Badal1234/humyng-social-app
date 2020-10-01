import {StyleSheet,Dimensions} from 'react-native';
import {scale, moderateScale} from 'react-native-size-matters';
import Config from '@Config/default';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary},
  font: {PrimaryF, light,regular},
} = Config;

const width = Dimensions.get("window").width

export const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
    backgroundColor: Primary,
  },
  chatBody:{
      height:moderateScale(60),
      flexDirection:'row',
      width:width,
      alignItems:'center'

  },
  separator:{
      width:width - moderateScale(50),
      height:moderateScale(0.4),
      backgroundColor:'white',
      alignSelf:'flex-end',
      opacity:0.3
  },
  profile:{
      width:moderateScale(50),
      height:moderateScale(50),
      borderRadius:moderateScale(25),
      backgroundColor:'#1ecbe1'
  },
  username:{
      color:'white',
      fontSize:moderateScale(16),
      fontFamily:light
  },
  message:{
      color:'white',
      fontSize:moderateScale(13),
      fontFamily:light,
      opacity:0.7
  },
  box:{
      marginLeft:moderateScale(20),
      paddingTop:moderateScale(10),
      paddingBottom:moderateScale(10)
  },
  header:{
    width:width,
    height:moderateScale(50),
    backgroundColor:'#2b2c33',
    marginBottom:moderateScale(10),
    borderBottomWidth:moderateScale(5),
    borderBottomColor:'#323232'

  },
  chat:{
    fontSize:moderateScale(22),
    color:'white',
    fontFamily:regular,
    padding:moderateScale(10)
  },
  division:{
    justifyContent:'space-around',
    width:width
  },
  bar:{
    borderBottomWidth:1,
   borderBottomColor:'white'
  },
  text:{
    fontSize:moderateScale(17),
    color:'white',
    fontFamily:light
  },
  plus:{
    padding:moderateScale(20)
  },
  image:{
    width:moderateScale(50),
    height:moderateScale(50),
    borderRadius:moderateScale(10)
  },
  upper:{
    flexDirection:'row',
    width:width-moderateScale(50),
    justifyContent:'space-between'
  },
  time:{
    color:'white',
    paddingRight:moderateScale(30)
    
  }
});
