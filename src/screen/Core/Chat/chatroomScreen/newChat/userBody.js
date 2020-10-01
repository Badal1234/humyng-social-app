import React, {useState} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {styles} from './styles';
import {KeyToUri} from '../../../../../utils/service'
const UserBody = ({item, navigation}) => {
  console.log(item)
  const [profile_uri, set_uri] = useState('');
  KeyToUri(item.profile_key).then(uri => set_uri(uri));
  console.log(profile_uri)
  return (
    <TouchableOpacity
      style={styles.user}
      onPress={() => navigation.navigate('chatRoom',{user_details:item})}>
      <View>
        <Image source={{uri: profile_uri}} style={styles.image} />
      </View>
      <View>
        <Text style={styles.name}>{item.username}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default UserBody;
