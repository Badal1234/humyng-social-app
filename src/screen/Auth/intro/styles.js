import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Config from '@Config/default';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary},
  font: {PrimaryF, light,galada,quicksand,danceScript},
} = Config;
const height = Dimensions.get('screen').height;
export const styles = StyleSheet.create({
  text1: {
    marginLeft: moderateScale(20),
    fontFamily: PrimaryF,
  },
  text2: {
    fontSize: 40,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#fffcea',
    fontFamily: PrimaryF,
  },
  text3: {
    paddingTop: moderateScale(10),
    paddingLeft: moderateScale(20),
    paddingBottom: moderateScale(20),
  },
  text4: {
    fontSize: 15,
    color: DarkGrey,
    fontWeight: '500',
  },
  container: {
    flex: 1,
  },
  button: {
    width: moderateScale(130),
    height: moderateScale(40),
    borderRadius: moderateScale(30),
    backgroundColor: '#fffcea',
    marginLeft: moderateScale(20),
    marginLeft: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  last: {
    paddingTop: 20,
    paddingBottom: moderateScale(50),
    flexDirection: 'row',
  },
  icon: {
    width: moderateScale(30),
    height: moderateScale(30),
    borderRadius: moderateScale(15),
    backgroundColor: Black,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: moderateScale(20),
  },
  sign: {
    color: 'white',
    fontSize: 15,
  },
  bottom: {
    marginTop: moderateScale(height / 2),
  },
  gradientStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textStyle: {
    color: '#fff',
    fontSize: moderateScale(40),
    fontWeight: '500',
    fontFamily:danceScript
  },
});
