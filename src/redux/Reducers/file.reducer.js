import {SET_CONTENT} from '../Constants/file.constant';
const initialState = {
  path: null,
  content: null,
  type: null,
  Items:null
};

const fileReducer = (state = initialState, action) => {
  const {type, userData} = action;
  switch (type) {
    case SET_CONTENT:
      return {...state, ...userData};
    default:
      return state;
  }
};

export default fileReducer;
