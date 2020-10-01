import axios from 'axios';
import Config from '@Config/default';
const {key, BASE_PATH} = Config;
import {Auth, API, Hub, Storage} from 'aws-amplify';
import store from '../redux/Store/index';
let token = store.getState().auth.token;
Auth.currentAuthenticatedUser().then(
  data => (token = data.signInUserSession.accessToken.jwtToken),
);

export const getUserList = body => {
  Auth.currentAuthenticatedUser().then(
    data => (token = data.signInUserSession.accessToken.jwtToken),
  );
  return API.get('api6ebbf326', '/v1/profile/userList/', {
    headers: {token: token},
    queryStringParameters: {username: body.name},
  });
};


export const getChatList = () => {
  Auth.currentAuthenticatedUser().then(
    data => (token = data.signInUserSession.accessToken.jwtToken),
  );
  return API.get('api6ebbf326', '/v1/chat/chatList/', {
    headers: {token: token},
  });
}