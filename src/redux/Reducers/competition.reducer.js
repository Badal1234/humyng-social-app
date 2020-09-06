import {
  TOURNAMENT_LOAD_FAIL,
  TOURNAMENT_LOAD_LOADING,
  TOURNAMENT_LOAD_SUCCESS,
  TOURNAMENT_REGISTER_FAIL,
  TOURNAMENT_REGISTER_LOADING,
  TOURNAMENT_REGISTER_SUCCESS,
} from '../Constants/competition.constant';

const initialState = {
  isLoading: true,
  isError: false,
  isLoaded: false,
  tournamentList: [],
  error: null,
  isSuccess: false,
};

const CompetitionReducer = (state = initialState, action) => {
  const {type, userData, error, tournamentList} = action;

  switch (type) {
    case TOURNAMENT_LOAD_FAIL:
      return {...state, isLoading: false, isError: true, error: error};
    case TOURNAMENT_LOAD_SUCCESS:
      if (userData.LastKeyValue) {
        return {
          ...state,
          isLoading: false,
          post_data: [...tournamentList, ...userData],
          LastKeyValue: userData.LastKeyValue,
        };
      } else {
        return {
          ...state,
          isLoading: false,
          tournamentList: [...userData],
          LastKeyValue: userData.LastKeyValue,
        };
      }
    case TOURNAMENT_LOAD_LOADING:
      return {...state, isLoading: false};
    case TOURNAMENT_REGISTER_FAIL:
      return {...state, isLoading: false, isError: false, error: error};
    case TOURNAMENT_REGISTER_LOADING:
      return {...state, isLoading: true};
    case TOURNAMENT_REGISTER_SUCCESS:
      return {...state, isLoading: false, isSuccess: true};
    default:
      return state;
  }
};

export default CompetitionReducer;
