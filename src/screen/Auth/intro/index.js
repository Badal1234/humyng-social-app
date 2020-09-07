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
} from 'react-native';
import {connect} from 'react-redux';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as postActions from '@Actions/post.Action';
import * as AuthActions from '@Actions/user.authAction';
import {Auth} from 'aws-amplify';
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
        .catch(() => navigation.navigate('SignIn'));
      navigation.navigate('CoreStack');
    } else {
      if (isLogedIn) {
        Auth.currentAuthenticatedUser().then(data => {
          setUserLoginData({
            token: data.signInUserSession.accessToken.jwtToken,
            username: data.username,
          });
          navigation.navigate('Info');
        });
      } else {
        navigation.navigate('SignIn');
      }
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
            onPress={() => Alert.alert('ss')}>
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
