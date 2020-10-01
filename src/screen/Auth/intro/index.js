/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground,
  Linking,
  Alert,
  SafeAreaView
} from 'react-native';
import {connect} from 'react-redux';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as postActions from '@Actions/post.Action';
import * as AuthActions from '@Actions/user.authAction';
import {Auth} from 'aws-amplify';
import LinearGradient from 'react-native-linear-gradient'
import Config from '@Config/default';
const {
  Colors: {Secondary,Primary},
  font: {PrimaryF, light},
} = Config;
const SignIntro = ({
  isLogedIn,
  navigation,
  isUserFirstTime,
  uid,
  token,
  LoadPost,
  setUserLoginData,
  isInfo,
}) => {
  useEffect(() => {
    console.log(isLogedIn);
    console.log(isUserFirstTime);

    if (isLogedIn && isInfo) {
      Auth.currentAuthenticatedUser()
        .then(data =>
          setUserLoginData({
            token: data.signInUserSession.accessToken.jwtToken,
            username: data.username,
          }),
        )
        .catch(() => navigation.navigate('Signin'));
      navigation.navigate('CoreStack');
    } else {
      if (isLogedIn) {
        Auth.currentAuthenticatedUser().then(data => {
          setUserLoginData({
            token: data.signInUserSession.accessToken.jwtToken,
            username: data.username,
          });
          navigation.navigate('Info');
        }).catch(err=>navigation.navigate('Signin'));
      } else {
        navigation.navigate('Signin');
      }
    }
  });
  return (
    <SafeAreaView style={{flex:1}}>
    <LinearGradient
        colors={[Primary, Secondary]} 
        style={styles.gradientStyle}
    >
        <Text style={styles.textStyle}>Arcrena</Text>
            
    </LinearGradient>
</SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    isLogedIn: state.auth.isLogedIn,
    isUserFirstTime: state.auth.isUserFirstTime,
    uid: state.auth.uid,
    token: state.auth.token,
    isInfo: state.auth.isInfo,
  };
};
const mapDispatchToProp = dispatch => {
  return {
    LoadPost: userData => dispatch(postActions.LoadPost(userData)),
    setUserLoginData: userData =>
      dispatch(AuthActions.setUserLoginData(userData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProp,
)(SignIntro);
