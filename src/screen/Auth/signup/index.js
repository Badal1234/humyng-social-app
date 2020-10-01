/* eslint-disable react-hooks/exhaustive-deps */
import React, {createRef, useRef, useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  ActivityIndicator,
  Alert,
  Linking,
} from 'react-native';
import {connect} from 'react-redux';
import Button from '@Component/Button';
import * as userAuthActions from '@Actions/user.authAction';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';
import Amplify, {Auth, API, Hub} from 'aws-amplify';
import Modal from 'react-native-modal';
const Signin = ({uid, setUserLoginData, navigation}) => {
  var submit = useRef();

  const [email, set_email] = useState('');
  const [err_email, set_err_email] = useState('');
  const [pass, set_pass] = useState('');
  const [run, set_run] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signIn = async () => {
    setLoading(true);
    const a = email.replace(/\s+/g, '');
    Auth.signUp({
      username: a,
      password: pass,
    })
      .then(data => {
        setLoading(false);
        console.log(data);
        navigation.navigate('Otp', {
          username: data.user.username,
          password: pass,
        });
      })
      .catch(err => {
        setLoading(false);
      });
  };

  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      set_err_email('');
      return true;
    }
    set_err_email('Email address is not correct');
    return false;
  }

  return (
    <View
      style={styles.container}
      behavior="position"
      keyboardVerticalOffset={20}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.upperButton}
          onPress={() => navigation.goBack()}>
          <View style={styles.icon}>
            <Icon name="chevron-left" color={'white'} size={20} />
          </View>
          <Text style={styles.text1}>BACK</Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.text2}>Let's get started!</Text>
          <Text style={styles.text3}>Signup with your Email and Password</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.textabove}>{email === '' ? null : 'E-mail'}</Text>
          <TextInput
            style={styles.textInput}
            placeholder={'E-mail'}
            placeholderTextColor={'white'}
            keyboardType="email-address"
            onChangeText={text => set_email(text)}
            returnKeyType="send"
            onSubmitEditing={() => {
              if (ValidateEmail(email)) {
                submit.focus();
              }
            }}
          />
          <Text style={styles.error}>{err_email}</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.textabove}>
            {pass === '' ? null : 'Password'}
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder={'Password'}
            placeholderTextColor={'white'}
            keyboardType="email-address"
            onChangeText={text => set_pass(text)}
            returnKeyType="send"
            onSubmitEditing={() => {
              if (ValidateEmail(email)) {
                submit.focus();
              }
            }}
          />
          <Text style={styles.error}>{err_email}</Text>
        </View>
        <TouchableOpacity style={styles.submit}>
          <Button
            text={'SIGN up'}
            onPress={signIn}
            indicator={loading}
            ref={input => (submit = input)}
          />
        </TouchableOpacity>
      </ScrollView>
      <Modal
        style={styles.modal}
        isVisible={false}>
        <View style={{backgroundColor: 'white'}} />
      </Modal>
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
)(Signin);
