import React, {useEffect, useState,useRef, useReducer} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
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
import {connect} from 'react-redux';
import * as competitionActions from '@Actions/competition.action';
import {moderateScale} from 'react-native-size-matters';
import {timeFormat} from '../../../utils/service';
const CompetitionPage = ({
  navigation,
  getTournamentList,
  isLoading,
  tournamentList,
}) => {
  const [refreshing, setRefresh] = useState(false);
  useEffect(() => {
    getTournamentList();
    console.log(tournamentList);
  }, []);
  const image = useRef()
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
 

  const onRefresh = () => {
    if (isLoading) {
      setRefresh(true);
    } else {
      setRefresh(false);
    }
    getTournamentList();
  };
  const renderGame = item => {
    return (
      <TouchableOpacity
        style={styles.wrapper}
        onPress={() =>
          navigation.navigate('Participant', {id: item.tournament_id})
        }>
          <LinearGradient locations={[0,1]} colors= {['rgba(0,0,0,0.00)', 'rgba(0,0,0,0.80)']} style={styles.image}>
          <Image
          style={styles.image}
          source={{
            uri:
              'https://www.telegraph.co.uk/content/dam/gaming/2017/09/26/League-of-Legends-Worlds-Image_trans_NvBQzQNjv4BqNJjoeBT78QIaYdkJdEY4CnGTJFJS74MYhNY6w3GNbO8.jpg?imwidth=450',
          }}
        />  

          </LinearGradient>


        <View style={styles.gameWrapper}>
          <Text style={styles.timeText}>{timeFormat(item.time)}</Text>
          <Text style={styles.gameName}>{item.title}</Text>
          <Text style={styles.gameText}>{item.host_name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const renderAd = () => {
    return (
      <View style={styles.Adcontainer}>
        <NativeAdView
          style={styles.adContainer}
          adUnitID="ca-app-pub-2085032768852939/1539246216" // TEST adUnitID
        >
          <View style={{justifyContent:'center',alignItems:'center'}}>
          <MediaView style={{width:200,height:200}}/>

          </View>
     
          <View style={[{flexDirection: 'row'}]}>
            <AdBadge
              style={{
                marginLeft: moderateScale(5),
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
  if (isLoading) {
    return (
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {renderAd()}
        {!tournamentList.length ? (
          <Text>Np Game available</Text>
        ) : (
          <ActivityIndicator animating />
        )}
      </ScrollView>
    );
  } else {
    return (
      <LinearGradient
        colors={['#000000', '#000000']}
        angle={130}
        style={{flex: 1}}>
        <ScrollView
          style={styles.container}
          stickyHeaderIndices={[1]}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
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
          {renderAd()}
          <View>
            <Text style={styles.header1}>Today</Text>
            <View>{tournamentList.map(item => renderGame(item))}</View>
          </View>
          <View />
        </ScrollView>
      </LinearGradient>
    );
  }
};
const mapStateToProps = state => {
  return {
    isLoading: state.tournament.isLoading,
    isError: state.tournament.isError,
    isSuccess: state.tournament.isSuccess,
    username: state.auth.username,
    tournamentList: state.tournament.tournamentList,
  };
};
const mapDispatchToProp = dispatch => ({
  getTournamentList: userData =>
    dispatch(competitionActions.getTournamentList()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProp,
)(CompetitionPage);
