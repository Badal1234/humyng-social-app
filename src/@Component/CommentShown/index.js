import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
const data = [
  {
    profile_uri:
      'https://firebasestorage.googleapis.com/v0/b/story-3a905.appspot.com/o/profilepic%2FSissd%2Fprofile.jpg?alt=media&token=c59e766e-3c9e-476a-b6db-5ec6dba141c1',
    name: 'siddharth',
    comment: 'Very Good @content',
    likes: 5,
    time: 'sometjing',
    replies: [
      {
        profile_url:
          'https://firebasestorage.googleapis.com/v0/b/story-3a905.appspot.com/o/profilepic%2FSissd%2Fprofile.jpg?alt=media&token=c59e766e-3c9e-476a-b6db-5ec6dba141c1',
        name: 'badal',
        reply: 'Really',
        likes: 5,
        time: 'someringr',
      },
      {
        profile_url:
          'https://firebasestorage.googleapis.com/v0/b/story-3a905.appspot.com/o/profilepic%2FSissd%2Fprofile.jpg?alt=media&token=c59e766e-3c9e-476a-b6db-5ec6dba141c1',
        name: 'badal',
        reply: 'Really',
        likes: 5,
        time: 'someringr',
      },
      {
        profile_url:
          'https://firebasestorage.googleapis.com/v0/b/story-3a905.appspot.com/o/profilepic%2FSissd%2Fprofile.jpg?alt=media&token=c59e766e-3c9e-476a-b6db-5ec6dba141c1',
        name: 'badal',
        reply: 'Really yoo yoo yooo yoo',
        likes: 5,
        time: 'someringr',
      },
    ],
  },
];

const comment = a => {
  if (a.charAt(0) === '@') {
    return (
      <TouchableOpacity style={{marginRight: 2}}>
        <Text style={styles.spec}>{a}</Text>
      </TouchableOpacity>
    );
  } else {
    return <Text style={{marginRight: 2,color:'white'}}>{a}</Text>;
  }
};

const renderReply = reply => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View>
        <TouchableOpacity style={[styles.profile_reply]}>
          <Image
            source={{uri: reply.profile_url}}
            style={styles.profile_reply}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.text}>
        <TouchableOpacity>
          <Text style={styles.name_reply}>{reply.name}</Text>
        </TouchableOpacity>
        <View>
          <View style={styles.comment}>
            {reply.reply.split(' ').map(text => comment(text))}
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Icon name={'heart'} size={18} color={'red'} />
          </TouchableOpacity>
          <Text style={styles.like}>{reply.likes}</Text>
        </View>
      </View>
    </View>
  );
};

const renderComment = data => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View>
        <TouchableOpacity style={styles.profile}>
          <Image source={{uri: data.profile_uri}} style={styles.image} />
        </TouchableOpacity>
      </View>
      <View style={styles.text}>
        <TouchableOpacity>
          <Text style={styles.name}>{data.name}</Text>
        </TouchableOpacity>
        <View>
          <View style={styles.comment}>
            {data.comment.split(' ').map(text => comment(text))}
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Icon name={'heart'} size={18} color={'red'} />
          </TouchableOpacity>
          <Text style={styles.like}>{data.likes}</Text>
          <TouchableOpacity style={styles.replytext}>
            <Text>reply</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={{height: 120}} showsVerticalScrollIndicator={false}>
          {data.replies.map(reply => renderReply(reply))}
        </ScrollView>
      </View>
    </View>
  );
};

export default function Comment() {
  return <ScrollView style={{marginTop:10}}>{data.map(data => renderComment(data))}</ScrollView>;
}
