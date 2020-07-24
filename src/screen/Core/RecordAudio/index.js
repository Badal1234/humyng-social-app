import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  PermissionsAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {styles} from './styles';
import SoundRecorder from 'react-native-sound-recorder';
import RNFS from 'react-native-fs';
import Modal from 'react-native-modal';
import Video from 'react-native-video';
import {Stopwatch} from 'react-native-stopwatch-timer';
import RecordPlayer from '@Component/RecordPlayer';
import DocumentPicker from 'react-native-document-picker';
import * as userAuthActions from '@Actions/user.authAction';
import {connect} from 'react-redux';
const AudioRecord = ({navigation, setContentData}) => {
  const [state, set_state] = useState(true);
  const [name, set_name] = useState(
    new Date().getSeconds().toString() + new Date().getDate().toString(),
  );
  const [files, set_files] = useState([]);
  const [modal, set_modal] = useState(false);
  const [pause, set_pause] = useState(true);
  const [sec, set_sec] = useState(0);
  const [min, set_min] = useState(0);
  const [hour, set_hour] = useState(0);
  const [timer, set_timer] = useState(false);
  const [reset, set_reset] = useState(false);
  const [audio_pause, set_audio_pause] = useState(false);
  const [path, set_path] = useState('');
  const [save, set_save] = useState(false);
  useEffect(() => {
    RNFS.readDir(`${RNFS.DocumentDirectoryPath}/music`).then(data =>
      set_files(data),
    );
    console.log('a');
  }, []);

  const recording = async () => {
    RNFS.mkdir(`${RNFS.DocumentDirectoryPath}/music`).then(data =>
      console.log(data),
    );
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        if (state) {
          set_reset(false);
          set_timer(true);
          SoundRecorder.start(
            `${
              SoundRecorder.PATH_DOCUMENT
            }/music/${new Date().getTime().toString()}.mp3`,
          )
            .then(data => {
              console.log(data);
              set_state(!state);
              set_audio_pause(true);
              set_save(true);
            })
            .catch(() => set_state(!state));
        } else {
          console.log('stop');
        }
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const renderItem = (item, index) => {
    console.log(item);
    return <RecordPlayer item={item} />;
  };

  const AudioPause = () => {
    set_pause(!pause);
    set_timer(!timer);
  };

  const pickDocument = async () => {
    try {
      const res = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.audio],
      });
      setContentData(res.uri);
    } catch (error) {}
  };

  const openFile = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Humyng',
          message: 'Wants To Access Your Storage',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        await pickDocument();
      } else {
        //console.log('permission denied');
      }
    } catch (err) {
      //console.warn(err);
    }
  };
  const play = () => {};
  return (
    <View style={styles.conatiner}>
      <View style={styles.timer}>
        <Stopwatch start={timer} reset={reset} />
      </View>
      <View style={styles.lower}>
        <TouchableOpacity onPress={() => set_modal(true)}>
          <Icon name={'tape'} size={45} color={'white'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.micro} onPress={() => recording()}>
          <Icon
            name={state ? 'microphone' : 'compact-disc'}
            size={45}
            color={'white'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openFile()}>
          <Icon name={'folder-open'} size={45} color={'white'} />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.micro} onPress={() => AudioPause()}>
          <Icon
            name={state ? null : pause ? 'pause' : 'play'}
            size={45}
            color={'white'}
          />
        </TouchableOpacity>
      </View>
      {save ? (
        <TouchableOpacity
          style={styles.buttom}
          onPress={() => {
            set_timer(!timer);
            console.log(path);
            SoundRecorder.stop().then(data => {
              setContentData({path: `file://${data.path}`, type: 'audio'});
              set_reset(true);
              console.log(data);
              set_state(!state);
            });
            navigation.navigate('ImagePoster');
          }}>
          <Text style={styles.save}>Save</Text>
        </TouchableOpacity>
      ) : null}

      <Modal
        isVisible={modal}
        style={styles.modal}
        onBackdropPress={() => set_modal(false)}>
        <View style={styles.list}>
          <FlatList
            data={files}
            renderItem={({item, index}) => renderItem(item, index)}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </Modal>
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
)(AudioRecord);
