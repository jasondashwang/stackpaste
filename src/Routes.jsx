import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import history from './history';

import AppContainer from './components/App/AppContainer';

class Routes extends React.Component {
  render () {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/:short" component={AppContainer} />
          <Route exact path="/" component={(props) => <AppContainer {...props} first={true} />} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
