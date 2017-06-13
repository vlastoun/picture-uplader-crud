import { fromJS } from 'immutable';

import {
  STORE_USER,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  user: null,
});

function signupReducer(state = initialState, action) {
  switch (action.type) {
    case STORE_USER:
      return state
        .set('user', action.user);
    default:
      return state;
  }
}

export default signupReducer;
