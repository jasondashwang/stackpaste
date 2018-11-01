import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import AppContainer from './components/App/AppContainer';

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={AppContainer} />
        <Route exact path="/:short" component={AppContainer} />
        <Route exact path="/:short/:version" component={AppContainer} />
      </Switch>
    </Router>
  );
}

export default Routes;
