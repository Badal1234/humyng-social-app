/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground,
  Linking,
} from 'react-native';
import {connect} from 'react-redux';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as userAuthActions from '@Actions/user.authAction';
import auth from '@react-native-firebase/auth';
import {UserDetails} from '../../../Api/Auth';
const SignIntro = ({
  isLogedIn,
  navigation,
  setUserLoginData,
  isUserFirstTime,
  uid,
  token,
}) => {
  useEffect(() => {
    console.log(isLogedIn);
    console.log(isUserFirstTime);
    if (isLogedIn) {
      navigation.navigate('EnterScreen');
    } else if (!isLogedIn) {
      navigation.navigate('SignUp');
    }
  });
  return (
    <ImageBackground
      source={require('../../../static/intro.jpg')}
      style={styles.container}>
      <View style={styles.bottom}>
        <View style={styles.text1}>
          <Text style={styles.text2}>Hello, I am</Text>
          <Text style={styles.text2}>Siddharth</Text>
        </View>

        <View style={styles.text3}>
          <Text style={styles.text4}>
            They should be encourged ,praised and
          </Text>
          <Text style={styles.text4}>
            if possible given red wine and chocolates
          </Text>
        </View>
        <View style={styles.button}>
          <Text style={{marginLeft: 15}}>SIGN UP</Text>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => navigation.navigate('Signup')}>
            <Icon name="chevron-right" size={20} color={'white'} />
          </TouchableOpacity>
        </View>
        <View style={styles.last}>
          <Text style={{paddingTop: 2}}>Already have an account ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <Text style={styles.sign}>Signin</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const mapStateToProps = state => {
  return {
    isLogedIn: state.auth.isLogedIn,
    isUserFirstTime: state.auth.isUserFirstTime,
    uid: state.auth.uid,
    token: state.auth.token,
  };
};
const mapDispatchToProp = dispatch => ({
  setUserLoginData: userData =>
    dispatch(userAuthActions.setUserLoginData(userData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProp,
)(SignIntro);
