import { combineReducers } from 'redux';

import app from './components/App/ducks/reducer';
import files from './components/Files/ducks/reducer';
import terminal from './components/Terminal/ducks/reducer';

export default combineReducers({
  app,
  files,
  terminal,
});
