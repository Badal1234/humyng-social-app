/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Alert,
  ScrollView,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {styles} from './styles';
import {
  ScrollableTabView,
  ScrollableTabBar,
} from '@valdio/react-native-scrollable-tabview';
import PodcastScreen from './podcastScreen';
import {color} from 'react-native-reanimated';
import {getPosts} from '../../../Api/Post';
import {connect} from 'react-redux';
import * as postActions from '@Actions/post.Action';
import CardView from '@Component/CardView';
import Modal from 'react-native-modal';
import RenderStory from '@Component/RenderStory';
const EnterScreen = ({
  post,
  LoadPost,
  isLoading,
  error,
  isError,
  navigation,
}) => {
  const [source, setSource] = useState('');
  const [visible, set_visible] = useState(true);
  useEffect(() => {
    LoadPost();
    console.log(post);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.feed}>Arcrena</Text>
      </View>
      <View>
        <View style={styles.wrapper}>
          <FlatList
            style={{marginBottom: 100}}
            data={post}
            renderItem={({item}) => (
              <View>
                <CardView
                  data={item}
                  type={item.type}
                  navigation={navigation}
                />
              </View>
            )}
            key={item => item.title}
          />
        </View>
        <Modal
          isVisible={visible}
          style={styles.modal}
          backdropOpacity={0}
          onBackButtonPress={() => set_visible(!visible)}
          onBackdropPress={() => set_visible(!visible)}
          animationIn={'slideInUp'}
          animationOut={'slideOutDown'}
          useNativeDriver={true}
          animationInTiming={100}
          animationOutTiming={100}>
          <View style={styles.BigStory}>
            <RenderStory />
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    post: state.post.post_data,
    error: state.post.error,
    isLoading: state.post.isLoading,
    isError: state.post.isError,
  };
};
const mapDispatchToProp = dispatch => ({
  LoadPost: userData => dispatch(postActions.LoadPost(userData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProp,
)(EnterScreen);
