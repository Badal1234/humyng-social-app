import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import Config from '@Config/default';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary, Secondary},
  font: {PrimaryF, light},
} = Config;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  container: {
    backgroundColor: Primary,
  },
  feed: {
    fontFamily: PrimaryF,
    fontSize: 18,
    fontWeight: '100',
    margin: moderateScale(5),
    marginLeft: moderateScale(20),
    letterSpacing: 1,
    color: 'white',
  },
  status: {
    fontFamily: light,
    fontSize: 12,
    marginRight: moderateScale(20),
    marginTop: moderateScale(20),
    color: 'white',
  },
  modal: {
    width: width-50,
    backgroundColor: Primary,
    borderColor: 'white',
    borderWidth: 2,
    top: 0,
    bottom:0,
    position: 'absolute',
    height: height-100,
    borderRadius: moderateScale(20),

    
  },
  close: {
    marginBottom: moderateScale(10),
    marginLeft: moderateScale(160),
  },
  closetext: {
    fontFamily: PrimaryF,
    fontSize: 16,
  },
  type: {
    fontFamily: light,
    fontSize: 13,
    marginLeft: moderateScale(15),
    color: 'white',
  },
  gener: {
    height: moderateScale(500),
    backgroundColor: 'white',
    width: width,
    borderWidth: 1,
    borderRadius: moderateScale(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  genertext: {
    fontSize: moderateScale(20),
    letterSpacing: 2,
    fontFamily: light,
  },
  underLine: {
    backgroundColor: 'white',
  },
  tab: {
    borderBottomColor: Primary,
    justifyContent: 'space-evenly',
    width: width,
    flexDirection: 'row',

    //backgroundColor:'white'
  },
  tabText: {},
  activetabText: {
    color: 'white',
    fontFamily: PrimaryF,
    fontSize: moderateScale(15),
  },
  inactivetabtext: {
    color: 'white',
    fontFamily: PrimaryF,
    fontSize: moderateScale(15),
    opacity: 0.6,
  },
  activetab: {
    borderBottomWidth: 2,
    borderColor: 'white',
  },
  header: {
    fontFamily: PrimaryF,
    color: 'white',
    fontSize: moderateScale(20),
    marginLeft: moderateScale(20),
    marginTop: moderateScale(20),
  },
  BigStory: {
   
  },
});
