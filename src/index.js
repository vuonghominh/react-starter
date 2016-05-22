import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import configureStore from './store/configureStore';

import App from './components/App/App';
import Signin from './components/Auth/Signin';
import Signout from './components/Auth/Signout';
import ProjectListContainer from './components/ProjectListContainer/ProjectListContainer';
import RequireAuth from './components/RequireAuthentication';
import reducers from './reducers';
import { AUTH_USER } from './actions/types';

const store = configureStore();

const token = localStorage.getItem('token');

if (token) {
  store.dispatch({
    type: AUTH_USER,
  });
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/signin" component={Signin}></Route>
      <Route path="/" component={RequireAuth(App)}>
        <Route path="signout" component={Signout}></Route>
        <Route path="projects" component={ProjectListContainer}></Route>
      </Route>
    </Router>
  </Provider>
, document.querySelector('.container'));
