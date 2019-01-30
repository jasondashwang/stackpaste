import { combineReducers } from 'redux';

import app from './components/App/ducks/reducer';
import files from './components/Files/ducks/reducer';
import notes from './components/Notes/ducks/reducer';

export default combineReducers({
  app,
  files,
  notes,
});
