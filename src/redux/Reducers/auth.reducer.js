/* eslint-disable no-unused-vars */
import {
  SET_USER_LOGIN_DATA,
  SET_INTRO_SCREEN,
  LOG_OUT,
} from '../Constants/auth.constant';

const initialState = {
  isLogedIn: false,
  userData: {},
  uid: '',
  introScreen: false,
  isUserFirstTime: true,
  isInfo: false,
};

const authReducer = (state = initialState, action) => {
  const {type, userData = {}, value} = action;

  switch (type) {
    case SET_USER_LOGIN_DATA: {
      return {...state, introScreen: false, ...userData, isLogedIn: true};
    }

    case SET_INTRO_SCREEN: {
      return {...state, introScreen: value};
    }

    case LOG_OUT: {
      return (state = initialState);
    }

    default:
      return state;
  }
};

export default authReducer;
