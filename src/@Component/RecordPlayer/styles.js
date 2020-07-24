import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import Config from '@Config/default';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary, Secondary},
  font: {PrimaryF, light},
} = Config;

export const styles = StyleSheet.create({
    name: {
        fontSize: 16,
        padding: moderateScale(10),
        fontFamily: PrimaryF,
        color: Primary,
      },
})