/* eslint-disable react-native/no-inline-styles */
import React, {useState, useCallback, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  PanResponder,
  Animated,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {RNPhotoEditor} from 'react-native-photo-editor';
import {moderateScale} from 'react-native-size-matters';
import {styles} from './styles';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import Modal from 'react-native-modal';
import ImageList from '../ImageList';
import Slider from '@react-native-community/slider';
import Config from '@Config/default';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FlatList} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import * as userAuthActions from '@Actions/user.authAction';
const {
  Colors: {LightGrey, DarkGrey, Black, Primary, Secondary},
  font: {PrimaryF, light},
} = Config;
const Imageposter = ({navigation, path}) => {
  const [uri, set_uri] = useState(navigation.getParam('path'));
  const [font, set_font] = useState(light);
  const [modal, set_modal] = useState(false);
  const [size, set_size] = useState(5);
  const [choose, set_choose] = useState('image');
  const colors = ['#fff', '#fff'];
  const fonts = [PrimaryF, light];
  const [path_file, set_path] = useState(null);
  const [loading, set_loading] = useState(false);

  const renderImage = () => {
    return <ImageList set_path={set_path} set_loading={set_loading} />;
  };
  const submit = () => {
    console.log(path_file);
    if (!path_file) {
      navigation.navigate('MediaInfo');
    } else {
      return (
        <View>
          {RNPhotoEditor.Edit({
            path: `${path_file.path}`,
            onDone: data => {
              console.log(data);
              navigation.navigate('MediaInfo', {
                path: `file://${data}`,
                name: path_file.name,
              });
            },
          })}
        </View>
      );
    }
  };
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={{width: width, height: height / 2, alignItems: 'center'}}>
        {path_file ? (
          <Image
            source={{
              uri: `file://${path_file.path}`,
            }}
            resizeMode={'contain'}
            style={{height: 400, width: width}}
          />
        ) : (
          <View style={{alignItems: 'center'}}>
            <Icon name={'upload'} size={200} color={LightGrey} />
            <Text>choose from gallery</Text>
            <ActivityIndicator animating={loading} />
          </View>
        )}
        <View style={{position: 'absolute', height: 400, width: width}}>
          <View
            style={{
              height: 400,
            }}>
            <Text style={{color: 'white', fontSize: size}}>
              TUFutftufjyvsvf fvshbsfhvbsfhv hvbhfvievuhv jibhruigbrbgrhrgb
              jhhbuigbirb rgb jbjjbghjnrb gbnrgbjhbrhbjrg hbbgbhjbjhrbg
              hjrjigbnrgbngrnbr{' '}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <TouchableOpacity onPress={() => set_choose('image')}>
          <Text style={styles.text}>choose your poster image</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginLeft: moderateScale(20)}}
          onPress={() => submit()}>
          <Icon name={'long-arrow-right'} size={24} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {choose === 'image' ? renderImage() : renderDesign()}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    path: state.file.path,
  };
};

const mapDispatchToProp = dispatch => ({
  setUserLoginData: userData =>
    dispatch(userAuthActions.setContentData(userData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProp,
)(Imageposter);
