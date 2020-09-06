import axios from 'axios';
import Config from '@Config/default';
const {key, BASE_PATH} = Config;
import {Auth, API, Hub, Storage} from 'aws-amplify';
import store from '../redux/Store/index';
let token = store.getState().auth.token;
Auth.currentAuthenticatedUser().then(
  data => (token = data.signInUserSession.accessToken.jwtToken),
);

export const getDetailsbyId = body => {
  console.log(body);
  console.log(token);
  return API.get('api6ebbf326', `/v1/competition/details/${body.id}`, {
    headers: {token: token},
  });
};

export const getPlayers = body => {
  console.log(body);
  console.log(token);
  return API.get('api6ebbf326', `/v1/competition/getList/player/${body.id}`, {
    headers: {token: token},
  });
};

export const makeParticipate = body => {
  return API.post('api6ebbf326', '/v1/competition/participate', {
    headers: {token: token},
    body: body,
  });
};

export const isParticpate = body => {
  return API.get(
    'api6ebbf326',
    `/v1/competition/isParticipate/${body.tournament_id}`,
    {
      headers: {token: token},
    },
  );
};

export const createPayment = body => {
  return API.get('api6ebbf326', `/v1/payment/create/${body.id}`, {
    headers: {token: token},
  });
};

export const paymentVerify = body => {
  Auth.currentAuthenticatedUser().then(
    data => (token = data.signInUserSession.accessToken.jwtToken),
  );
j  
  return API.post('api6ebbf326', '/v1/payment/verify', {
    headers: {token: token},
  });
};
