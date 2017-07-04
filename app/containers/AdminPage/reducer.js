import { fromJS } from 'immutable';

import {
  USER_LOGIN_FAILED,
  USER_LOGOUT,
} from 'containers/LoginPage/constants';
import { CHAGE_PASSWORD_FAILED } from 'containers/SettingsPage/constants';
import {
  TOGGLE_DRAWER,
  STORE_USER,
  AUTHENTIFICATION_FAILED,
} from './constants';
// The initial state of the App
const initialState = fromJS({
  user: { email: null, username: null, id: null, roles: [] },
  isAuth: false, // eslint-disable-line no-unneeded-ternary
  drawerState: false,
  activeUrl: '/',
  error: null,
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
    case STORE_USER:
      return state
        .set('user', action.user)
        .set('isAuth', true);
    case AUTHENTIFICATION_FAILED:
      return state
        .set('isAuth', false);
    case TOGGLE_DRAWER:
      return state
        .set('drawerState', action.state);
    case CHAGE_PASSWORD_FAILED:
      return state
        .set('error', action.error);
    default:
      return state;
  }
}

export default adminReducer;
