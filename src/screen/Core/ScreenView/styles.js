import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import Config from '@Config/default';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary, Secondary},
  font: {PrimaryF, light},
} = Config;
const width = Dimensions.get('window').width;
export const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(2),
  },
  feed: {
    fontFamily: PrimaryF,
    fontSize: 25,
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
    height: moderateScale(120),
    backgroundColor: 'white',
    width: width,
    marginRight: moderateScale(10),
    paddingTop: moderateScale(5),
    flexDirection: 'column',
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
    fontSize: 16,
    marginLeft: moderateScale(15),
    color: 'white',
  },
});
