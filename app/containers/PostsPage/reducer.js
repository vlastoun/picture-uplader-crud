import { fromJS, List } from 'immutable';
import { FETCH_POSTS_REQUESTED, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILED } from './constants';

// The initial state of the App
const initialState = fromJS({
  error: null,
  loading: false,
  posts: [],
});

function PostsPageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_REQUESTED:
      return state
        .set('loading', true)
        .set('error', null);
    case FETCH_POSTS_SUCCESS:
      return state
        .set('loading', false)
        .set('error', null)
        .set('posts', List(action.data));
    case FETCH_POSTS_FAILED:
      return state
        .set('loading', false)
        .set('error', action.message);
    default:
      return state;
  }
}

export default PostsPageReducer;
