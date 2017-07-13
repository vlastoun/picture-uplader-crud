import { fromJS, List } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
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
  EDITOR_CHANGED,
  ADD_IMAGE_TO_STASH,
  POST_EDIT_SUCCESS,
  OLD_IMAGE_DELETE,
} from './constants';
const initialState = fromJS({
  loading: { categories: true, images: true, post: true },
  error: { categories: null, images: null, post: null },
  postId: null,
  postData: null,
  textEditorState: '',
  categories: [],
  images: List([]),
  oldImages: List([]),
  imagesToDelete: List([]),
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case EDITOR_CHANGED:
      return state
        .set('textEditorState', action.content);
    case FETCH_CATEGORIES_SUCCESS:
      return state
        .set('categories', action.data)
        .set('error', null)
        .setIn(['loading', 'categories'], false);
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
      return state.set('oldImages', fromJS(action.data)).set('error', action.message).setIn(['loading', 'images'], false);
    case FETCH_IMAGES_FAILED:
      return state.setIn(['error', 'images'], action.message).setIn(['loading', 'images'], false);
    case IMAGE_UPLOAD_FINISHED:
      return state.set('images', state.get('images').concat(fromJS(action.images)));
    case IMAGE_DELETE:
      return state.set('images', state.get('images').filter((item) => item.get('public_id') !== action.id));
    case ADD_IMAGE_TO_STASH:
      return state
        .set('imagesToDelete', state.get('imagesToDelete').push(fromJS(action.id)));
    case OLD_IMAGE_DELETE:
      return state
        .set('oldImages', state.get('oldImages').filter((item) => item.get('public_id') !== action.id));
    case POST_EDIT_SUCCESS:
      return state
        .set('postData', action.data)
        .set('images', fromJS([]))
        .set('imagesToDelete', fromJS([]));
    case LOCATION_CHANGE:
      return initialState;
    default:
      return state;
  }
}

export default loginReducer;
