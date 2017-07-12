import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import { STORE_POST, STORE_PICTURES, HIDE_MODAL, SHOW_PICTURE } from './constants';
const initialState = fromJS({
  post: {},
  pictures: [],
  modalState: false,
  modalURL: '',
});

function postReducer(state = initialState, action) {
  switch (action.type) {
    case HIDE_MODAL:
      return state
        .set('modalState', false)
        .set('modalURL', '');
    case SHOW_PICTURE:
      return state
        .set('modalState', true)
        .set('modalURL', action.url);
    case STORE_POST:
      return state
        .set('post', fromJS(action.data));
    case STORE_PICTURES:
      return state
        .set('pictures', fromJS(action.data));
    case LOCATION_CHANGE:
      return initialState;
    default:
      return state;
  }
}

export default postReducer;
