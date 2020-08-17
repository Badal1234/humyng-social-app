const promiseMiddleware = () => {
  return next => action => {
    const {promise, type, ...rest} = action;
    console.log(action);

    if (!promise) {
      console.log('aaa');
      return next(action);
    }

    const SUCCESS = type + '_SUCCESS';
    const REQUEST = type + '_LOADING';
    const FAILURE = type + '_FAIL';
    next({...rest, type: REQUEST});
    return (
      promise
        // .then(response => response.json())
        .then(response => {
          console.log('sndjcndjc')
          console.log(response);
          next({...rest, response: response, type: SUCCESS});
          return true;
        })
        .catch(error => {
          console.log(error);
          next({...rest, error, type: FAILURE});
          return false;
        })
    );
  };
};
export default promiseMiddleware;
