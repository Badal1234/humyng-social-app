import {USER_LOGOUT} from '../Constants';
import AsyncStorage from '@react-native-community/async-storage';
import Config from '@Config/default';

import {persistCombineReducers} from 'redux-persist';

import authReducer from './auth.reducer';
import fileReducer from './file.reducer';

const {UCCaccheKeyStore} = Config;

const config = {
  key: UCCaccheKeyStore,
  storage: AsyncStorage,
  // blacklist: [
  //     'netInfo',
  // ],
};

const appReducer = persistCombineReducers(config, {
  auth: authReducer,
  file: fileReducer,
});

const rootReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
