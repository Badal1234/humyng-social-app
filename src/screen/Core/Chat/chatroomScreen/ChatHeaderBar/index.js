import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {KeyToUri} from '../../../../../utils/service';
const HeaderBar = ({user_details, navigation}) => {
  const [profile_uri, set_profile] = useState('');
  console.log('as');
  KeyToUri(user_details.profile_key.key).then(uri => set_profile(uri));
  console.log(user_details.user_id);
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name={'chevron-left'} color={'white'} size={18} />
      </TouchableOpacity>

      <TouchableOpacity
        style={{flexDirection: 'row', alignItems: 'center'}}
        onPress={() =>
          navigation.navigate('ProfilePage', {userId: user_details.user_id})
        }>
        <View>
          <Image source={{uri: profile_uri}} style={styles.profile} />
        </View>
        <View>
          <Text style={styles.name}>{user_details.username}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBar;
