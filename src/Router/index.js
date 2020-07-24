import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import Auth from './Auth/index';
import Core from './core/index';
export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: Auth,
      CoreStack: Core,
    },
    {
      initialRouteName: 'Auth',
    },
  ),
);
