import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from './types';

const ROOT_URL = 'http://localhost:3000'

export function signinUser({ admin_number, password }) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/api/v1/auth/staff`, { admin_number, password })
    .then(response => {
      dispatch({ type: AUTH_USER });
      localStorage.setItem('token', response.data.api_token);
      browserHistory.push('/');
    })
    .catch(response => {
      dispatch(authError(response.data.message));
    });
  }
}

export function signoutUser() {
  localStorage.removeItem('token');
  browserHistory.push('/');

  return {
    type: UNAUTH_USER
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
