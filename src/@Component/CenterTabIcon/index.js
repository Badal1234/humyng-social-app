import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Config from '@Config/default';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale} from 'react-native-size-matters';
import PropTypes from 'prop-types';

const {
  Colors: {Primary, LightWhite, Secondary, Black},
} = Config;

export default function CenterTabIcon({focused}) {
  return (
    <LinearGradient
      colors={[
        focused ? Primary : LightWhite,
        focused ? Secondary : LightWhite,
      ]}
      end={{x: 1, y: 0.5}}
      start={{x: 0.5, y: 0.5}}
      style={Styles.icon}>
      <View>
        <Icon color={focused ? 'white' : Black} name="envelope-open" size={24} />
      </View>
    </LinearGradient>
  );
}

CenterTabIcon.propTypes = {
  focused: PropTypes.bool.isRequired,
};

const Styles = StyleSheet.create({
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: moderateScale(30),
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowRadius: moderateScale(1),
    elevation: moderateScale(10),
    shadowOffset: {
      height: moderateScale(2),
      width: moderateScale(2),
    },
    marginBottom: moderateScale(30),
  },
});
