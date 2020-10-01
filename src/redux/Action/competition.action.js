import {
  TOURNAMENT_LOAD_LOADING,
  TOURNAMENT_LOAD_SUCCESS,
  TOURNAMENT_LOAD_FAIL,
  TOURNAMENT_REGISTER_FAIL,
  TOURNAMENT_REGISTER_SUCCESS,
  TOURNAMENT_REGISTER_LOADING,
} from '../Constants/competition.constant';
import {API, Auth} from 'aws-amplify';
let header;
let info;
import store from '../Store/index';
let token = store.getState().auth.token;
store.subscribe(() => {
  header = {
    token: store.getState().auth.token,
  };
  info = {
    // tournamentList: store.getState().tournament.tournamentList,
    LastKeyValue: store.getState().tournament.LastKeyValue,
  };
});
export const Loading = () => {
  return {
    type: TOURNAMENT_LOAD_LOADING,
  };
};

export const setLoadData = userData => {
  return {
    type: TOURNAMENT_LOAD_SUCCESS,
    userData,
  };
};

export const cancellLoad = error => {
  return {
    type: TOURNAMENT_LOAD_FAIL,
    error,
  };
};

export const registerSuccess = () => {
  return {
    type: TOURNAMENT_LOAD_SUCCESS,
  };
};
export const register = body => {
  return {
    type: TOURNAMENT_REGISTER_SUCCESS,
  };
};

export const registerLoad = () => {
  return {
    type: TOURNAMENT_REGISTER_LOADING,
  };
};

export const registerCANCELL = err => {
  return {
    type: TOURNAMENT_REGISTER_FAIL,
    error: err,
  };
};
export const getTournamentList = userData => {
  Auth.currentAuthenticatedUser().then(
    data => (token = data.signInUserSession.accessToken.jwtToken),
  );
  return dispatch => {
    dispatch(Loading());
    API.get('api6ebbf326', '/v1/competition/getList', {
      headers: {token: token},
    })
      .then(data => dispatch(setLoadData(data.data)))
      .catch(err => dispatch(cancellLoad(err)));
  };
};

export const RegisterTournament = body => {
  Auth.currentAuthenticatedUser().then(
    data => (token = data.signInUserSession.accessToken.jwtToken),
  );
  return dispatch => {
    dispatch(registerLoad());
    console.log(header)
    console.log(body)
    API.post('api6ebbf326', '/v1/competition/register/', {
      headers: {token: token},
      body: body,
    })
      .then(() => register())
      .catch(err => console.log('kkk', err));
  };
};
