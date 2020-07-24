import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Dimensions,
  TextInput,
  ScrollView,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {styles} from './styles';
import Config from '@Config/default';
import Button from '@Component/Button';
import * as userAuthActions from '@Actions/user.authAction';
import {connect} from 'react-redux';
import {UploadPost, UpdatePost} from '../../../Api/Post';
import Modal from 'react-native-modal';
import {Storage} from 'aws-amplify';
const {
  Colors: {LightGrey},
  font: {PrimaryF, light},
} = Config;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const MediaInfo = ({
  navigation,
  path,
  uid,
  token,
  name,
  username,
  content,
  setContentData,
  type,
}) => {
  const path_poster = navigation.getParam('path');
  const file_name = navigation.getParam('name');
  const [title, set_title] = useState('');
  const [desc, set_desc] = useState('');
  const [visible, set_visible] = useState(false);
  //const [type, set_type] = useState('gg');
  const [loading, set_loading] = useState(false);

  const uploadToFirebase = async body => {
    console.log(path_poster);
    return new Promise(async (resolve, reject) => {
      const response = await fetch(body);
      const blob = await response.blob();
      console.log(blob);
      console.log(type);
      Storage.put(`${username}/${blob._data.name}`, blob, {
        level: 'public',
        contentType: blob._data.type,
      })
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  };
  const submit = async () => {
    console.log(desc);
    console.log(path);

    try {
      set_loading(true);
      if (!path) {
        if (!content) {
          const key = await uploadToFirebase(path_poster);
          console.log('nn');
          await UploadPost({
            author: username,
            type: 'image',
            description: desc,
            title: title,
            content: {
              uri: {
                raw: key,
              },
            },
          });
          set_loading(false);
          setContentData({
            path: null,
            content: null,
          });
          navigation.navigate('EnterScreen');
        } else {
          const key = await uploadToFirebase(path_poster);
          await UploadPost({
            author: username,
            type: 'story',
            poster_uri: {raw: key},
            description: desc,
            title: title,
            content: content,
          });
          set_loading(false);
          setContentData({
            path: null,
            content: null,
          });
          navigation.navigate('EnterScreen');
        }
      } else {
        console.log(path);
        const poster_key = await uploadToFirebase(path_poster);
        const content_key = await uploadToFirebase(path);
        console.log(type);
        await UploadPost({
          author: username,
          type: type,
          description: desc,
          title: title,
          poster_uri: poster_key,
          content: {
            uri: content_key,
          },
        });
        set_loading(false);
        setContentData({
          path: null,
          content: null,
        });
        navigation.navigate('Enterscreen');
      }
    } catch (error) {
      console.log(error);
      set_loading(false);
      Alert.alert('something went wrong');
    }
  };
  return (
    <ScrollView>
      <Image
        source={{
          uri: `${path_poster}`,
      
        }}
        style={{width: width, height: height / 2}}
        resizeMode={'contain'}
      />
      <ScrollView style={styles.inputContainer}>
        <TouchableOpacity
          style={styles.category}
          onPress={() => set_visible(true)}>
          <Text style={styles.text}>category</Text>
        </TouchableOpacity>

        <View style={styles.desholder}>
          <TextInput
            style={styles.input}
            maxLength={50}
            placeholder={'Title goes here'}
            onChangeText={text => set_title(text)}
          />
        </View>
        <View style={styles.limit}>
          <Text style={{fontSize: 13, color: LightGrey}}>max 70</Text>
        </View>
        <View style={styles.desholder}>
          <TextInput
            style={styles.input}
            maxLength={120}
            placeholder={'Description goes here'}
            onChangeText={text => set_desc(text)}
            multiline={true}
          />
        </View>
        <View style={styles.desholder}>
          <TextInput
            style={styles.input}
            maxLength={120}
            placeholder={'Tags(like music,commedy,horror etc..)'}
            multiline={true}
          />
        </View>
      </ScrollView>
      <View style={styles.button}>
        <Button text={loading ? 'wait...' : 'post'} onPress={() => submit()} />
      </View>
      <Modal
        isVisible={visible}
        onBackdropPress={() => set_visible(false)}
        style={{bottom: 0, position: 'absolute', padding: 0, margin: 0}}
        onBackButtonPress={() => set_visible(false)}>
        <View style={styles.modal} />
      </Modal>
    </ScrollView>
  );
};

const mapStateToProps = state => {
  return {
    path: state.file.path,
    uid: state.auth.uid,
    type: state.file.type,
    token: state.auth.token,
    name: state.file.name,
    username: state.auth.username,
    content: state.file.content,
  };
};

const mapDispatchToProp = dispatch => ({
  setContentData: userData =>
    dispatch(userAuthActions.setContentData(userData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProp,
)(MediaInfo);
