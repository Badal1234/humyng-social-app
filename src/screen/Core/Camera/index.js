import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {RNCamera} from 'react-native-camera';
import {styles} from './styles';
import DocumentPicker from 'react-native-document-picker';
import * as userAuthActions from '@Actions/user.authAction';
import {connect} from 'react-redux';
import RNFetchBlob from 'rn-fetch-blob';
import {setContentData} from '../../../redux/Action/user.authAction';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Camera = ({navigation, setContentData}) => {
  const [show, set_show] = useState(true);
  var camera = useRef();
  const [path, set_path] = useState('');
  const [count, set_count] = useState(0);
  const [padding, set_padding] = useState(10);

  const type = navigation.getParam('type');
  console.log(type);

  const takePicture = async () => {
    if (camera) {
      const options = {quality: 0.5, base64: true};
      const data = await camera.recordAsync(options);
      //console.log(data.uri)
      set_path(data.uri);
      console.log(data.uri)
      set_padding(0);
    }
  };

  const chooseGallery = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [
          type === 'video'
            ? DocumentPicker.types.video
            : DocumentPicker.types.images,
        ],
      });
      RNFetchBlob.fs.stat(res.uri).then(image => {
        console.log(image);
        var str1 = 'file://';
        var str2 = image.path;
        var correctpath = str1.concat(str2);
        set_path(correctpath);
        setContentData({
          path: `file://${image.path}`,
          name: image.filename,
          type: image.type,
        });
        navigation.navigate('ImagePoster');
      });
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };
  const pick = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        [
          PermissionsAndroid.PERMISSIONS.CAMERA,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        ],
        {
          title: 'humyng',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        chooseGallery();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const stopRecord = async () => {
    if (camera) {
      const options = {quality: 0.5, base64: true};
      const data = await camera.stopRecording();
      console.log(path)
      setContentData({
        path: path,
        type: 'video',
      });
      console.log(path);
      navigation.navigate('ImagePoster', {path: path});
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={ref => {
          camera = ref;
        }}
        style={styles.preview}
        type={RNCamera.Constants.Type.front}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      />

      <View style={{position: 'absolute'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('VideoEditing', {path: path})}
          style={styles.upper}>
          <Icon name={'arrow-alt-circle-right'} color={'white'} size={34} />
        </TouchableOpacity>
        <View style={styles.lower}>
          <TouchableOpacity style={styles.sync}>
            <Icon name={'sync-alt'} color={'white'} size={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPressIn={() => takePicture()}
            onPressOut={() => stopRecord()}
            style={[styles.capture]}>
            <Icon name={'video'} color={'red'} size={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => chooseGallery()}
            style={styles.capture}>
            <Icon name={'folder-open'} size={24} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    uid: state.file.path,
  };
};

const mapDispatchToProp = dispatch => ({
  setContentData: userData =>
    dispatch(userAuthActions.setContentData(userData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProp,
)(Camera);
