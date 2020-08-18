import React from 'react';
import {View} from 'react-native';
import {Bubble, Message, MessageText} from 'react-native-gifted-chat';
import {styles} from './styles';
export const messageBubbble = props => (
  <Bubble
    {...props}
    wrapperStyle={{
      left: styles.leftMessageContainer,
      right: styles.leftMessageContainer,
    }}
  />
);

export const messageContainer = props => <Message {...props} />;

export const messageText = props => (
  <MessageText {...props} textStyle={{left: styles.text, right: styles.text}} />
);

export const renderFooter = () =>(
<View style={styles.footer}>

</View>
)