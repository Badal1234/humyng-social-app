const postLoad = store => next => action => {
  if (action.type == 'POST_SUCCESS') {
    console.log('yes');
  } else {
    console.log('no');
  }
};

export default postLoad;
