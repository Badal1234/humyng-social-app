import {StyleSheet} from 'react-native';
import {scale, moderateScale} from 'react-native-size-matters';
import Config from '@Config/default';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary},
  font: {PrimaryF},
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
});
