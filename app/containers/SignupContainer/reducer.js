import { fromJS } from 'immutable';

import {
  STORE_USER,
  CREATE_USER_FAILED,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  error: { username: null, email: null, password: null },
});

function signupReducer(state = initialState, action) {
  switch (action.type) {
    case STORE_USER:
      return state
        .set('user', action.user);
    case CREATE_USER_FAILED:
      return state
        .set('error', action.message);
    case '@@redux-form/CHANGE':
      return state
      .set('error', initialState.get('error'));
    default:
      return state;
  }
}

export default signupReducer;
