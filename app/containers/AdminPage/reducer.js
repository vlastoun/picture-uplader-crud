import { fromJS } from 'immutable';

import {
  USER_STORE,
  USER_LOGIN_FAILED,
  USER_LOGOUT,
} from 'containers/LoginContainer/constants';
import {
  TOGGLE_DRAWER,
} from './constants';
// The initial state of the App
const initialState = fromJS({
  user: null,
  isAuth: localStorage.getItem('token') ? true : false, // eslint-disable-line no-unneeded-ternary
  drawerState: false,
  activeUrl: '/',
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
    case TOGGLE_DRAWER:
      return state
        .set('drawerState', action.state);
    default:
      return state;
  }
}

export default adminReducer;
