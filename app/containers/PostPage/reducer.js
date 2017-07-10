import { fromJS, List } from 'immutable';
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
  textEditorState: '',
  categories: [],
  images: List(),
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case EDITOR_CHANGED:
      return state.set('textEditorState', action.content);
    case FETCH_CATEGORIES_SUCCESS:
      return state.set('categories', action.data).set('loading', false);
    case IMAGE_DELETE:
      return state.set('images', state.get('images').filter((item) => item.get('public_id') !== action.id));
    case IMAGE_UPLOAD_FINISHED:
      return state.set('images', state.get('images').concat(fromJS(action.images)));
    case SEND_POST_REQUESTED:
      return state
        .set('loading', true)
        .set('error', null);
    case POST_CREATED:
      return state
        .set('loading', false)
        .set('error', null)
        .set('images', List([]))
        .set('textEditorState', '');
    default:
      return state;
  }
}

export default loginReducer;
