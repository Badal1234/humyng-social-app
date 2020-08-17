import React, { useState } from 'react';
import {View, Text, ScrollView, Linking, Alert, Image} from 'react-native';
import {styles} from './styles';
import ParsedText from 'react-native-parsed-text';
import CommentBox from '@Component/CommentBox'

const comments = [
  {
    comment: 'Yaa it is very good',
    time: new Date(),
    like: 5,
    reply: 10,
    user_id: '12121212',
  },
];

const commentSection = () => {
  const [comment,set_comment] = useState(null)
  function renderText(matchingString, matches) {
    // matches => ["[@michel:5455345]", "@michel", "5455345"]
    let pattern = /\@[\S]*/;
    let match = matchingString.match(pattern);
    console.log(match);
    return `^^${match[1]}^^`;
  }
  function handleUrlPress(url, matchIndex /*: number*/) {
    Linking.openURL(url);
  }

  function handlePhonePress(phone, matchIndex /*: number*/) {
    Alert.alert(`${phone} has been pressed!`);
  }

  function handleNamePress(name, matchIndex /*: number*/) {
    Alert.alert(`Hello ${name}`);
  }

  function handleEmailPress(email, matchIndex /*: number*/) {
    Alert.alert(`send email to ${email}`);
  }

  const renderReply = () => {
    return (
      <View style={styles.replycontainer}>
        <Image style={styles.image} />
        <Text style={styles.name}>
          Name
          <ParsedText
            style={styles.text}
            parse={[
              {type: 'url', style: styles.url, onPress: handleUrlPress},
              {
                type: 'phone',
                style: styles.phone,
                onPress: handlePhonePress,
              },
              {
                type: 'email',
                style: styles.email,
                onPress: handleEmailPress,
              },
              {
                pattern: /Bob|David/,
                style: styles.name,
                onPress: handleNamePress,
              },
              {
                pattern: /@[\S]*/,
                style: styles.username,
                onPress: handleNamePress,
                //renderText: renderText,
              },
              {pattern: /42/, style: styles.magicNumber},
              {pattern: /#(\w+)/, style: styles.hashTag},
            ]}
            childrenProps={{allowFontScaling: false}}>
            Hello jvjfkf fknfnfvknvngf gknfj @siddharth
          </ParsedText>
        </Text>
      </View>
    );
  };

  const renderComment = () => {
    return (
      <View>
        <View style={styles.commentcontainer}>
          <Image style={styles.image} />
          <Text style={styles.name}>
            Name
            <ParsedText
              style={styles.text}
              parse={[
                {type: 'url', style: styles.url, onPress: handleUrlPress},
                {
                  type: 'phone',
                  style: styles.phone,
                  onPress: handlePhonePress,
                },
                {
                  type: 'email',
                  style: styles.email,
                  onPress: handleEmailPress,
                },
                {
                  pattern: /Bob|David/,
                  style: styles.name,
                  onPress: handleNamePress,
                },
                {
                  pattern: /@[\S]*/,
                  style: styles.username,
                  onPress: handleNamePress,
                  //renderText: renderText,
                },
                {pattern: /42/, style: styles.magicNumber},
                {pattern: /#(\w+)/, style: styles.hashTag},
              ]}
              childrenProps={{allowFontScaling: false}}>
                  Hello jvjfkf fknfnfvknvngf gknfj @siddharth
            </ParsedText>
          </Text>
        
        </View>
        {renderReply()}
      </View>
    );
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {comments.map(item => renderComment(item))}
      <View style={styles.inputBox}>
        <CommentBox />

      </View>
    </ScrollView>
  );
};

export default commentSection;
