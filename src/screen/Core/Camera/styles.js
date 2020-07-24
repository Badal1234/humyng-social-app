import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import Config from '@Config/default';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary, Secondary},
  font: {PrimaryF, light},
} = Config;
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    height: moderateScale(45),
    width: moderateScale(45),
    borderRadius: moderateScale(22.5),
    backgroundColor: Primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: moderateScale(45),
    marginLeft: moderateScale(45),
  },
  next: {
    color: Primary,
    fontSize: 24,
  },
  sync: {
    justifyContent: 'center',
    marginRight: moderateScale(45),
    marginLeft: moderateScale(25),
  },
  lower: {
    marginTop: moderateScale(height - moderateScale(150)),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  upper: {
    marginLeft: moderateScale(width - 50),
    marginTop: moderateScale(10),
  },
});
