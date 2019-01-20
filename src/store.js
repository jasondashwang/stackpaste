import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

import rootReducer from './reducers';

let middleware;
let composeEnhancer;
if (process.env.NODE_ENV === 'development') {
  middleware = [thunkMiddleware, loggerMiddleware];
  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
  middleware = [thunkMiddleware];
  composeEnhancer = compose;
}


export default function configureStore() {
  return createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(...middleware)),
  );
}
