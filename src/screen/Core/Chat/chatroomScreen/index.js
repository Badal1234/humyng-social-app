/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat, InputToolbar} from 'react-native-gifted-chat';
import {View} from 'react-native';
import {API} from 'aws-amplify';
import {} from 'react-native-vector-icons/FontAwesome5';
import * as postActions from '@Actions/post.Action';
import * as chatAction from '@Actions/chat.action';
import {connect} from 'react-redux';
import {renderComposer, renderSend, renderAction} from './inputBar';
import {
  messageBubbble,
  messageContainer,
  messageText,
  renderFooter,
} from './message';
import {styles} from './styles';
import io from 'socket.io-client';
import HeaderBar from './ChatHeaderBar/index';
let socket;
const ChatScreen = ({
  token,
  state,
  username,
  navigation,
  messages,
  saveMessage,
  LoadChats,
}) => {
  const [sendmessages, setsendMessages] = useState([]);
  const [receiveMessage, setreceiveMessage] = useState([]);
  // const [messages, setMessages] = useState([]);
  const user_details = navigation.getParam('user_details');
  const chatRoomId = navigation.getParam('chatRoomId');
  const renderInputToolbar = () => {
    return <InputToolbar />;
  };
  let to = 'hdhdhdh';

  useEffect(() => {
    socket = io(
      'http://ec2-13-235-87-244.ap-south-1.compute.amazonaws.com:3000',
      {query: {token: token}},
    );
  }, []);

  useEffect(() => {
    console.log('aa');
    socket.emit('start', {token: token, to: user_details.user_id});
  }, []);

  console.log('message', messages);
  useEffect(() => {
    chatRoomId ? LoadChats({room: chatRoomId}) : null;
  }, []);
  console.log(state);

  useEffect(() => {
    socket.on('receiveMessage', message => {
      console.log(message);
      saveMessage({roomId: user_details.user_id, message: message[0]});
      // console.log('aa');
      // console.log(messages);
      // setMessages(GiftedChat.append(messages, message.message));
      //GiftedChat.append(messages, message);
      //setMessages([...messages, message]);
    });
  }, []);

  useEffect(() => {}, []);

  const onSend = useCallback((message = []) => {
    console.log(message);
    saveMessage({roomId: user_details.user_id, message: message[0]});
    socket.emit('sendMessage', {
      message: message,
      to: user_details.user_id,
      token: token,
    });
  }, []);

  //console.log(messages);

  return (
    <>
      {<HeaderBar user_details={user_details} navigation={navigation} />}
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
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const {navigation} = ownProps;
  const {user_id} = navigation.getParam('user_details');
  return {
    state: state.chat,
    token: state.auth.token,
    username: state.auth.username,
    messages: state.chat.messageList[user_id],
  };
};
const mapDispatchToProp = dispatch => {
  return {
    LoadPost: userData => dispatch(postActions.LoadPost(userData)),
    saveMessage: messageBody => dispatch(chatAction.saveChat(messageBody)),
    LoadChats: body => dispatch(chatAction.getChat(body)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProp,
)(ChatScreen);
//export default ChatScreen;
