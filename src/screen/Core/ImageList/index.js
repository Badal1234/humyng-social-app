/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Text,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Config from '@Config/default';
import Axios from 'axios';
import * as Api from '../../../Api/image';
import {FlatList} from 'react-native-gesture-handler';
import {styles} from './styles';
import RNFetchBlob from 'rn-fetch-blob';
import ImageResizer from 'react-native-image-resizer';

const {key} = Config;
export default function ImageList({navigation, set_path,set_loading}) {
  const [uri, set_uri] = useState([]);
  const [name, set_name] = useState('');
  const [page, set_page] = useState(1);
  const [query, set_query] = useState('background');
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  useEffect(() => {
    console.log(page);
    Api.SearchQuery(query, page + 1, 18).then(data =>
      set_uri([...uri, ...data.results]),
    );
    console.log(uri.length);
  }, [page, query]);
  const loadMore = () => {
    if (page < 10) {
      set_page(page + 1);
    }
  };
  const onPress = item => {
    set_loading(true)
    set_name(item.description);
    RNFetchBlob.config({
      fileCache: true,
      path: `/storage/emulated/0/com.humyng/${item.description}.jpg`,
    })
      .fetch('GET', item.links.download, {})
      .then(data => {
        set_loading(false)
        set_path({path: data.data, name: name});
      });
  };
  const renderImage = item => {
    return (
      <TouchableOpacity onPress={() => onPress(item)}>
        <FastImage
          style={{width: width / 3, height: height / 6}}
          source={{
            uri: item.urls.small,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <View>
        <TextInput
          style={styles.search}
          placeholder={'search'}
          onChangeText={text => {
            set_query(text);
            set_uri([]);
            set_page(1);
          }}
        />
      </View>
      <View>
        <Text>Unplash</Text>
      </View>
      <FlatList
        data={uri}
        renderItem={({item}) => renderImage(item)}
        key={item => item.id}
        numColumns={3}
        onEndReached={() => loadMore()}
        maxToRenderPerBatch={18}
        updateCellsBatchingPeriod={100}
        refreshing={true}
      />
    </View>
  );
}
