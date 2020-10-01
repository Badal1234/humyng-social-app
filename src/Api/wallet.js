import {Auth, API, Hub, Storage} from 'aws-amplify';
import store from '../redux/Store/index';
let token = store.getState().auth.token;
Auth.currentAuthenticatedUser().then(
  data => (token = data.signInUserSession.accessToken.jwtToken),
);

export const addMoney = body => {
  const {amount, currency} = body;
  return API.get('api6ebbf326', '/v1/wallet/addMoney', {
    headers: {token: token},
    queryStringParameters: {amount: amount, currency: currency},
  });
};


export const paymentVerify = (body) => {
   
    return API.get('api6ebbf326', `/v1/wallet/addMoney/verify/`, {
        headers: {token: token},
        queryStringParameters: body,
      });


}

export const walletDetails = () => {   
  return API.get('api6ebbf326', '/v1/wallet/details', {
    headers: {token: token},
  });

}