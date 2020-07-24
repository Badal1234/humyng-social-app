import {scale, moderateScale} from 'react-native-size-matters';
import Config from '@Config/default';
import {StyleSheet, Dimensions} from 'react-native';
import Modal from 'react-native-modal';
const {
  Colors: {Secondary, Primary},
  font: {PrimaryF, regular, light, extralight},
} = Config;

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,

  },
  modal: {
    padding: 0,
    margin: 0,
    bottom: 0,
  },
  mid:{
      backgroundColor:Primary,
      marginTop:moderateScale(200),
      height:height-200,
      borderTopLeftRadius:30,
      borderTopRightRadius:30
  }
});
