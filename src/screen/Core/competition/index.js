import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import NativeAdView, {
  CallToActionView,
  IconView,
  HeadlineView,
  TaglineView,
  AdvertiserView,
  AdBadge,
  MediaView,
} from 'react-native-admob-native-ads';
import {moderateScale} from 'react-native-size-matters';
const CompetitionPage = ({navigation}) => {
  const data = [
    {
      time: new Date(),
      name: 'Pro Match',
      profile: '',
    },
    {
      time: new Date(),
      name: 'Pro Match',
      profile: '',
    },
    {
      time: new Date(),
      name: 'Pro Match',
      profile: '',
    },
    {
      time: new Date(),
      name: 'Pro Match',
      profile: '',
    },
    {
      time: new Date(),
      name: 'Pro Match',
      profile: '',
    },
    {
      time: new Date(),
      name: 'Pro Match',
      profile: '',
    },
  ];
  const renderGame = item => {
    return (
      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => navigation.navigate('ChatStack')}>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://www.telegraph.co.uk/content/dam/gaming/2017/09/26/League-of-Legends-Worlds-Image_trans_NvBQzQNjv4BqNJjoeBT78QIaYdkJdEY4CnGTJFJS74MYhNY6w3GNbO8.jpg?imwidth=450',
          }}
        />
        <View style={styles.gameWrapper}>
          <Text style={styles.gameText}>Game Provider</Text>
          <Text style={styles.gameName}>Name</Text>
          <Text style={styles.timeText}>Time</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const renderAd = () => {
    return (
      <View style={styles.Adcontainer}>
        <NativeAdView
          style={styles.adContainer}
          adUnitID="ca-app-pub-2085032768852939/2994627257" // TEST adUnitID
        >
          <MediaView style={styles.image}/>
         
          <View style={[{flexDirection: 'row'}]}>
            <AdBadge
              style={{
                marginLeft: moderateScale(0),
                backgroundColor: 'white',
              }}
            />
            <IconView style={[styles.icon, {marginLeft: moderateScale(20)}]} />
            <View
              style={{
                marginLeft: moderateScale(20),
                borderWidth: 0.5,
                borderBottomColor: '#874dc6',
                width: '90%',
              }}>
              <HeadlineView
                style={{
                  fontWeight: 'bold',
                  fontSize: 13,
                  color: 'white',
                }}
              />
              <TaglineView
                numberOfLines={1}
                style={{
                  fontSize: 7,
                  color: 'white',
                }}
              />
              <AdvertiserView
                style={{
                  fontSize: 10,
                  color: 'white',
                }}
              />
            </View>
          </View>
        </NativeAdView>
      </View>
    );
  };
  return (
    <ScrollView style={styles.container} stickyHeaderIndices={[]}>
  
      <View style={{alignItems: 'center'}}>
      
        <View style={styles.search}>
          <View style={{justifyContent: 'center'}}>
            <Icon name={'search'} color={'white'} size={14} />
          </View>

          <TextInput focusable={false} style={styles.inputbar} />
        </View>
        <TouchableOpacity
          style={styles.host}
          onPress={() => navigation.navigate('Registration')}>
          <Text style={styles.hostText}>Want To host tournament</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.header1}>Today</Text>
        <View>
          {data.splice(0, data.length).map(item => renderGame(item))}
          {renderAd()}
          {data.map(item => renderGame(item))}
        </View>
      </View>
      <View />
    </ScrollView>
  );
};

export default CompetitionPage;
