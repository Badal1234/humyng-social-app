import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import Config from '@Config/default';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary, Secondary},
  font: {PrimaryF, light},
} = Config;

export const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: Primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer: {
    height: moderateScale(210),
    width: moderateScale(210),
    borderRadius: moderateScale(105),
    backgroundColor: 'black',
    elevation: 8,
    shadowColor: 'white',
    shadowRadius: moderateScale(20),
    shadowOffset: {
      height: 4,
      width: 3,
    },
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    fontSize: 34,
    color: 'white',
  },
  lower: {
    marginTop: moderateScale(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  micro: {
    marginLeft: moderateScale(70),
    marginRight: moderateScale(70),
    paddingTop: moderateScale(40),
  },
  modal: {
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
  },
  list: {
    backgroundColor: 'white',
    height: moderateScale(300),
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    paddingTop: moderateScale(20),
  },
  name: {
    fontSize: 16,
    padding: moderateScale(10),
    fontFamily: PrimaryF,
    color: Primary,
  },
  save:{
    color:Secondary,
    fontSize:moderateScale(23),
    fontFamily:PrimaryF
  },
  buttom:{
    height:moderateScale(40),
    width:moderateScale(80),
    borderRadius:moderateScale(20),
    backgroundColor:'white',
    alignItems:'center',
    marginTop:moderateScale(20)
  }
});
