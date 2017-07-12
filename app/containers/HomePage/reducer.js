import { fromJS } from 'immutable';
import { ADD_POSTS, ADD_CATEGORIES, TAB_CLICKED } from './constants';


// The initial state of the App
const initialState = fromJS({
  categories: [],
  posts: [],
  activeTab: { id: -1, label: 'Home', url: '/' },
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case TAB_CLICKED:
      return state
        .set('activeTab', action.id);
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
