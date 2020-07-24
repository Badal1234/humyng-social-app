import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-picker';
export default function AddPost({navigation}) {
  const uploadImage = () => {
    set_visible(true);
  };
  const options = {
    title: 'Select Avatar',
    customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const [uri, set_uri] = useState(null);
  const [visible, set_visible] = useState(false);
  const [path, set_path] = useState('');
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

        set_uri(source);
        set_visible(false);
        navigation.navigate('ImageEditor', {path: response.uri,type:response.type});
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
        navigation.navigate('ImageEditor', {path: response.uri,type:response.type});
        set_uri(source);
        set_visible(false);
      }
    });
  };

  const showModal = val => {
    return (
      <View>
        <Modal
          isVisible={val}
          backdropOpacity={0.5}
          onBackdropPress={() => set_visible(false)}>
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

  const uploadVideo = () => {
    navigation.navigate('Camera', {type: 'video'});
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.textcontainer}
        onPress={() => uploadImage()}>
        <Text style={styles.text}>Publish Your Image</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.textcontainer}
        onPress={() => uploadVideo()}>
        <Text style={styles.text}>Share Your Video</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.textcontainer}
        onPress={() => navigation.navigate('Story')}>
        <Text style={styles.text}>Write Your story</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.textcontainer}
        onPress={() => navigation.navigate('RecordAudio')}>
        <Text style={styles.text}>Stream Your Voice</Text>
      </TouchableOpacity>
      <Modal>
        <View>
          <TouchableOpacity>
            <Text>choose from</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        {showModal(visible)}
      </View>
    </View>
  );
}
