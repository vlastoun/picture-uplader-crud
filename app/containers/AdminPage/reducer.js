import { fromJS } from 'immutable';

import {
  USER_STORE,
  USER_LOGIN_FAILED,
  USER_LOGOUT,
} from 'containers/LoginContainer/constants';
// The initial state of the App
const initialState = fromJS({
  user: null,
  isAuth: localStorage.getItem('token') ? true : false, //eslint-disable-line no-unneeded-ternary
});

function adminReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGOUT:
      return state
        .set('isAuth', false)
        .set('user', null);
    case USER_LOGIN_FAILED:
      return state
        .set('isAuth', false);
    case USER_STORE:
      return state
        .set('user', action.user)
        .set('isAuth', true);
    default:
      return state;
  }
}

export default adminReducer;
