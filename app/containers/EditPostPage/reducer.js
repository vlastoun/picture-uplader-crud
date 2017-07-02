import { fromJS, List } from 'immutable';
import { EditorState } from 'draft-js'; //eslint-disable-line
import {
  FETCH_POST_REQUESTED,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILED,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILED,
  FETCH_IMAGES_FAILED,
  FETCH_IMAGES_SUCCESS,
} from './constants';

const initialState = fromJS({
  loading: { categories: true, images: true, post: true },
  error: { categories: null, images: null, post: null },
  postId: null,
  postData: null,
  textEditorState: null,
  categories: [],
  oldImages: List([]),
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return state.set('categories', action.data).set('error', null).setIn(['loading', 'categories'], false);
    case FETCH_CATEGORIES_FAILED:
      return state.set('error', action.data).setIn(['error', 'categories'], action.message).setIn(['loading', 'categories'], false);
    case FETCH_POST_REQUESTED:
      return state.set('postId', action.postId).setIn(['loading', 'post'], true);
    case FETCH_POST_SUCCESS:
      return state.set('postData', action.data).setIn(['loading', 'post'], false);
    case FETCH_POST_FAILED:
      return state.set('postData', action.data).setIn(['loading', 'post'], false).setIn(['error', 'post'], action.message);
    case FETCH_IMAGES_SUCCESS:
      return state.set('oldImages', List(action.data)).set('error', action.message).setIn(['loading', 'images'], false);
    case FETCH_IMAGES_FAILED:
      return state.setIn(['error', 'images'], action.message).setIn(['loading', 'images'], false);
    default:
      return state;
  }
}

export default loginReducer;
