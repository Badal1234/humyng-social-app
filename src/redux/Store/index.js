import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from '../Reducers';
import thunk from 'redux-thunk';
import promiseMiddleware from '../Middleware/Apicalls';
import postLoadMiddleware from '../Middleware/post';

let Middlewares = [thunk, promiseMiddleware];

const reduxStore = createStore(
  rootReducer,
  compose(applyMiddleware(...Middlewares)),
);
export default reduxStore;
