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
      width:width

  },
  separator:{
      width:width - moderateScale(50),
      height:moderateScale(1),
      backgroundColor:'#1ecbe1',
      alignSelf:'flex-end'
  },
  profile:{
      width:moderateScale(50),
      height:moderateScale(50),
      borderRadius:moderateScale(25),
      backgroundColor:'#1ecbe1'
  },
  username:{
      color:'white',
      fontSize:moderateScale(20),
      fontFamily:regular
  },
  message:{
      color:'white',
      fontSize:moderateScale(15),
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
    height:moderateScale(80),
    backgroundColor:'#1ecbe1',
    marginBottom:moderateScale(10)

  },
  chat:{
    fontSize:moderateScale(30),
    color:'white',
    fontFamily:regular
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
  }
});
