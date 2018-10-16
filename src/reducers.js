import { combineReducers } from 'redux';

import app from './components/App/ducks/reducer';
import nav from './components/Navbar/ducks/reducer';
import side from './components/Sidebar/ducks/reducer';

export default combineReducers({
  app,
  nav,
  side,
});
