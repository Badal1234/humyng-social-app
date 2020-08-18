import {
  POST_ERROR,
  POST_LOADING,
  POST_LOADED,
  POST_UPLOADING,
  POST_CANCELLED,
  POST_UPLOADED,
  POST_LIKE_FAIL,
  POST_LIKE_PROGRESS,
  POST_LIKE_SUCCESS,
} from '../Constants/post.constant';
const initialState = {
  isLoading: true,
  post_data: ['ll'],
  error: null,
  isError: false,
  isUploading: false,
  isCancelled: false,
  isUploaded: false,
  isLiked: false,
  isLikeProgress: false,
};

const postReducer = (state = initialState, action) => {
  const {type, userData, error, post_data} = action;
  console.log(userData);
  switch (type) {
    case POST_LOADING:
      return {...state, isLoading: true};
    case POST_LOADED:
      if (userData.LastKeyValue) {
        return {
          ...state,
          isLoading: false,
          post_data: [...post_data, ...userData],
          LastKeyValue: userData.LastKeyValue,
        };
      } else {
        return {
          ...state,
          isLoading: false,
          post_data: [...userData],
          LastKeyValue: userData.LastKeyValue,
        };
      }
    case POST_ERROR:
      return {...state, isLoading: false, error: error, isError: true};
    case POST_UPLOADING:
      return {...state, isUploading: true};
    case POST_CANCELLED:
      return {...state, isCancelled: true};
    case POST_UPLOADED:
      return {...state, isUploaded: true};
    case POST_LIKE_FAIL:
      return {...state, isLiked: false};
    case POST_LIKE_PROGRESS:
      return {...state, isLikeProgress: true};
    case POST_LIKE_SUCCESS:
      return {...state, isLiked: true};
    default:
      return state;
  }
};

export default postReducer;
