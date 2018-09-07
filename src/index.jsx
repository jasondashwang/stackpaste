import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import configureStore from './store';


const wrapper = document.getElementById('app');
ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>, wrapper,
);
