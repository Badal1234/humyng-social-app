import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {styles} from './styles';
import Comment from '../CommentShown';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default function CommentModal({visible, setVisible}) {
  return (
    <View style={styles.container}>
      <Modal isVisible={visible} style={styles.modal} backdropOpacity={0}>
        <View style={styles.mid}>
          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center'}}
            onPress={() => setVisible(false)}>
            <Icon name="chevron-down" color={'white'} size={18} />
          </TouchableOpacity>

          <Comment />
        </View>
      </Modal>
    </View>
  );
}
