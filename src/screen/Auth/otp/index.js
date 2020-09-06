/* eslint-disable react/jsx-no-undef */
import React, {createRef, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';
import Button from '@Component/Button';
import {connect} from 'react-redux';
import Verify from '../verify';
import * as userAuthActions from '@Actions/user.authAction';
import Amplify, {Auth, API, Hub} from 'aws-amplify';
const Otp = ({navigation, setUserLoginData}) => {
  const username = navigation.getParam('username');
  const password = navigation.getParam('password');
  const [otp, set_otp] = useState('');

  const final = async () => {
    const user = await Auth.currentAuthenticatedUser();
    setUserLoginData({
      token: user.signInUserSession.accessToken.jwtToken,
      username: user.username,
    })
      navigation.navigate('Info', {username: user.username});
  };

  const verify = () => {
    console.log(username);
    // After retrieveing the confirmation code from the user
    Auth.confirmSignUp(username, otp, {
      // Optional. Force user confirmation irrespective of existing alias. By default set to True.
      forceAliasCreation: true,
    })
      .then(data =>
        Auth.signIn(username, password)
          .then(user => final())
          .catch(err => console.log(err)),
      )
      .catch(err => console.log(err));
    // After retrieveing the confirmation code from the user
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.upperButton}>
          <View style={styles.icon}>
            <Icon name="chevron-left" color={'white'} size={20} />
          </View>
          <Text style={styles.text1}>BACK</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.text2}>Enter Your Verfication Code</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <TextInput
          style={styles.input}
          maxLength={6}
          keyboardType={'number-pad'}
          textContentType={'oneTimeCode'}
          textAlignVertical={'center'}
          onChangeText={text => set_otp(text)}
        />
      </View>

      <View style={styles.resend}>
        <View>
          <Text>Did not get the code</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            Auth.resendSignUp(username)
              .then(() => Alert.alert('Otp has been send'))
              .catch(err => console.log(err))
          }>
          <Text style={styles.text}>click here</Text>
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
        style={styles.button}
        maxLength={1}
        keyboardVerticalOffset={20}>
        <Button text={'Submit'} onPress={() => verify()} />
      </KeyboardAvoidingView>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    uid: state.auth.uid,
  };
};

const mapDispatchToProp = dispatch => ({
  setUserLoginData: userData =>
    dispatch(userAuthActions.setUserLoginData(userData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProp,
)(Otp);
