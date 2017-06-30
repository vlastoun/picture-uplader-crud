import { fromJS, List } from 'immutable';
import {
  FETCH_POSTS_REQUESTED,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILED,
  DELETE_REQIESTED,
  DELETE_DECLINED,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILED,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  error: null,
  loading: false,
  posts: [],
  eraseModal: false,
  postToDelete: null,
});

function PostsPageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_REQUESTED:
      return state.set('loading', true).set('error', null);
    case FETCH_POSTS_SUCCESS:
      return state
        .set('loading', false)
        .set('error', null)
        .set('posts', List(action.data));
    case FETCH_POSTS_FAILED:
      return state.set('loading', false).set('error', action.message);
    case DELETE_REQIESTED:
      return state.set('postToDelete', action.post).set('eraseModal', true);
    case DELETE_DECLINED:
      return state.set('postToDelete', null).set('eraseModal', false);
    case DELETE_POST_SUCCESS:
      return state.set('postToDelete', null).set('eraseModal', false);
    case DELETE_POST_FAILED:
      return state.set('postToDelete', null).set('eraseModal', false).set('error', action.message);
    default:
      return state;
  }
}

export default PostsPageReducer;
