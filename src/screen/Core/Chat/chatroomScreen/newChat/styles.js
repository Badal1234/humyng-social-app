import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import Config from '@Config/default';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary, Secondary},
  font: {PrimaryF, light, regular, danceScript, galada, extralight},
} = Config;
const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  input: {
    width: width - moderateScale(50),
    fontSize:moderateScale(15),
    color:'white'

  },
  inputContainer:{
      flexDirection:'row',
      backgroundColor:'#080728',
      height:moderateScale(40),
      borderRadius:moderateScale(20),
      color:'white'
     
  },
  container:{
      flex:1,
      backgroundColor:'black'
  },
  user:{
      
      paddingBottom:moderateScale(5),
      flexDirection:'row',
      alignItems:'center'
  },
  image:{
      width:moderateScale(50),
      height:moderateScale(50),
      borderRadius:moderateScale(19),
      marginRight:moderateScale(20),
  },
  name:{
      color:'white',
      fontSize:moderateScale(14),
      fontFamily:regular

  },
  icon:{
    alignItems:'center',
    justifyContent:'center',
    marginLeft:moderateScale(20),
  },
  header:{
    width:width,
    height:moderateScale(50),
    backgroundColor:'#2b2c33',
    marginBottom:moderateScale(10),
    borderBottomWidth:moderateScale(5),
    borderBottomColor:'#323232',
    flexDirection:'row',
    alignItems:'center',
    

  },
  newMessage:{
    fontSize:moderateScale(17),
    color:'white',
    
  },
  left:{
    marginRight:moderateScale(90),
    marginLeft:moderateScale(30)
  }

});
