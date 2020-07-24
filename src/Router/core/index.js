import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../../screen/Core/Home';
import {moderateScale} from 'react-native-size-matters';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Config from '@Config/default';
import TabImages from '../../@Component/TabImages';
import Camera from '../../screen/Core/Camera';
import Notification from '../../screen/Core/Notification';
import Search from '../../screen/Core/Search';
import Bookmark from '../../screen/Core/Bookmark';
import ScreenView from '../../screen/Core/ScreenView';
import React from 'react';
import TabBar from '@Component/TabBar';
import Podcast from '../../screen/Core/PodCast';
import EnterScreen from '../../screen/Core/enterScreen';
import ProfilePage from '../../screen/Core/Common/profilePage';
import Story from '../../screen/Core/story';
import Blank from '../../screen/Core/blank';
import AddPost from '../../screen/Core/AddPost';
import ImageEditor from '../../screen/Core/ImageEditor';
import ImageList from '../../screen/Core/ImageList';
import MediaInfo from '../../screen/Core/MediaInfo';
import VideoEditing from '../../screen/Core/VideoEditing';
import ImagePoster from '../../screen/Core/ImagePoster';
import RecordAudio from '../../screen/Core/RecordAudio';
import RenderScreen from '../../screen/Core/renderScreen';
import EditProfile from '../../screen/Core/EditProfile';
import Localnotify from '../../screen/Core/localnotify';
import Competition from '../../screen/Core/competition/welcomePage'
const TABS = {
  Home: createStackNavigator(
    {
      EnterScreen: {screen: EnterScreen},
    },
    {
      defaultNavigationOptions: {headerShown: false},
    },
  ),
  AddPost: AddPost,
  Notification: Competition,
  Search: Notification,
  Bookmark: createStackNavigator(
    {
      ProfilePage: {screen: ProfilePage},
      EditProfile: {screen: EditProfile},
    },
    {
      defaultNavigationOptions: {headerShown: false},
    },
  ),
};

const getTabBarIcon = (navigation, focused) => {
  const {routeName} = navigation.state;
  let tabOption = '';
  if (routeName === 'Home') {
    tabOption = 1;
  } else if (routeName === 'Camera') {
    tabOption = 2;
  } else if (routeName === 'Notification') {
    tabOption = 3;
  }
  return <TabImages focused={focused} tabOption={tabOption} />;
};

export const checkNavConfig = () => {
  const {
    Colors: {LightGrey, LightWhite},
  } = Config;

  let navConfigs = {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused}) => getTabBarIcon(navigation, focused),
    }),
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
      },
    }),
    tabBarOptions: {
      labelStyle: {
        fontSize: moderateScale(10),
        // fontFamily: regular,
      },
      style: {
        backgroundColor: LightWhite,
        paddingTop: moderateScale(4),
        borderTopColor: 'transparent',
      },
      renderIndicator: () => null,
      showIcon: true,
      activeTintColor: '#FFB400',
      inactiveTintColor: LightGrey,
      showLabel: false,
    },
    tabBarPosition: 'bottom',
    shifting: true,
    swipeEnabled: true,
    animationEnabled: false,
    lazy: true,
  };

  return navConfigs;
};

export const _tabNavigator = () => {
  const BottomTab = createBottomTabNavigator(TABS, {
    tabBarComponent: TabBar,
    backBehavior: 'history',
  });
  return createStackNavigator(
    {
      Bottom: {screen: BottomTab},
      RenderScreen: {screen: RenderScreen},
      Camera: {screen: Camera},
      Podcast: {screen: Podcast},
      Story: {screen: Story},
      Notification: {screen: Notification},
      ImageEditor: {screen: ImageEditor},
      ImageList: {screen: ImageList},
      MediaInfo: {screen: MediaInfo},
      VideoEditing: {screen: VideoEditing},
      ImagePoster: {screen: ImagePoster},
      RecordAudio: {screen: RecordAudio},
    },

    {
      defaultNavigationOptions: {
        headerShown: false,
      },
    },
  );
};

const MainTabs = createAppContainer(_tabNavigator());

export default MainTabs;
