import { fromJS, List } from 'immutable';
import {
  EDITOR_CHANGED,
  FETCH_CATEGORIES_SUCCESS,
  IMAGE_UPLOAD_FINISHED,
  IMAGE_DELETE,
} from './constants';

const initialState = fromJS({
  loading: false,
  textEditorState: {},
  categories: [],
  images: [],
});

function loginReducer(state = initialState, action) {
  let list;
  let oldList;
  let result;
  let index;
  switch (action.type) {
    case EDITOR_CHANGED:
      return state.set('textEditorState', action.content);
    case FETCH_CATEGORIES_SUCCESS:
      return state.set('categories', action.data).set('loading', false);
    case IMAGE_DELETE:
      index = state.get('images').findIndex((item) => item.public_id === action.id);
      oldList = List(state.get('images'));
      list = List(oldList.splice(index, 1));
      return state.set('images', list);
    case IMAGE_UPLOAD_FINISHED:
      list = List(action.images);
      oldList = List(state.get('images'));
      result = List(oldList.concat(list));
      return state.set('images', result);
    default:
      return state;
  }
}

export default loginReducer;
