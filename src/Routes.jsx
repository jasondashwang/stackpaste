import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppContainer from './components/App/AppContainer';

class Routes extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path="/" component={AppContainer} />
        </div>
      </Router>
    )
  }
};

export default Routes;
