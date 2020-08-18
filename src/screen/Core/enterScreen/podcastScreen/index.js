import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, ScrollView, ImageBackground} from 'react-native';
import {styles} from './styles';
import CardView from '@Component/CardView';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PodcastCard from '@Component/podcastCard';

const data = [{title: 'my first audio'}, {title: 'my first audio'}];
const podcastScreen = ({LoadPost, post,form}) => {
  const [source, setSource] = useState('');
  useEffect(() => {
    LoadPost({form: form});
    console.log(post);
  }, []);z
  return (
    <View style={{flex: 1}}>
      <View>
        <Text style={styles.header}>Recents</Text>
        <View style={styles.wrapper}>
          <FlatList
            data={post}
            renderItem={({item}) => (
              <View>
                <CardView data={item} type={form} />
              </View>
            )}
            key={item => item.title}
          />
        </View>
      </View>
    </View>
  );
};

export default podcastScreen;
