/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  PermissionsAndroid,
  FlatList,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import {styles} from './styles';
import DocumentPicker from 'react-native-document-picker';
import Config from '@Config/default';
import Modal from 'react-native-modal';
import {moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';
import storage from '@react-native-firebase/storage';
import {utils} from '@react-native-firebase/app';
import * as RNFS from 'react-native-fs';
import RNFetchBlob from 'rn-fetch-blob';
import {Storage} from 'aws-amplify';
import * as userAuthActions from '@Actions/user.authAction';
import {connect} from 'react-redux';
import {UploadPost} from '../../../Api/Post';
import {SavingsPlans} from 'aws-sdk';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary, Secondary},
  font: {
    PrimaryF,
    light,
    regular,
    danceScript,
    galada,
    great,
    indie,
    icon,
    kalam,
    lobster,
    quicksand,
  },
} = Config;

const Story = ({username, navigation, setContentData}) => {
  const [story, set_story] = useState([]);
  const [types, set_types] = useState([]);
  const [format, set_format] = useState(['Insert Text', 'Insert Attachment']);
  const [fonts, set_fonts] = useState(light);
  const [loading, set_loading] = useState(false);
  const [fontSet] = useState([
    PrimaryF,
    light,
    kalam,
    icon,
    lobster,
    quicksand,
    indie,
    great,
    galada,
    danceScript,
  ]);
  const [showFont, set_showFont] = useState(false);
  const [showsize, set_showsize] = useState(false);
  const [size, set_size] = useState(15);
  const [sizes, set_sizes] = useState([12, 18, 20, 23, 25, 32, 36, 42, 46, 54]);
  const [showtype, set_showtype] = useState(true);
  const [height, sethight] = useState(20);
  const [media, setmedia] = useState([]);
  const [content, set_content] = useState(null);
  const height1 = Dimensions.get('window').height;
  const width = Dimensions.get('window').width;
  const [fullimage, show_full_img] = useState(false);
  const [color, set_color] = useState([
    'white',
    '#60b548',
    '#b1b548',
    '#b57548',
    '#b34f90',
    '#b34f72',
  ]);
  const [showcolor, setshowcolor] = useState(false);
  const [fontColor, setFontColor] = useState('white');

  const changeSize = event => {
    sethight(event.nativeEvent.contentSize.height);
  };

  const uploadToFirebase = (blob1, index) => {
    return new Promise((resolve, reject) => {
      var new_uri = [];
      blob1.map(async item => {
        console.log(item);
        const response = await fetch(item.uri);
        const blob = await response.blob();
        console.log(response.formData());

        Storage.put(`${username}/${blob._data.name}`, blob, {
          level: 'private',
          contentType: blob._data.type,
        })
          .then(result => {
            console.log(result);
            new_uri.push(result);
            if (new_uri.length === blob1.length) {
              //update_content(new_uri, index, 'Insert Attachment');
              resolve({uri: new_uri});
            }
          })
          .catch(err => {
            console.log(err);
          });
      });
    });
  };

  const update_content = (text, index, type) => {
    let newArr = [...story];
    if (type === 'Insert Attachment') {
      newArr[index] = {
        key: index,
        content: {sub: text},
        type: type,
      };
    } else {
      newArr[index] = {
        key: index,
        content: {
          sub: text,
          color: fontColor,
          size: size,
          style: fonts,
          height: height,
        },
        type: type,
      };
    }

    set_story(newArr);
  };

  const textinput = form => {
    return (
      <TextInput
        key={form.key}
        style={[
          styles.input,
          {
            fontFamily: fonts,
            fontSize: size,
            height: form.height,
            color: fontColor,
          },
        ]}
        placeholderTextColor={LightGrey}
        selectionColor={fontColor}
        multiline={true}
        defaultValue={form.content.sub}
        onContentSizeChange={event => changeSize(event)}
        onChangeText={text => update_content(text, form.key, form.type)}
        onSubmitEditing={() => set_content(null)}
        placeholder={'write here'}
        dataDetectorTypes={['link', 'phoneNumber']}
      />
    );
  };

  const pickDocument = async index => {
    try {
      const res = await DocumentPicker.pickMultiple({
        type: [
          DocumentPicker.types.images,
          DocumentPicker.types.video,
          DocumentPicker.types.audio,
        ],
      });
      if (res.length < 5) {
        res.map(item => {
          update_content(res, index, 'Insert Attachment');
        });
      } else {
        Alert.alert('max 4 media at a time');
      }
    } catch (error) {}
  };

  const onPressmedia = async index => {
    console.log(story);
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Humyng',
          message: 'Wants To Access Your Storage',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        await pickDocument(index);
      } else {
        //console.log('permission denied');
      }
    } catch (err) {
      //console.warn(err);
    }
  };
  const changeContent = key => {
    let newArr = [...story];
    newArr.splice(key, 1);
    set_story(newArr);
  };
  const mediainput = form => {
    if (form.content.sub.length) {
      let len = form.content.sub.length;
      return (
        <ScrollView horizontal={true}>
          {form.content.sub.map((item, index) => {
            console.log(item);
            return (
              <TouchableOpacity
                style={{
                  backgroundColor: Primary,
                  height: moderateScale(200),
                  borderColor: 'black',
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 20,
                  margin: moderateScale(5),
                }}
                onPress={() => changeContent(form.key)}>
                <Image
                  source={{uri: item.uri, cache: 'only-if-cached'}}
                  resizeMethod={'auto'}
                  resizeMode={'stretch'}
                  style={{
                    width: width - 100,
                    height: moderateScale(200),
                    borderRadius: 20,
                  }}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      );
    }
  };
  console.log(story);

  const renderFont = font => {
    return (
      <TouchableOpacity
        style={{flexDirection: 'row', justifyContent: 'center'}}
        onPress={() => {
          set_fonts(font);
          set_showFont(false);
        }}>
        <Text
          style={{
            fontFamily: font,
            fontSize: 22,
            letterSpacing: 1,
            color: 'white',
          }}>
          {font}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderSize = size1 => {
    return (
      <TouchableOpacity
        style={{flexDirection: 'row', justifyContent: 'center'}}
        onPress={() => {
          set_size(size1);
          set_showsize(false);
        }}>
        <Text style={{fontFamily: fonts, fontSize: size1, color: 'white'}}>
          {size1}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderColor = selectcolor => {
    return (
      <TouchableOpacity
        style={{
          height: moderateScale(30),
          width: moderateScale(30),
          borderRadius: 15,
          backgroundColor: selectcolor,
          marginRight: moderateScale(30),
          marginTop: moderateScale(20),
          marginBottom: moderateScale(20),
        }}
        onPress={() => {
          setFontColor(selectcolor);
          setshowcolor(!showcolor);
        }}
      />
    );
  };
  const renderTypes = (type, index) => {
    return (
      <TouchableOpacity
        style={{justifyContent: 'center', alignItems: 'center'}}
        onPress={() => {
          set_story([
            ...story,
            {key: story.length, content: {sub: []}, type: type},
          ]);

          if (type === 'Insert Attachment') {
            onPressmedia(story.length);
          }

          set_showtype(false);
        }}>
        <Text style={{fontFamily: fonts, fontSize: 18, color: Primary}}>
          {type}
        </Text>
      </TouchableOpacity>
    );
  };

  const submit = async () => {
    var newArr = [...story];
    var count = 0;
    var submitContent = [];
    set_loading(true);

    await new Promise((resolve, reject) => {
      newArr.map(async (item, index) => {
        if (item.type === 'Insert Attachment') {
          const cont = await uploadToFirebase(item.content.sub, index);
          console.log(cont);
          submitContent.push(cont);
        } else {
          submitContent.push(item);
        }
        if (submitContent.length === newArr.length) {
          Storage.put(
            `${username}#${new Date().toISOString()}.json`,
            {content: submitContent},
            {
              level: 'public',
              contentType: 'application/json',
            },
          )
            .then(result => {
              setContentData({content: result});
            })
            .catch(err => { 
              set_loading(false)
              console.log(err);
            });
          
          set_loading(false);
          navigation.navigate('ImagePoster');
        }
      });
    });
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior={'padding'}>
        <ScrollView contentContainerStyle={styles.content}>
          {story.map((form, index) => {
            if (form.type === 'Insert Text') {
              return textinput(form);
            } else {
              return mediainput(form);
            }
          })}
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.body}>
        <Modal isVisible={showFont} style={styles.fontmodal}>
          <ScrollView style={styles.scrollfont}>
            {fontSet.map(font => renderFont(font))}
          </ScrollView>
        </Modal>
        <Modal
          isVisible={showsize}
          style={styles.fontmodal}
          onBackButtonPress={() => set_showsize(false)}>
          <ScrollView style={styles.scrollfont}>
            {sizes.map(size1 => renderSize(size1))}
          </ScrollView>
        </Modal>
        <Modal
          isVisible={showtype}
          style={styles.typemodal}
          backdropOpacity={0}
          onBackButtonPress={() => set_showtype(false)}
          onBackdropPress={() => set_showtype(false)}
          animationIn={'slideInUp'}
          animationInTiming={500}>
          <ScrollView style={styles.scrolltype}>
            {format.map((type, index) => renderTypes(type, index))}
          </ScrollView>
        </Modal>
        <Modal
          isVisible={showcolor}
          style={styles.typemodal}
          backdropOpacity={0}
          onBackButtonPress={() => setshowcolor(false)}
          onBackdropPress={() => setshowcolor(false)}
          animationIn={'slideInUp'}
          animationInTiming={500}>
          <ScrollView
            contentContainerStyle={[
              styles.scrolltype,
              {marginRight: moderateScale(20)},
            ]}
            horizontal={true}>
            {color.map((type, index) => renderColor(type, index))}
          </ScrollView>
        </Modal>
        <Modal
          isVisible={fullimage}
          style={styles.fullmodal}
          backdropOpacity={0}
          onBackButtonPress={() => show_full_img(false)}
          onBackdropPress={() => show_full_img(false)}
          animationIn={'slideInUp'}
          animationInTiming={500}>
          <ScrollView
            contentContainerStyle={[
              styles.scrolltype,
              {marginRight: moderateScale(20)},
            ]}
            horizontal={true}>
            {color.map((type, index) => renderColor(type, index))}
          </ScrollView>
        </Modal>
      </View>
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          marginTop: moderateScale(height1 - 110),
        }}>
        <TouchableOpacity
          style={styles.font}
          onPress={() => set_showFont(true)}>
          <Text style={{fontFamily: fonts, fontSize: 30}}>A</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.font}
          onPress={() => set_showsize(true)}>
          <Text style={{fontFamily: fonts, fontSize: 30}}>{size}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.font, {backgroundColor: '#b34f90'}]}
          onPress={() => setshowcolor(true)}
        />
      </View>
      <TouchableOpacity style={styles.add} onPress={() => set_showtype(true)}>
        <Icon name={'plus'} color={Secondary} size={24} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.save} onPress={() => submit()}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '700',
            letterSpacing: 1,
            fontFamily: PrimaryF,
          }}>
          {loading ? 'saving...' : 'save'}
        </Text>
      </TouchableOpacity>
    </View>
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
  };
};

const mapDispatchToProp = dispatch => ({
  setContentData: userData =>
    dispatch(userAuthActions.setContentData(userData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProp,
)(Story);
