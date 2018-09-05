import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './store';

import App from '../components/App';

export default function Root () {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={App} />
        </div>
      </Router>
    </Provider>
  );
}
