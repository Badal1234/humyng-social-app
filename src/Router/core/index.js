import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {moderateScale} from 'react-native-size-matters';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Config from '@Config/default';
import TabImages from '../../@Component/TabImages';
import React from 'react';
import ProfilePage from '../../screen/Core/Common/profilePage';
import EditProfile from '../../screen/Core/EditProfile';
import Competition from '../../screen/Core/competition/welcomePage';
import RegistartionScreen from '../../screen/Core/competition/Registration';
import AddName from '../../screen/Core/competition/addName';
import CompetitionPage from '../../screen/Core/competition/';
import ChatRoom from '../../screen/Core/Chat/chatroomScreen/index';
import EntryScene from '../../screen/Core/Chat/EntryScene/index';
import NewChat from '../../screen/Core/Chat/chatroomScreen/newChat/index';
import WalletScreen from '../../screen/Core/wallet/index';
import AddMoney from '../../screen/Core/wallet/addMoney';
import Complain from '../../screen/Core/mislenious/complaint';
const TABS = {
  Notification: createStackNavigator(
    {
      Competition: {screen: CompetitionPage},
      Participant: {screen: Competition},
      Registration: {screen: RegistartionScreen},
      AddName: {screen: AddName},
    },
    {
      defaultNavigationOptions: {headerShown: false},
    },
  ),
  Search: createStackNavigator(
    {
      EntryScene: {screen: EntryScene},
      NewChat: {screen: NewChat},
    },
    {
      defaultNavigationOptions: {
        headerShown: false,
      },
      initialRouteName: 'EntryScene',
    },
  ),
  Bookmark: createStackNavigator(
    {
      ProfilePage: {screen: ProfilePage},
      EditProfile: {screen: EditProfile},
      WalletScreen: {screen: WalletScreen},
      AddMoney: {screen: AddMoney},
    },
    {
      defaultNavigationOptions: {headerShown: false},
    },
  ),
};

const getTabBarIcon = (navigation, focused) => {
  const {routeName} = navigation.state;
  let tabOption = '';
  if (routeName === 'Notification') {
    tabOption = 1;
  } else if (routeName === 'Search') {
    tabOption = 2;
  } else if (routeName === 'Bookmark') {
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
        backgroundColor: '#171817',
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

export const chatStack = createStackNavigator(
  {
    EntryScene: {screen: EntryScene},
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
    initialRouteName: 'EntryScene',
  },
);

export const _tabNavigator = () => {
  const BottomTab = createBottomTabNavigator(TABS, checkNavConfig());
  return createStackNavigator(
    {
      Bottom: {screen: BottomTab},
      chatRoom: {screen: ChatRoom},
      complain: {screen: Complain},
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
