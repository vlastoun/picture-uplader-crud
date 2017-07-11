import { fromJS } from 'immutable';
import { STORE_POST, STORE_PICTURES } from './constants';
const initialState = fromJS({
  post: {},
  pictures: [],
});

function postReducer(state = initialState, action) {
  switch (action.type) {
    case STORE_POST:
      return state
        .set('post', action.data);
    case STORE_PICTURES:
      return state
        .set('pictures', action.data);
    default:
      return state;
  }
}

export default postReducer;
