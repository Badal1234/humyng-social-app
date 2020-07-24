import {StyleSheet, Linking} from 'react-native';
import {scale, moderateScale} from 'react-native-size-matters';
import Config from '@Config/default';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary},
  font: {PrimaryF},
} = Config;

export const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: PrimaryF,
  },
  container: {
    marginLeft: moderateScale(20),
    marginRight: moderateScale(20),
    justifyContent: 'center',
  },
  con2: {
    paddingLeft: moderateScale(20),
    paddingTop: moderateScale(120),
  },
  button: {
    paddingTop: moderateScale(40),
  },
  info: {
    paddingLeft: moderateScale(20),
    marginTop: moderateScale(20),
  },
  text2: {
    color: LightGrey,
  },
  input: {
    borderColor: Primary,
    borderBottomWidth: 2,
  },
});
