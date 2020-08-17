/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat, InputToolbar} from 'react-native-gifted-chat';
import {View} from 'react-native';
import {} from 'react-native-vector-icons/FontAwesome5';
import {renderComposer, renderSend} from './inputBar';
import {
  messageBubbble,
  messageContainer,
  messageText,
  renderFooter,
} from './message';
import {styles} from './styles';
import io from 'socket.io-client';
let socket;
export default function Example() {
  const [sendmessages, setsendMessages] = useState([]);
  const [receiveMessage, setreceiveMessage] = useState([]);
  const [messages, setMessages] = useState([]);
  const renderInputToolbar = () => {
    return <InputToolbar />;
  };

  useEffect(() => {
    socket = io('http://192.168.43.201:3000');
  }, []);

  useEffect(() => {
    socket.emit('start', {username: 'hdhdhdh'});
  }, []);

  useEffect(() => {
    socket.on('receiveMessage', message => {
      console.log(message);
      console.log('aa');
      console.log(messages);
      setMessages([...messages, message]);
    });
  }, []);

  const onSend = message => {
    console.log(messages);
    console.log(message);
    socket.emit('sendMessage', {message: message});
    setMessages([...messages, ...message]);
    setMessages(GiftedChat.append(messages, message));
    console.log(messages);
  };

  console.log(messages);

  return (
    <GiftedChat
      messages={messages}
      onSend={message => onSend(message)}
      //renderActions={renderAction}
      //   renderInputToolbar={renderInputToolbar}
      renderComposer={renderComposer}
      renderSend={renderSend}
      messagesContainerStyle={styles.container}
      renderBubble={messageBubbble}
      renderMessage={messageContainer}
      renderMessageText={messageText}
      renderFooter={renderFooter}
      loadEarlier={true}
      user={{
        _id: 1,
      }}
    />
  );
}

//export default ChatScreen;
