import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App/App';
import Signin from './components/Auth/Signin';
import Signout from './components/Auth/Signout';
import ProjectListContainer from './components/ProjectListContainer/ProjectListContainer';
import RequireAuth from './components/RequireAuthentication';

export default (
  <Router history={browserHistory}>
    <Route path="/signin" component={Signin}></Route>
    <Route path="/" component={RequireAuth(App)}>
      <Route path="signout" component={Signout}></Route>
      <Route path="projects" component={ProjectListContainer}></Route>
    </Route>
  </Router>
);
