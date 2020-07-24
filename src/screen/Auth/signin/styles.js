import {StyleSheet} from 'react-native';
import {scale, moderateScale} from 'react-native-size-matters';
import Config from '@Config/default';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary},
  font: {PrimaryF, light},
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
  text2: {
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 1,
    paddingTop: moderateScale(30),
    fontFamily: PrimaryF,
  },
  container: {
    paddingLeft: moderateScale(20),
    paddingRight: moderateScale(20),
  },
  text3: {
    fontSize: 15,
    fontWeight: '200',
    letterSpacing: 1,
    paddingTop: moderateScale(20),
    fontFamily: PrimaryF,
  },
  text4: {
    fontSize: 15,
    fontWeight: '200',
    letterSpacing: 1,
    paddingTop: moderateScale(2),
    fontFamily: PrimaryF,
  },
  textInput: {
    borderBottomWidth: 0.3,
  },
  inputContainer: {
    paddingTop: moderateScale(20),
  },
  submit: {
    paddingTop: moderateScale(80),
  },
  google: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(25),
  },
  text: {
    color: Primary,
    fontFamily: light,
    marginLeft: moderateScale(5),
  },
  lower: {
    marginTop: moderateScale(10),
    flexDirection: 'row',
  },
});
