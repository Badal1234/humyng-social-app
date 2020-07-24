import {StyleSheet} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    height: scale(50),
    backgroundColor: 'white',
    flexDirection: 'row',
    position: 'absolute',
  },
  container2: {
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: moderateScale(35),
  },
  active: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
