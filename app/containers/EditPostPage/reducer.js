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
  IMAGE_UPLOAD_FINISHED,
  IMAGE_DELETE,
  OLD_IMAGE_DELETE,
  EDITOR_CHANGED,
  ADD_IMAGE_TO_STASH,
  POST_EDIT_SUCCESS,
} from './constants';

const initialState = fromJS({
  loading: { categories: true, images: true, post: true },
  error: { categories: null, images: null, post: null },
  postId: null,
  postData: null,
  textEditorState: null,
  categories: [],
  images: List([]),
  oldImages: List([]),
  imagesToDelete: List([]),
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
      return state.set('categories', action.data).set('error', null).setIn(['loading', 'categories'], false);
    case FETCH_CATEGORIES_FAILED:
      return state.set('error', action.data).setIn(['error', 'categories'], action.message).setIn(['loading', 'categories'], false);
    case FETCH_POST_REQUESTED:
      return state
      .set('postId', action.postId)
      .set('imagesToDelete', List([]))
      .setIn(['loading', 'categories'], true)
      .setIn(['loading', 'images'], true)
      .setIn(['loading', 'post'], true);
    case FETCH_POST_SUCCESS:
      return state.set('postData', action.data).setIn(['loading', 'post'], false);
    case FETCH_POST_FAILED:
      return state.set('postData', action.data).setIn(['loading', 'post'], false).setIn(['error', 'post'], action.message);
    case FETCH_IMAGES_SUCCESS:
      return state.set('oldImages', List(action.data)).set('error', action.message).setIn(['loading', 'images'], false);
    case FETCH_IMAGES_FAILED:
      return state.setIn(['error', 'images'], action.message).setIn(['loading', 'images'], false);
    case IMAGE_UPLOAD_FINISHED:
      list = List(action.images);
      oldList = List(state.get('images'));
      result = List(oldList.concat(list));
      return state.set('images', result);
    case IMAGE_DELETE:
      index = state.get('images').findIndex((item) => item.public_id === action.id);
      oldList = List(state.get('images'));
      list = List(oldList.splice(index, 1));
      return state.set('images', list);
    case ADD_IMAGE_TO_STASH:
      oldList = List(state.get('imagesToDelete'));
      result = oldList.push(action.id);
      return state
        .set('imagesToDelete', result);
    case OLD_IMAGE_DELETE:
      index = state.get('oldImages').findIndex((item) => item.public_id === action.id);
      oldList = List(state.get('oldImages'));
      list = List(oldList.splice(index, 1));
      return state.set('oldImages', list);
    case POST_EDIT_SUCCESS:
      return state.set('postData', action.data);
    default:
      return state;
  }
}

export default loginReducer;
