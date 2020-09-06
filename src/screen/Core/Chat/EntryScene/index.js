import React, {useState, useRef} from 'react';
import {View, ScrollView, FlatList, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Animated from 'react-native-reanimated';

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
  const [focous, setFocous] = useState(0);
  const scroll = useRef();
  const ChatBody = ({item}) => {
    console.log(item.username);
    return (
      <TouchableOpacity style={styles.chatBody} 
      onPress={ () => navigation.navigate('chatRoom')}>
        <View style={styles.profile} />
        <View style={styles.box}>
          <View>
            <Text style={styles.username}>{item.username}</Text>
          </View>
          <View>
            <Text style={styles.message}>{item.message}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };


  const SeparatorComponent = () => {
    return <View style={styles.separator} />;
  };
  const headerBody = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setFocous(item.key);
          console.log(focous==index);   
          scroll.current.scrollToIndex({index:item.key, animated: true});
        }}
        style={{opacity: item.key === focous ? 1 : 0}}>
        <View style={styles.bar}>
          <Text style={styles.text}>{item.routename}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.chatContainer}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={styles.chat}>Chat</Text>
          </View>
          <View>
            <Icon name={'plus'} size={24} color={'white'} />
          </View>
        </View>
        <View>
          <ScrollView horizontal contentContainerStyle={styles.division}>
            {header.map((item, index) => headerBody(item, index))}
          </ScrollView>
        </View>
      </View>
      <FlatList horizontal ref={scroll}  data = {header}  renderItem={()=>(
        <>
                <FlatList

                data={chat}
                renderItem={({item}) => <ChatBody item={item} />}
                ItemSeparatorComponent={SeparatorComponent}
              />
              <FlatList
                data={chat}
                renderItem={({item}) => <ChatBody item={item} />}
                ItemSeparatorComponent={SeparatorComponent}
              />
              <FlatList
                data={chat}
                renderItem={({item}) => <ChatBody item={item} />}
                ItemSeparatorComponent={SeparatorComponent}
              />
              </>

      )}/>

      
    </View>
  );
};

export default EntryScene;
