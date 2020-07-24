import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import Config from '@Config/default';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary, Secondary},
  font: {PrimaryF, light, regular, danceScript, galada, extralight},
} = Config;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  border: {
    borderWidth: 0.5,
    borderColor: LightGrey,
    height: moderateScale(35),
    width: '90%',
    borderRadius: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    backgroundColor: Primary,
    flex: 1,
  },
  container2: {
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontFamily: light,
    marginLeft: moderateScale(10),
  },
  text2: {
    color: 'white',
    opacity: 0.6,
    marginRight: moderateScale(5),
  },
  image: {
    width: width,
    height: height / 2 - moderateScale(100),
  },
  time: {
    color: 'white',
    fontFamily: PrimaryF,
  },
  name: {
    color: 'white',
    fontFamily: PrimaryF,
  },
  prize: {
    color: 'white',
    fontFamily: PrimaryF,
    opacity: 0.6,
  },
  textcontainer: {
    marginTop: moderateScale(width / 2 - 50),
    marginLeft: moderateScale(20),
  },
  headerCotainer: {
    width: '100%',
    paddingHorizontal: 24,
    paddingTop: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerImage: {
    width: 20,
    height: 20,
  },
  headerText: {
    color: 'white',
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
    fontSize: 40,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  tabTextContainerStyle: {
    marginRight: moderateScale(10),
    marginLeft: moderateScale(10),
  },
  tabTextContainerActiveStyle: {
    borderWidth: 1,
    borderBottomColor: DarkGrey,
  },
  tabTextStyle: {
    fontSize: 16,
    lineHeight: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: 'white',
    opacity: 0.4,
    fontFamily: regular,
  },
  tabTextActiveStyle: {
    fontSize: 16,
    lineHeight: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: 'white',
    opacity: 0.9,
    fontFamily: regular,
  },
  tabWrapperStyle: {
    paddingVertical: 10,
  },
  tabsContainerStyle: {
    paddingHorizontal: 10,
  },
  contentContiner: {
    height: height,
    padding: 10,
  },
  contentText: {
    fontSize: 16,
  },
  title: {
    color: 'white',
    fontFamily: regular,
    fontSize: moderateScale(25),
  },
  description: {
    color: 'white',
    opacity: 0.6,
    fontFamily: light,
  },
  info: {
    color: 'white',
    fontFamily: regular,
  },
  logo: {
    height: moderateScale(50),
    width: moderateScale(50),
  },
  game: {
    flexDirection: 'row',
    borderBottomColor: LightGrey,
    borderBottomWidth: 0.6,
    marginTop: moderateScale(10),

  },
  prize:{
    fontFamily:regular,
    fontSize:moderateScale(24),
    color:'white'
  },
  rule:{
    color: 'white',
    opacity: 0.6,
    fontFamily: light,
  },
  prizeContainer:{
    backgroundColor: '#334761',
    height:moderateScale(40),
    marginBottom:moderateScale(5),
    width:'85%',
    borderRadius:moderateScale(10),
    flexDirection:'row',
    justifyContent:'space-between'

  },
  position:{
    color:'white',
    fontSize:moderateScale(16),
    marginRight:moderateScale(20),
    fontFamily:regular

  }
});
