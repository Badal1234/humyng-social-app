import {API} from 'aws-amplify';
import {
  POST_LOADING,
  POST_LOADED,
  POST_ERROR,
  POST_UPLOADING,
  POST_CANCELLED,
  POST_UPLOADED,
  POST_LIKE_PROGRESS,
  POST_LIKE_SUCCESS,
  POST_LIKE_FAIL,
} from '../Constants/post.constant';

import store from '../Store/index';

let header;
let info;
store.subscribe(() => {
  header = {
    username: store.getState().auth.username,
    userPoolId: store.getState().auth.userPoolId,
  };
  info = {
    post_data: store.getState().post.post_data,
    LastKeyValue: store.getState().post.LastKeyValue,
  };
});
export const Loading = () => {
  return {
    type: POST_LOADING,
  };
};

export const setLoadData = userData => {
  console.log(userData)
  return {
    type: POST_LOADED,
    userData,
    post_data: info.post_data,
  };
};
export const cancellLoad = error => {
  return {
    type: POST_ERROR,
    error,
  };
};

export const Uploading = () => {
  return {
    type: POST_UPLOADING,
  };
};
export const UploadCancell = () => {
  return {
    type: POST_CANCELLED,
  };
};

export const UploadSuccess = () => {
  return {
    type: POST_UPLOADED,
  };
};

export const LikeProgress = () => {
  return {
    type: POST_LIKE_PROGRESS,
  };
};

export const LikeSuccess = () => {
  return {
    type: POST_LIKE_SUCCESS,
  };
};
export const LikeFail = () => {
  return {
    type: POST_LIKE_FAIL,
  };
};
export const LoadPost = body => {
  return dispatch => {
    console.log(header);
    dispatch(Loading());
    API.get('api6ebbf326', '/v1/post/get_item/', {
      headers: header,
    })
      .then(data => dispatch(setLoadData(data)))
      .catch(err => dispatch(cancellLoad(err)));

    return dispatch({
      type: POST_LOADING,
    });
  };
};

export const UploadPost = body => {
  console.log(header);
  return dispatch => {
    dispatch(Uploading());
    API.post('api6ebbf326', '/v1/post/create', {
      body: body,
      headers: header,
    })
      .then(data => dispatch(UploadSuccess()))
      .catch(err => console.log(err));
  };
};

export const makeLike = body => {
  return dispatch => {
    dispatch(LikeProgress());
    API.post('api6ebbf326', `/v1/post/action/like/${body.id}`, {
      headers: header,
    })
      .then(response => {
        dispatch(LikeSuccess());
      })
      .catch(error => {
        dispatch(LikeFail());
        console.log(error.response);
      });
  };
};
