/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat, InputToolbar} from 'react-native-gifted-chat';
import {View} from 'react-native';
import {API} from 'aws-amplify';
import {} from 'react-native-vector-icons/FontAwesome5';
import * as postActions from '@Actions/post.Action';
import {connect} from 'react-redux';
import {renderComposer, renderSend,renderAction} from './inputBar';
import {
  messageBubbble,
  messageContainer,
  messageText,
  renderFooter,
} from './message';
import {styles} from './styles';
import io from 'socket.io-client';
let socket;
const ChatScreen = ({token, state, username}) => {
  const [sendmessages, setsendMessages] = useState([]);
  const [receiveMessage, setreceiveMessage] = useState([]);
  const [messages, setMessages] = useState([]);
  const renderInputToolbar = () => {
    return <InputToolbar />;
  };

  console.log(state);
  let to = 'hdhdhdh';

  useEffect(() => {
    socket = io('http://192.168.43.201:3000', {query: {token: token}});
  }, []);

  useEffect(() => {
    console.log('aa');
    socket.emit('start', {token: token});
  }, []);

  console.log(messages)

  useEffect(() => {
    socket.on('receiveMessage', message => {
      console.log(message);
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, message),
      );
      // console.log('aa');
      // console.log(messages);
      // setMessages(GiftedChat.append(messages, message.message));
      //GiftedChat.append(messages, message);
      //setMessages([...messages, message]);
    });
  }, []);

  useEffect(() => {
    setMessages([
      {
        _id: 2000,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((message = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, message),
    );
    socket.emit('sendMessage', {message: message, to: to, token: token});
  }, []);

  //console.log(messages);

  return (
    <GiftedChat
      messages={messages}
      onSend={message => onSend(message)}
      renderActions={renderAction}
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
        _id: username,
      }}
    />
  );
};

const mapStateToProps = state => {
  return {
    state: state,
    token: state.auth.token,
    username: state.auth.username,
  };
};
const mapDispatchToProp = dispatch => {
  return {
    LoadPost: userData => dispatch(postActions.LoadPost(userData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProp,
)(ChatScreen);
//export default ChatScreen;
