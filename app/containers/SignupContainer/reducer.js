import { fromJS } from 'immutable';

import {
  CREATE_USER_FAILED,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  error: { username: null, email: null, password: null },
});

function signupReducer(state = initialState, action) {
  switch (action.type) {
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
