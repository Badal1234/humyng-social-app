import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  ScrollView,
  FlatList,
  Text,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ChatBody from './userBody';
import Animated from 'react-native-reanimated';
import {
  InterstitialAd,
  TestIds,
  AdEventType,
} from '@react-native-firebase/admob';
import {getChatList} from '../../../../Api/chat';
const chat = [
  {username: 'siddharth', message: 'Hii', timestamp: new Date()},
  {username: 'siddharth', message: 'Hii', timestamp: new Date()},
  {username: 'siddharth', message: 'Hii', timestamp: new Date()},
  {username: 'siddharth', message: 'Hii', timestamp: new Date()},
  {username: 'siddharth', message: 'Hii', timestamp: new Date()},
];

const header = [
  {routename: 'Personal Chats', key: 0},
  {routename: 'match Chat', key: 1},
  {routename: 'group', key: 2},
];

const EntryScene = ({navigation}) => {
  const userId = navigation.navigate('userId');
  const [focous, setFocous] = useState(0);
  const [data, set_data] = useState([]);
  const [load, set_load] = useState(false);
  const scroll = useRef();

  useEffect(() => {
    getChatList()
      .then(data => set_data(data.data))
      .catch(err => console.log(err));
  }, []);

  const SeparatorComponent = () => {
    return <View style={styles.separator} />;
  };
  const headerBody = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setFocous(item.key);
          console.log(focous == index);
          scroll.current.scrollToIndex({index: item.key, animated: true});
        }}
        style={{opacity: item.key === focous ? 1 : 0}}
      />
    );
  };
  const refresh = () => {
    set_load(true);
    setTimeout(() => {
      getChatList()
        .then(data => console.log(data))
        .catch(err => console.log(err));
      set_load(false);
    }, 2000);
  };
  return (
    <View style={styles.chatContainer}>
      <StatusBar backgroundColor={'#2b2c33'} />
      <View style={styles.header}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={styles.chat}>Chat</Text>
          </View>
          <TouchableOpacity
            style={styles.plus}
            onPress={() => navigation.navigate('NewChat')}>
            <Icon name={'plus'} size={16} color={'white'} />
          </TouchableOpacity>
        </View>
        <View>
          <ScrollView horizontal contentContainerStyle={styles.division}>
            {header.map((item, index) => headerBody(item, index))}
          </ScrollView>
        </View>
      </View>
      {!data.length ? <Text>No Chat</Text>
      :
        (
        <FlatList
          data={data}
          renderItem={({item}) => <ChatBody item={item} navigation={navigation} />}
          ItemSeparatorComponent={SeparatorComponent}
          refreshControl={
            <RefreshControl onRefresh={refresh} refreshing={load} />
          }
        />
      )}
    </View>
  );
};

export default EntryScene;
