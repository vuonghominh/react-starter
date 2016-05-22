import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './configureStore';
import routes from './Routes';
import { AUTH_USER } from './actions/types';

const store = configureStore();

if (localStorage.getItem('token')) {
  store.dispatch({type: AUTH_USER});
}

render(
  <Provider store={store}>{routes}</Provider>
, document.querySelector('.container'));
