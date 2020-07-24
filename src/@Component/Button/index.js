/* eslint-disable react-native/no-inline-styles */
import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Config from '@Config/default';
const {
  Colors: {Primary, Secondary},
} = Config;
import {styles} from './styles';
const Button = forwardRef((props, ref) => {
  const {text, onPress, indicator, disabale = false} = props;
  return (
    <TouchableOpacity onPress={onPress} ref={ref} disabled={disabale}>
      <LinearGradient
        colors={[Primary, Secondary]}
        end={{x: 0.8, y: 0.5}}
        start={{x: 0.2, y: 0.8}}
        style={styles.Button}>
        {indicator ? (
          <ActivityIndicator color="white" style={styles.indicator} />
        ) : (
          <Text style={{color: 'white', fontSize: 18}}>
            {text.toUpperCase()}
          </Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
});

Button.propTypes = {
  indicator: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
