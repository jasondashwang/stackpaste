import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

import rootReducer from './reducers';

const middleware = [thunkMiddleware, loggerMiddleware];

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(...middleware),
  );
}
