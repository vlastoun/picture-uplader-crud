import { fromJS } from 'immutable';

import {
  CREATE_CATEGORY,
  CLOSE_CATEGORY,
  CREATE_CATEGORY_SUCCESSFUL,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_FAILED,
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_FAILED,
  FETCH_CATEGORIES_SUCCESS,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  error: { name: null, fetching: null },
  loading: false,
  fetchLoading: false,
  categories: [],
  categoryEdit: false,
  activeCategory: {},
});

function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_CATEGORY:
      return state
        .set('categoryEdit', true)
        .set('loading', false);
    case CLOSE_CATEGORY:
      return state
        .set('categoryEdit', false)
        .set('loading', false);
    case CREATE_CATEGORY_REQUEST:
      return state
        .set('loading', true)
        .set('error', initialState.get('error'));
    case CREATE_CATEGORY_SUCCESSFUL:
      return state
        .set('loading', false)
        .set('error', initialState.get('error'))
        .set('categoryEdit', false);
    case CREATE_CATEGORY_FAILED:
      return state
        .set('loading', false)
        .set('error', 'category was not created');
    case FETCH_CATEGORIES:
      return state
        .set('fetchLoading', true);
    case FETCH_CATEGORIES_SUCCESS:
      return state
        .set('categories', action.data);
    case FETCH_CATEGORIES_FAILED:
      return state
        .setIn(['error', 'fetching'], action.message);
    default:
      return state;
  }
}

export default categoryReducer;
