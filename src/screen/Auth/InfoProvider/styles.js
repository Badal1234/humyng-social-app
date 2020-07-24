import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import Config from '@Config/default';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary, Secondary},
  font: {PrimaryF},
} = Config;

export const styles = StyleSheet.create({
  profile: {
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: moderateScale(40),
    borderWidth: 0.5,
    marginTop: moderateScale(60),
    alignItems: 'center',
    justifyContent: 'center',
    padding: moderateScale(5),
  },
  image: {
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: moderateScale(40),
  },
  photoContainer: {
    height: moderateScale(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    flexDirection: 'column',
    width: moderateScale(250),
    height: moderateScale(100),
    backgroundColor: '#f5f1ed',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: moderateScale(40),
    marginBottom: moderateScale(100),
    borderWidth: 0.3,
    borderRadius: 10,
    shadowColor: LightGrey,
    elevation: 20,
  },
  modaltext: {
    fontFamily: 'Marcellus-Regular',
    fontWeight: '600',
    fontSize: 14,
  },
  input: {
    borderBottomWidth: 1.5,
    paddingTop: moderateScale(10),
    marginTop: moderateScale(25),
    borderColor: Secondary,
    marginLeft:moderateScale(20),
    marginRight:moderateScale(20)
  },
  container: {
    backgroundColor:'#fff',
    flex:1
  },
  date: {
    height: moderateScale(70),
    borderBottomColor: Secondary,
    borderBottomWidth: 2,
    paddingTop: moderateScale(40),
    marginLeft:moderateScale(20),
    marginRight:moderateScale(20)
  },
  calendarBox: {},
  calender: {
    width: moderateScale(310),
    backgroundColor: '#f5f1ed',
    marginLeft: moderateScale(10),
  },
  save: {
    backgroundColor: '#f5f1ed',
    width: moderateScale(60),
    alignItems: 'center',
    marginLeft: moderateScale(127),
    marginTop: moderateScale(10),
    borderRadius: 20,
  },
  savetext: {
    fontFamily: 'Marcellus-Regular',
    fontSize: 20,
  },
  button: {
    marginTop: moderateScale(150),
    marginLeft:moderateScale(20)
  },
  upper: {
    marginTop: moderateScale(20),
    fontFamily: PrimaryF,
    fontWeight: '900',
    fontSize: 20,
    color: Secondary,
  },
});
