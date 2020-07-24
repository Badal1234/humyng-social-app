/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {View, Dimensions, FlatList} from 'react-native';
import Draggable from 'react-native-draggable';
import VideoPlayer from '@Component/VideoPlayer';
import RenderStory from '@Component/RenderStory';
import AdCard from '@Component/Adspace';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {moderateScale} from 'react-native-size-matters';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const data1 = [{id: 'd', type: 'video'}];

const RenderScreen = () => {
  const scroll = useRef();
  const [index1, set_index] = useState(0);

  const body = item => {
    return item;
  };

  const renderItem = ({item, index}) => {
    console.log(index);
    if (index === index1) {
      console.log(index);
      switch (item.type) {
        case 'video':
          return <VideoPlayer />;
        case 'audio':
          return <VideoPlayer />;
        case 'text':
          return <RenderStory />;
        case 'ad':
          return <AdCard />;
      }
    } else {
      return <View />;
    }
  };

  return (
    <View style={{flex: 1}}>
      <View>
        <FlatList
          ref={scroll}
          data={data1}
          renderItem={(item, index) => renderItem(item, index)}
          horizontal={true}
          scrollEnabled={false}
          key={item => item.id}
          getItemLayout={(data, index) => ({
            length: width,
            offset: width * index,
            index,
          })}
        />
      </View>

      <View style={{position: 'absolute'}}>
        <View
          style={{
            marginTop: moderateScale(height / 2),
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <View
            style={{
              marginLeft: moderateScale(width / 1.24),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Draggable
              x={10}
              y={10}
              renderColor={'white'}
              isCircle
              renderSize={50}
              getItemLayout={index => ({
                length: width,
                offset: width * index,
                index,
              })}
              onShortPressRelease={() => {
                if (index1 < data1.length - 1) {
                  scroll.current.scrollToIndex({
                    index: index1 + 1,
                    animated: true,
                  });
                  set_index(index1 + 1);
                }
              }}>
              <View
                style={{
                  height: moderateScale(50),
                  width: moderateScale(50),
                  borderRadius: moderateScale(25),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name={'chevron-right'} size={24} color={'black'} />
              </View>
            </Draggable>
          </View>

          <Draggable
            x={10}
            y={10}
            renderColor={'white'}
            isCircle
            renderSize={50}
            getItemLayout={(data, index) => ({
              length: width,
              offset: width * index,
              index,
            })}
            onShortPressRelease={() => {
              if (index1 > 0) {
                scroll.current.scrollToIndex({
                  index: index1 - 1,
                  animated: true,
                });
                set_index(index1 - 1);
              }
            }}>
            <View
              style={{
                height: moderateScale(50),
                width: moderateScale(50),
                borderRadius: moderateScale(25),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name={'chevron-left'} size={24} color={'black'} />
            </View>
          </Draggable>
        </View>
      </View>
    </View>
  );
};

export default RenderScreen;
