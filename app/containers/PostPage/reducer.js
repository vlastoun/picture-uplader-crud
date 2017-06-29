import { fromJS } from 'immutable';
import {
  EDITOR_CHANGED,
  FETCH_CATEGORIES_SUCCESS,
  IMAGE_UPLOAD_FINISHED,
} from './constants';

const initialState = fromJS({
  loading: false,
  textEditorState: {},
  categories: [],
  images: [],
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case EDITOR_CHANGED:
      return state.set('textEditorState', action.content);
    case FETCH_CATEGORIES_SUCCESS:
      return state.set('categories', action.data).set('loading', false);
    case IMAGE_UPLOAD_FINISHED://eslint-disable-line
      const oldList = state.get('images');
      const newList = oldList.concat(action.images);
      return state.set('images', newList);
    default:
      return state;
  }
}

export default loginReducer;
