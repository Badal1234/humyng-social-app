import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getAuthor} from '../../../../Api/Post';
import {getFromStorage} from '../../../../Api/misc';
import {UserDetails} from '../../../../Api/Auth';
import * as userAuthActions from '@Actions/user.authAction';
import {connect} from 'react-redux';
import FastImage from 'react-native-fast-image';
import {Auth} from 'aws-amplify';
import {KeyToUri} from '../../../../utils/service'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Profile = ({navigation, Logout, username}) => {
  const [data, set_data] = useState();
  const [profile_uri, set_profile_uri] = useState('');
  const user = navigation.getParam('userId');
  const contents = [
    {
      icon: 'bookmark',
      name: 'matches',
    },
    {
      icon: 'edit',
      name: 'Edit Profile',
      route: 'EditProfile',
      info: data,
    },
    {
      icon: 'wrench',
      name: 'Settings',
    },
  ];

  const posts = [
    
  
  ];

  const follows = [
    {
      name: 'follower',
      number: data?data.follower:null,
    },
    {
      name: 'following',
      number: data?data.following:null,
    },
  ];

  useEffect(() => {
    UserDetails({id: user ? user : username}).then((data)=>set_data(data))
  }, [user, username]);

  useEffect(()=>{
 KeyToUri(data?data.profile_key:null).then(uri=>set_profile_uri(uri)).catch(err=>console.l)
  },[profile_uri])


  const body = type => {
    return (
      <TouchableOpacity
        style={styles.bodyCard}
        onPress={() => navigation.navigate(type.route, {info: data})}>
        <View style={styles.icon}>
          <Icon name={type.icon} color={'white'} size={18} />
        </View>
        <View>
          <Text style={styles.object}>{type.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const iconChoose = type => {
    switch (type) {
      case 'image':
        return 'photo';
      case 'video':
        return 'play';
      default:
      // code block
    }
  };
  const follow = item => {
    return (
      <View style={styles.follow}>
        <Text style={{color: 'white'}}>{item.name}</Text>
        <View style={styles.number}>
          <Text style={{color: 'white'}}>{item.number}</Text>
        </View>
      </View>
    );
  };
  const renderImage = item => {
    return (
      <TouchableOpacity style={{marginTop: moderateScale(20)}}>
        <Image
          style={{width: width / 3, height: height / 6}}
          source={{
            uri:
              'https://firebasestorage.googleapis.com/v0/b/story-3a905.appspot.com/o/profilepic%2FSid%2Fprofile.jpg?alt=media&token=c0c3afad-7906-448e-ba8b-81380e658a17',
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View style={{position: 'absolute', marginLeft: moderateScale(20)}}>
          <Icon name={iconChoose(item.type)} color={'white'} />
        </View>
      </TouchableOpacity>
    );
  };
  console.log(data);
  if (!data) {
    console.log(data);
    return <ActivityIndicator animating={true} />;
  } else {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.profileContainer}>
          <View style={styles.profile}>
            <Image source={{uri:profile_uri}} style={styles.image} />
          </View>
          <View>
            <Text style={styles.name}>{data?data.name:null}</Text>
          </View>
          <View>
    <Text style={styles.bio}>{data?data.Bio:null}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          {follows.map(item => follow(item))}
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {contents.map(type => body(type))}
          <TouchableOpacity
            style={styles.bodyCard}
            onPress={() =>
              Auth.signOut()
                .then(data => {
                  console.log(data);
                  Logout();
                  navigation.navigate('Signin');
                })
                .catch(err => console.log(err))
            }>
            <View style={styles.icon}>
              <Icon name={'sign-out-alt'} color={'white'} size={18} />
            </View>
            <View>
              <Text style={styles.object}>{'Logout'}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <FlatList
          data={posts}
          renderItem={({item}) => renderImage(item)}
          numColumns={3}
          //onEndReached={() => loadMore()}
          maxToRenderPerBatch={18}
          updateCellsBatchingPeriod={100}
          refreshing={true}
        />
      </ScrollView>
    );
  }
};

const mapStateToProps = state => {
  return {
    isLogedin: state.auth.isLogedin,
    isUserFirstTime: state.auth.isUserFirstTime,
    uid: state.auth.uid,
    token: state.auth.token,
    name: state.auth.name,
    follower: state.auth.follower,
    following: state.auth.following,
    post: state.auth.post,
    profile_uri: state.auth.profile_uri,
    username: state.auth.username,
  };
};
const mapDispatchToProp = dispatch => ({
  setUserLoginData: userData => {
    dispatch(userAuthActions.setUserLoginData(userData));
  },
  Logout: () => {
    dispatch(userAuthActions.Logout());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProp,
)(Profile);
