import { fromJS } from 'immutable';

import {
  CREATE_USER_SUCCESSFUL,
} from 'containers/SignupContainer/constants';

// The initial state of the App
const initialState = fromJS({
  user: null,
});

function global(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER_SUCCESSFUL:
      return state
        .set('user', action.data);
    default:
      return state;
  }
}

export default global;
