import {API, Auth} from 'aws-amplify';
import store from '../Store/index';
import {CHAT} from '../Constants/chat.constant';
let token = store.getState().auth.token;

const setLoadData = body => {
  return {
    type: `${CHAT}_SUCCESS`,
    chatData: body.chatData,
    roomId: body.roomId,
  };
};

const cancellLoad = error => {
  return {
    type: `${CHAT}_FAIL`,
    error,
  };
};

export const getChat = body => {
  Auth.currentAuthenticatedUser().then(
    data => (token = data.signInUserSession.accessToken.jwtToken),
  );
  console.log(body)
  return dispatch =>
    API.get('api6ebbf326', `/v1/chat/chats/${body.room}`, {
      headers: {token: token},
    })
      .then(data =>
        dispatch(setLoadData({roomId: body.room, chatData: data.message})),
      )
      .catch(err => console.log(err));
};

export const saveChat = body => {
  return {
    type: 'CHAT_SAVE',
    message: body.message,
    roomId:body.roomId
  };
};
