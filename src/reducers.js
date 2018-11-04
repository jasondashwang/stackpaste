import { combineReducers } from 'redux';

import app from './components/App/ducks/reducer';
import files from './components/Files/ducks/reducer';

export default combineReducers({
  app,
  files,
});
