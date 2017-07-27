import { fromJS } from 'immutable';
import { USER_LOGIN_FAILED, RESET_FIELDS } from './constants';

const initialState = fromJS({
  error: null,
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN_FAILED:
      return state
        .set('error', 'Wrong username or password');
    case '@@redux-form/CHANGE':
      return state
      .set('error', initialState.get('error'));
    case RESET_FIELDS:
      return state
        .set('error', fromJS(action.payload));
    default:
      return state;
  }
}

export default loginReducer;
