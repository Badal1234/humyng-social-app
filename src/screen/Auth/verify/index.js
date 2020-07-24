import React, {useEffect, useState} from 'react';
import {View, Text, Linking, Alert} from 'react-native';
import {styles} from './styles';
import Button from '@Component/Button';
import auth from '@react-native-firebase/auth';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

import Amplify, {Auth, API, Hub} from 'aws-amplify';
const Verify = ({navigation}) => {
  const username = navigation.getParam('username');
  const [emailVerify, set_verify] = useState(false);
  const [pass, set_pass] = useState('');
  const [otp, set_otp] = useState('');
  const [show, set_show] = useState(false);

  const send = () => {
    Auth.forgotPasswordSubmit(username, otp, pass)
      .then(() => {
        Alert.alert('password sucessfully reset');
        navigation.navigate('Signin');
      })
      .catch(() => Alert.alert('something went wrong'));
  };

  const forgot = () => {
    Auth.forgotPassword(username).then(() => {
      set_show(true);
    });
  };

  return show ? (
    <View style={styles.container}>
      <View style={styles.con2}>
        <Text style={styles.text}>Forgot Password</Text>
      </View>
      <View style={styles.info}>
        <TextInput
          placeholder={'new password'}
          style={styles.input}
          onPress={text => set_pass(text)}
        />
      </View>
      <View style={styles.info}>
        <TextInput
          placeholder={'OTP'}
          style={styles.input}
          onPress={text => set_otp(text)}
        />
      </View>
      <View style={styles.button}>
        <Button
          text="Send Verification link"
          onPress={send}
          indicator={emailVerify}
        />
      </View>
      
    </View>
  ) : null;
};

export default Verify;
