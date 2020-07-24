import axios from 'axios';
import Config from '@Config/default';
const {key, BASE_PATH} = Config;
import {Auth, API, Hub, Storage} from 'aws-amplify';
import store from '../redux/Store/index';

let header;
store.subscribe(() => {
  header = {
    Username: store.getState().auth.username,
    userPoolId: store.getState().auth.userPoolId,
  };
});
export const UserSetup = async body => {
  console.log(header);
  return API.post('api6ebbf326', '/v1/user/addDetails/', {
    body: body,
    headers: header,
  })
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
};

export const UserDetails = async body => {
  console.log(body);
  const uri = `${BASE_PATH}/profile/info/${body.uid}/${body.token}`;
  console.log(uri);
  return axios
    .get(uri)
    .then(res => res.data)
    .catch(err => err);
};

export const UserUpdate = body => {
  return API.post('api6ebbf326', '/v1/profile/update', {
    body: body,
    headers: header,
  })
    .then(res => res.data)
    .catch(err => err);
};
