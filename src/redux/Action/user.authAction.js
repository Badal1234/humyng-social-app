import {SET_USER_LOGIN_DATA, LOG_OUT} from '../Constants/auth.constant';
import {SET_CONTENT} from '../Constants/file.constant';
export const setUserLoginData = userData => {
  return {
    type: SET_USER_LOGIN_DATA,
    userData,
  };
};

export const setContentData = userData => {
  return {
    type: SET_CONTENT,
    userData,
  };
};


export const Logout = userData => {
  return {
    type: LOG_OUT,
    userData,
  };
};
