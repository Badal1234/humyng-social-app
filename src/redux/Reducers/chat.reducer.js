import {CHAT} from '../Constants/chat.constant';
const initialState = {
  messageList: {},
};

const chatReducer = (state = initialState, action) => {
  const {chatData, type, error, roomId, message} = action;
  console.log('sss');
  console.log(action);
  console.log(message);
  switch (type) {
    case 'CHAT_SUCCESS':
      return {
        ...state,
        messageList: {...state.messageList, [roomId]: chatData},
      };

    case 'CHAT_SAVE':
      return {
        ...state,
        messageList: {
          ...state.messageList,
          [roomId]: state.messageList[roomId]
            ? [message, ...state.messageList[roomId]]
            : [message],
        },
      };

    default:
      return state;
  }
};

export default chatReducer;
