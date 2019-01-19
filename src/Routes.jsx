import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';
import theme from './utils/darkTheme';
import history from './history';

import AppContainer from './components/App/AppContainer';
import NotFound from './components/NotFound/NotFoundComponent.jsx';

function Routes() {
  return (
    <MuiThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={AppContainer} />
            <Route exact path="/:short" component={AppContainer} />
            <Route exact path="/:short/:version" component={AppContainer} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </SnackbarProvider>
    </MuiThemeProvider>
  );
}

export default Routes;
