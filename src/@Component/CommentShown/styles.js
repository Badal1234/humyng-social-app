import {scale, moderateScale} from 'react-native-size-matters';
import Config from '@Config/default';
import {StyleSheet} from 'react-native';
const {
  Colors: {Secondary, Primary},
  font: {PrimaryF, regular, light},
} = Config;

export const styles = StyleSheet.create({
  profile: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(10),
  },
  image: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(10),
  },
  name: {
    fontFamily: regular,
    fontSize: 14,
    color:'white'
  },
  comment: {
    marginRight: 2,
    flexDirection: 'row',
  },
  text: {
    marginLeft: moderateScale(10),
    color:'white'
  },
  like: {
    marginLeft: moderateScale(20),
    color:'white'
  },
  spec: {
    color: 'white',
    fontWeight: '700',

  },
  profile_reply: {
    height: moderateScale(20),
    width: moderateScale(20),
    borderRadius: moderateScale(5),
  },
  name_reply: {
    fontFamily: regular,
    fontSize: 11,
    color:'white'
  },
  reply: {},
  replytext: {
    marginLeft: moderateScale(20),
    color:'white'
  },
});
