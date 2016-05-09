import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import reduxThunk from 'redux-thunk';

import App from './components/App/App';
import Signin from './components/Auth/Signin';
import Signout from './components/auth/Signout';
import RequireAuth from './components/RequireAuthentication';
import reducers from './reducers';
import { AUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers)

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
      </Route>
    </Router>
  </Provider>
, document.querySelector('.container'));
