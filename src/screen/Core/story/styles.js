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
    backgroundColor: Primary,
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextInput: {
    width: '90%',
    height: 240,
    borderColor: Primary,
    borderWidth: 1,
  },
  input: {
    color: 'white',
    borderWidth: 0.1,
    width: '95%',
    marginTop: moderateScale(20),
    borderColor: 'white',
  },
  document: {
    width: '80%',
    height: moderateScale(120),
    borderWidth: 1,
    borderColor: Primary,
  },
  info: {
    width: '99%',
    height: moderateScale(45),
    borderBottomWidth: 0.5,
    elevation: 3,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {height: 5, width: 2},
    overflow: 'hidden',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  font: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: moderateScale(20),
    color: 'white',
    backgroundColor: 'white',
    marginRight: moderateScale(50),
    marginTop: moderateScale(20),
  },
  fontmodal: {
    position: 'absolute',
    left: 10,
    right: 10,
    width: moderateScale(250),
    height: 300,
    backgroundColor: 'white',
  },
  scrollfont: {
    backgroundColor: Primary,
  },
  add: {
    position: 'absolute',
    height: moderateScale(50),
    width: moderateScale(50),
    borderRadius: 25,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: width - moderateScale(80),
    marginTop: height - moderateScale(150),
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: moderateScale(70),
  },
  mediaupload: {
    height: moderateScale(200),
    width: moderateScale(200),
    borderColor: 'white',
    borderWidth: 1,
  },
  typemodal: {
    padding: 0,
    margin: 0,
    position: 'absolute',
    bottom: 0,
    elevation: 4,
  },
  scrolltype: {
    backgroundColor: 'white',
    width: width,
  },
  fullmodal: {},
  save: {
    height: moderateScale(35),
    width: moderateScale(80),
    borderRadius: moderateScale(20),
    backgroundColor: '#fff',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:moderateScale(15),
    marginLeft:moderateScale(260)
  },
});
