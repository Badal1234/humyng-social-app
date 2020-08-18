import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Config from '@Config/default';
import {ResourceGroups} from 'aws-sdk';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary, Secondary},
  font: {PrimaryF, light, regular,extralight},
} = Config;
const width = Dimensions.get('window').width;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Primary,
    paddingLeft:moderateScale(10),
    paddingRight:moderateScale(10)
  },
  text: {
    color: 'white',
    letterSpacing: 1,
    fontFamily: extralight,
    marginLeft: moderateScale(5),
    fontWeight:'200'
  },
  username: {
    color: '#6a79f2',
  },
  name: {
    color: 'white',
    fontFamily: PrimaryF,
    marginRight: moderateScale(10),
  },
  image: {
    height: moderateScale(40),
    width: moderateScale(40),
  },
  commentcontainer: {
    flexDirection: 'row',
    marginTop: moderateScale(50),
  },
  replycontainer: {
    marginLeft: moderateScale(60),
    flexDirection: 'row',
    marginTop: moderateScale(10),
  },
  inputBox: {
    backgroundColor: '#2b2b29',
    justifyContent: 'flex-end',
    bottom: moderateScale(0),
    position: 'absolute',
    height: moderateScale(50),
    left: 0,
    right: 0,
    alignItems:'center'
  },
});
