import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import Config from '@Config/default';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary, Secondary},
  font: {PrimaryF, light, regular, danceScript, galada, extralight},
} = Config;
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black'
    
  },
  input: {
    borderWidth: 1,
    borderColor: '#874dc6',
    width: '90%',
    borderRadius: moderateScale(10),
    color: '#ddccef',
    marginBottom: moderateScale(25),
    marginTop: moderateScale(25),
  },
  wrapContainer: {
    marginTop: moderateScale(height - 300),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontFamily: regular,
  },
  gameWrapper: {
    paddingBottom:moderateScale(10),
    borderWidth: 1,
    borderBottomColor: '#9a00ff',
    width: moderateScale(width),
    marginBottom: moderateScale(10),
    backgroundColor:'#252626',
    paddingTop:moderateScale(10),
    paddingLeft:moderateScale(20)
  },
  image: {
    width: moderateScale(width-10),
    height: moderateScale(180),
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
  },
  gameText: {
    color: 'white',
    fontSize: moderateScale(14),
    fontFamily: light,
  },
  gameName: {
    color: 'white',
    fontSize: moderateScale(16),
    fontFamily: regular,
  },
  timeText: {
    color: 'white',
    fontSize: moderateScale(12),
    fontFamily: light,
    opacity: 0.6,
  },
  header1: {
    color: 'white',
    fontSize: 45,
    fontFamily: regular,
  },
  search: {
    borderWidth: 1,
    borderColor: '#874dc6',
    width: '90%',
    borderRadius: moderateScale(40),
    color: '#ddccef',
    marginBottom: moderateScale(25),
    marginTop: moderateScale(25),
    height: moderateScale(50),
    flexDirection: 'row',
    paddingLeft: moderateScale(20),
  },
  inputbar: {
    width: '90%',
    color: 'white',
    height: moderateScale(50),
  },
  header2: {
    color: 'white',
    opacity: 0.5,
  },
  game: {
    color: 'white',
  },
  header3: {
    flexDirection: 'row',
    backgroundColor: '#070117',
    backfaceVisibility: 'hidden',
    height: moderateScale(40),
  },
  wrapper: {
    alignItems: 'center',
  },
  icon: {
    height: moderateScale(20),
    width: moderateScale(20),
  },
  host: {
    backgroundColor: '#874dc6',
    width: '90%',
    height: moderateScale(50),
    justifyContent:'center',
    alignItems:'center',
    borderRadius:moderateScale(10)
  },
  hostText: {
    fontSize: moderateScale(20),
    color: 'white',
    fontFamily:regular,
    letterSpacing:1
  },
  Adcontainer:{
    backgroundColor:'#823ac5',
    borderRadius:moderateScale(10)
  }
});
