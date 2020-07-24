import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SigninScreen from '../../screen/Auth/signin';
import SignupScreen from '../../screen/Auth/signup';
import Otp from '../../screen/Auth/otp';
import Intro from '../../screen/Auth/intro';
import Verify from '../../screen/Auth/verify';
import Info from '../../screen/Auth/InfoProvider';
const Auth = createStackNavigator(
  {
    Signin: {
      screen: SigninScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Signup: {
      screen: SignupScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Otp: {
      screen: Otp,
      navigationOptions: {
        headerShown: false,
      },
    },
    Intro: {
      screen: Intro,
      navigationOptions: {
        headerShown: false,
      },
    },
    Verify: {
      screen: Verify,

      navigationOptions: {
        headerShown: false,
      },
    },
    Info: {
      screen: Info,
      navigationOptions: {
        headerShown: false,
      },
    },
  },

  {
    initialRouteName: 'Intro',
  },
);

export default createAppContainer(Auth);
