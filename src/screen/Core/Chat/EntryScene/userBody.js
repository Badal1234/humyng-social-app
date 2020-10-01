import React, {useState} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {KeyToUri, messageTime} from '../../../../utils/service';
import {styles} from './styles';
const ChatBody = ({item, navigation}) => {
  const [profile_pic, set_profile] = useState('');
  console.log(item);
  KeyToUri(item.user_details.profile_key.key)
    .then(data => set_profile(data))
    .catch(err => console.log(err));
  console.log(profile_pic);
  return (
    <TouchableOpacity
      style={styles.chatBody}
      onPress={() =>
        navigation.navigate('chatRoom', {
          user_details: item.user_details,
          chatRoomId: item.chatRoomId,
        })
      }>
      <View>
        <Image source={{uri: profile_pic}} style={styles.image} />
      </View>
      <View style={styles.box}>
        <View style={styles.upper}>
          <Text style={styles.username}>{item.user_details.username}</Text>
          <Text style={styles.time}>
            {messageTime(
              item.LastMessage ? item.LastMessage.createdAt : new Date(),
            )}
          </Text>
        </View>
        <View>
          <Text style={styles.message}>
            {item.LastMessage ? item.LastMessage.text : null}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatBody;
