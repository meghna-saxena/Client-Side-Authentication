import axios from 'axios';
import { browserHistory } from 'react-router';
import {
     AUTH_USER,
     UNAUTH_USER,
     AUTH_ERROR
 } from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
    return function(dispatch) {
        //Submit email/password to server
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then(response => {
        //If request is good:
        //- update state to indicate user is auth'd
                dispatch({type: AUTH_USER});
        //- save jwt token for user to make auth'd requests in future
                localStorage.setItem('token', response.data.token);
        //- redirect to route '/feature'
                browserHistory.push('/feature');
            })

            .catch(() => {
         //If request is bad:
        //Show an error msg to user
                dispatch(authError('Bad Login Information'));
        });
    }
}

export function signupUser({ email, password }) {
    return function(dispatch) {
      axios.post(`${ROOT_URL}/signup`, { email, password })
        .then(response => {
          dispatch({ type: AUTH_USER });
          localStorage.setItem('token', response.data.token);
          browserHistory.push('/feature');
        })
        .catch(response => dispatch(authError(response.data.error)));
    }
}

export function authError(error) {
    return {
      type: AUTH_ERROR,
      payload: error
    };
}

export function signoutUser() {
    //removes jwt upon authorization: false
    localStorage.removeItem('token');

    return {type: UNAUTH_USER};
}

export function fetchMessage() {
    return function(dispatch) {
      axios.get(ROOT_URL, {
        headers: { authorization: localStorage.getItem('token') }
      })
        .then(response => {
          console.log(response);
        });
    }
}