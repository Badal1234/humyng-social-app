import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Text,
  ScrollView,
} from 'react-native';
import {styles} from './styles';
import Button from '@Component/Button';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-picker';
import {Storage} from 'aws-amplify';
import {UserUpdate, UserDetails} from '../../../Api/Auth';
import LinearGradient from 'react-native-linear-gradient'

import {connect} from 'react-redux';
import * as userAuthActions from '@Actions/user.authAction';
const EditProfile = ({navigation, username}) => {
  const data = navigation.getParam('info');
  const [name, set_name] = useState(data.name);
  const [profile_uri, set_profile_uri] = useState('');
  // const [username, set_username] = useState('');
  const [bio, set_bio] = useState(data.info);
  const [interest, set_interest] = useState('');
  const [loading, set_loading] = useState(false);
  const [isVisible, set_visible] = useState(false);

  const options = {
    title: 'Select Avatar',
    customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  const chooseGallry = () => {
    ImagePicker.launchImageLibrary(options, response => {
      // Same code as in above section!
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log(response.uri);
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        set_visible(false);
        const file = response.uri.substring(response.uri.lastIndexOf('/') + 1);
        set_profile_uri(response.uri);
      }
    });
  };

  const chooseCamera = () => {
    ImagePicker.launchCamera(options, response => {
      // Same code as in above section!
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log(response.uri);
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        set_visible(false);
        set_profile_uri(response.uri);
      }
    });
  };

  const uploadToFirebase = blob1 => {
    console.log(blob1);
    return new Promise((resolve, reject) => {
      Storage.put(`/profile/${username}.jpeg`, blob1, {
        level: 'public',
        contentType: 'image/jpeg',
      })
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  };
  useEffect(() => {}, [username]);

  const send = async () => {
    set_loading(true);
    const filepath = await fetch(profile_uri);
    const file_blob = await filepath.blob();
    const profile_key = await uploadToFirebase(file_blob);
    console.log(profile_key.key)
    UserUpdate({
      name: name,
      description: bio,
      interest: interest,
      profile_key: profile_key,
    }).then(data2 => navigation.goBack());
  };

  const showModal = val => {
    return (
      <View>
        <Modal isVisible={val} backdropOpacity={0.5}>
          <View style={styles.modal}>
            <TouchableOpacity style={{padding: 10}} onPress={chooseGallry}>
              <Text style={styles.modaltext}>choose from gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modaltext} onPress={chooseCamera}>
              <Text style={styles.modaltext}>open camera</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>



      <View style={styles.profileCont}>
        <TouchableOpacity
          style={styles.profile}
          onPress={() => set_visible(true)}>
          <Image style={styles.image} source={{uri: profile_uri}} />
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.inputHolder}>
          <TextInput
            style={styles.input}
            placeholder={'username'}
            onChangeText={text => set_name(text)}
            defaultValue={name}
            placeholderTextColor={'white'}
          />
        </View>
        <View style={styles.inputHolder}>
          <TextInput
            style={styles.input}
            defaultValue={bio}
            placeholder={'Bio'}
            multiline={true}
            onChangeText={text => set_bio(text)}
          />
        </View>
        <View style={styles.inputHolder}>
          <TextInput
            style={styles.input}
            placeholder={'Interest'}
            onChangeText={text => set_interest(text)}
          />
        </View>
        <View style={styles.button}>
          <Button text={'Save'} onPress={() => send()} loading={loading} />
        </View>
      </View>
      {showModal(isVisible)}
    </ScrollView>
  );
};

const mapStateToProps = state => {
  return {
    isLogedin: state.auth.isLogedin,
    token: state.auth.token,
    username: state.auth.username,
  };
};
const mapDispatchToProp = dispatch => ({
  setUserLoginData: userData =>
    dispatch(userAuthActions.setUserLoginData(userData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProp,
)(EditProfile);
