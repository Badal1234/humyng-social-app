import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {KeyToUri} from '../../../../../utils/service';
import UserBody from './userBody';
import {getUserList} from '../../../../../Api/chat';

//const user = []
const NewChat = ({navigation}) => {
  const [name, set_name] = useState('');
  const [user, set_user] = useState([]);
  console.log(user)
  useEffect(() => {
    getUserList({name: name})
      .then(data => set_user(data.data))
      .catch(err => console.log(err));
  }, [name]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.left} onPress={()=>navigation.goBack()}>
          <Icon name={'chevron-left'} color={'white'} size={24}/>
        </TouchableOpacity>
        <Text style={styles.newMessage}>New Message</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.icon}>
          <Icon name={'search'} size={18} color={'white'} />
        </View>
        <TextInput style={styles.input} onChangeText={text => set_name(text)} placeholder={'search'} placeholderTextColor={'white'} />
      </View>
      <View style={{marginTop: 20}}>
        {!user.length ? (
          <Text>No User</Text>
        ) : (
          <ScrollView >
            {user.map(item => <UserBody item={item} navigation={navigation}/>)}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default NewChat;
