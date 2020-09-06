import axios from 'axios';
import Config from '@Config/default';
const {key, BASE_PATH} = Config;
import {Auth, API, Hub, Storage} from 'aws-amplify';
import store from '../redux/Store/index';
let token = store.getState().auth.token;
Auth.currentAuthenticatedUser().then(
  data => (token = data.signInUserSession.accessToken.jwtToken),
);
console.log(token)
let header;
export const UserSetup = async body => {
  console.log(header);
  return API.post('api6ebbf326', '/v1/user/addDetails/', {
    body: body,
    headers: {token:token},
  })
};

export const UserDetails = async body => {
  console.log(body);
  return API.get('api6ebbf326', `/v1/profile/details/${body.id}`, {
    headers: {token:token},
  })
};

export const UserUpdate = body => {
  return API.post('api6ebbf326', '/v1/profile/update', {
    body: body,
    headers: header,
  })
    .then(res => res.data)
    .catch(err => err);
};

export const checkusername = body => {
  Auth.currentAuthenticatedUser().then(
    data => (token = data.signInUserSession.accessToken.jwtToken),
  );
  return API.get('api6ebbf326', `/v1/profile/username/check/${body.username}`, {
    headers: {token: token},
  });
};
