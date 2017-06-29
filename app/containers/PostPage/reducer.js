import { fromJS } from 'immutable';
import { EDITOR_CHANGED, FETCH_CATEGORIES_SUCCESS } from './constants';

const initialState = fromJS({
  loading: false,
  textEditorState: {},
  categories: [],
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case EDITOR_CHANGED:
      return state
        .set('textEditorState', action.content);
    case FETCH_CATEGORIES_SUCCESS:
      return state
        .set('categories', action.data)
        .set('loading', false);
    default:
      return state;
  }
}

export default loginReducer;
