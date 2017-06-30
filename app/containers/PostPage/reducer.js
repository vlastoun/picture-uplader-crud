import { fromJS, List } from 'immutable';
import { EditorState } from 'draft-js';
import {
  EDITOR_CHANGED,
  FETCH_CATEGORIES_SUCCESS,
  IMAGE_UPLOAD_FINISHED,
  IMAGE_DELETE,
  SEND_POST_REQUESTED,
  POST_CREATED,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: null,
  textEditorState: EditorState.createEmpty().getCurrentContent(),
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
    case SEND_POST_REQUESTED:
      return state
        .set('loading', true)
        .set('error', null);
    case POST_CREATED:
      return state
        .set('loading', false)
        .set('error', null)
        .set('textEditorState', {})
        .set('images', [])
        .set('textEditorState', EditorState.createEmpty().getCurrentContent());
    default:
      return state;
  }
}

export default loginReducer;
