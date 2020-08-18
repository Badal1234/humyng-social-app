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
    backgroundColor: Primary,
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
    height: moderateScale(100),
    borderWidth: 6,
    borderBottomColor: '#9a00ff',
    width: moderateScale(width - 50),
    marginBottom: moderateScale(40),
  },
  image: {
    width: moderateScale(width - 50),
    height: moderateScale(180),
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
  },
  gameText: {
    color: 'white',
    fontSize: moderateScale(18),
    fontFamily: regular,
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
});
