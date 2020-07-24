import axios from 'axios';
import Config from '@Config/default';
import {Auth, API, Hub, Storage} from 'aws-amplify';
const {key, BASE_PATH} = Config;
import store from '../redux/Store/index';

let header;
store.subscribe(() => {
  header = {
    username: store.getState().auth.username,
    userPoolId: store.getState().auth.userPoolId,
  };
});

export const UploadPost = async body => {
  return API.post('api6ebbf326', '/v1/post/create', {
    body: body,
    headers: header,
  })
    .then(res => res.data)
    .catch(err => err);
};

export const UpdatePost = async (body, token) => {
  const uri = `${BASE_PATH}/post/update/${token}`;
  return axios
    .post(uri, body)
    .then(data => data.data)
    .catch(err => err);
};

export const getPosts = body => {
  return API.get('api6ebbf326', '/v1/post/get_item/posts/', {
    body: body,
    headers: header,
  })
    .then(res => res)
    .catch(err => err);
};

export const getAuthor = body =>{
  return API.get('api6ebbf326', `/v1/profile/details/${body.id}`, {
    headers: header,
  })
    .then(res => res)
    .catch(err => err)
}
