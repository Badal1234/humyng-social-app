import {
  TOURNAMENT_LOAD_LOADING,
  TOURNAMENT_LOAD_SUCCESS,
  TOURNAMENT_LOAD_FAIL,
  TOURNAMENT_REGISTER_FAIL,
  TOURNAMENT_REGISTER_SUCCESS,
  TOURNAMENT_REGISTER_LOADING
} from '../Constants/competition.constant';
import store from '../Store/index';
import {API} from 'aws-amplify';
let header;
let info;
store.subscribe(() => {
  header = {
    username: store.getState().auth.username,
    userPoolId: store.getState().auth.userPoolId,
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

export const registerCANCELL = () => {
  return {
    type: TOURNAMENT_REGISTER_FAIL,
  };
};
export const getTournamentList = userData => {
  return dispatch => {
    dispatch(Loading());
    API.get('api6ebbf326', '/v1/tournament/register/', {
      headers: header,
    })
      .then(data => dispatch(setLoadData(data)))
      .catch(err => dispatch(cancellLoad(err)));
  };
};

export const RegisterTournament = body => {
  return dispatch => {
    dispatch(registerLoad());
    API.post('api6ebbf326', 'v1/tournament/register/', {
      headers: header,
      body: body,
    })
      .then(() => register())
      .catch(() => registerCANCELL());
  };
};
