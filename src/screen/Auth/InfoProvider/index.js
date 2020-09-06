/* eslint-disable handle-callback-err */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import {styles} from './styles';
import {PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-picker';
import DatePicker from 'react-native-date-picker';
import Button from '@Component/Button';
import {connect} from 'react-redux';
import * as userAuthActions from '@Actions/user.authAction';
import {UserSetup,checkusername} from '../../../Api/Auth';
import {Auth, API, Hub, Storage} from 'aws-amplify';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { stat } from 'react-native-fs';
const Info = ({token, setUserLoginData, navigation,username}) => {
  const [uri, set_uri] = useState(null);
  const [visible, set_visible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [calender, show_calender] = useState(false);
  const [name, set_name] = useState('');
  const [description, set_description] = useState('');
  const [loading, set_loading] = useState(false);
  const [blob, set_blob] = useState(null);
  const [checked , set_check] = useState(false)
  const [err,set_err] = useState()
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
       // console.log('User cancelled image picker');
      } else if (response.error) {
       // console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
       // console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
       // console.log(response.uri);
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        set_uri(source);
        set_visible(false);
        const file = response.uri.substring(response.uri.lastIndexOf('/') + 1);
        set_blob(response.uri);
      }
    });
  };

  const chooseCamera = () => {
    ImagePicker.launchCamera(options, response => {
      // Same code as in above section!
      console.log('Response = ', response);

      if (response.didCancel) {
       // console.log('User cancelled image picker');
      } else if (response.error) {
       // console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        //console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
       // console.log(response.uri);
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        set_uri(source);
        set_visible(false);
        set_blob({
          path: response.data,
        });
      }
    });
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

  const showCalenderModal = () => {
    return (
      <View>
        <Modal
          animationIn={'slideInLeft'}
          animationOut={'slideOutRight'}
          animationInTiming={650}
          useNativeDriver={true}
          isVisible={calender}
          onBackButtonPress={() => show_calender(false)}
          backdropOpacity={0.3}>
          <View style={styles.calenderModal}>
            <View>
              {renderCalender()}
              <TouchableOpacity
                style={styles.save}
                onPress={() => show_calender(false)}>
                <Text style={styles.savetext}>save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  const renderCalender = () => {
    return (
      <View>
        <DatePicker
          date={date}
          onDateChange={setDate}
          mode={'date'}
          textColor={'#000000'}
          style={styles.calender}
          fadeToColor={'none'}
        />
      </View>
    );
  };

  const pick = async () => {
    try {
      request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)
        .then(async result => {
          switch (result) {
            case RESULTS.UNAVAILABLE:
              console.log(
                'This feature is not available (on this device / in this context)',
              );
              break;
            case RESULTS.DENIED:
              console.log(
                'The permission has not been requested / is denied but requestable',
              );
              break;
            case RESULTS.GRANTED:
              console.log('The permission is granted');
              set_visible(true);
              break;
            case RESULTS.BLOCKED:
              console.log(
                'The permission is denied and not requestable anymore',
              );
              break;
          }
        })
        .catch(error => {
          // …
        });
    } catch {}
  };

  const showCalender = () => {
    show_calender(true);
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

  console.log('sssss')
  const usernameCheck = () => {
    checkusername({username:name}).then(({status})=>set_check(status)).catch(err=>console.log(err))
  }


  const send = async () => {
    set_loading(true);
    const user = await Auth.currentAuthenticatedUser();

    const filepath = await fetch(blob);
    const file_blob = await filepath.blob();
    console.log(file_blob);
    try {
      const profile_key = await uploadToFirebase(blob);
      console.log(profile_key)
      UserSetup({
        name: name,
        Bio: description,
        profile_key: profile_key,
        dob: date,
      })
        .then((data) => {
          setUserLoginData({
            isInfo:true
          });
    
        })
        .catch(() => {Alert.alert('Something Wrong try again')
      set_loading(false)});
      
    } catch (error) {
      Alert.alert('Set your profile picture')
    }
   
  };
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.upper}>Update Profile</Text>
      </View>
      <View style={styles.photoContainer}>
        <TouchableOpacity style={styles.profile} onPress={pick}>
          {uri ? <Image source={uri} style={styles.image} /> : null}
        </TouchableOpacity>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        {showModal(visible)}
      </View>
      <View >
        <TextInput
          style={styles.input}
          placeholder={'Name'}
          onChangeText={text => {set_name(text)
            usernameCheck()
          }}
        />
        
      </View>
      <View style={styles.check}>
        {checked? <Icon name={'check'}  color={'green'} size={24}/>:err? <Icon name={'times'}  color={'red'} size={24}/>:null}
     

      </View>

      <View>
        <TextInput
          style={styles.input}
          placeholder={'Description'}
          onChangeText={text => set_description(text)}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.date} onPress={showCalender}>
          <Text>
            {date.getDate() +
              ' / ' +
              date.getMonth() +
              ' / ' +
              date.getFullYear()}
          </Text>
        </TouchableOpacity>
      </View>
      <View>{showCalenderModal()}</View>
      <View style={styles.button}>
        <Button text={'Save'} onPress={send} indicator={loading} />
      </View>

      <View />
    </View>
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
)(Info);
