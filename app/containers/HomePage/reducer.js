import { fromJS } from 'immutable';
import { ADD_POSTS, ADD_CATEGORIES } from './constants';


// The initial state of the App
const initialState = fromJS({
  categories: [],
  posts: [],
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CATEGORIES:
      return state
        .set('categories', fromJS(action.categories));
    case ADD_POSTS:
      return state
        .set('posts', fromJS(action.categories));
    default:
      return state;
  }
}

export default homeReducer;
