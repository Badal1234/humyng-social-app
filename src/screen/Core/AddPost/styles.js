import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import Config from '@Config/default';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary, Secondary},
  font: {PrimaryF, light},
} = Config;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Primary,
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontFamily: PrimaryF,
  },
  textcontainer: {
    padding: moderateScale(10),
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
});
