import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Routes from './Routes';
import configureStore from './store';


const wrapper = document.getElementById('app');
ReactDOM.render(
  <Provider store={configureStore()}>
    <Routes />
  </Provider>, wrapper,
);

module.hot.accept();
