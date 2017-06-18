import { fromJS } from 'immutable';

import { USER_STORE } from 'containers/LoginContainer/constants';

// The initial state of the App
const initialState = fromJS({
  user: null,
});

function global(state = initialState, action) {
  switch (action.type) {
    case USER_STORE:
      return state
        .set('user', action.user);
    default:
      return state;
  }
}

export default global;
