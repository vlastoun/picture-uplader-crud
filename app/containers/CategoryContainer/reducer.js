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
  SHOW_HIDE,
  REQUEST_DELETE,
  HIDE_MODAL,
  DELETE_CATEGORY_SUCCESS,
  EDIT_CATEGORY,
  HIDE_EDIT_MODAL,
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_FAILED,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  error: { name: null, fetching: null, edit: null },
  loading: false,
  expandDetails: true,
  fetchLoading: false,
  categories: [],
  categoryEdit: false,
  editModal: false,
  activeCategory: {},
  eraseModal: false,
  categoryToDelete: undefined,
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
        .set('activeCategory', {})
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
    case SHOW_HIDE:
      return state
        .set('expandDetails', action.expandDetails);
    case REQUEST_DELETE:
      return state
        .set('eraseModal', true)
        .set('categoryToDelete', action.id);
    case HIDE_MODAL:
      return state
        .set('eraseModal', false)
        .set('categoryToDelete', undefined);
    case DELETE_CATEGORY_SUCCESS:
      return state
        .set('eraseModal', false)
        .set('categoryToDelete', undefined);
    case EDIT_CATEGORY:
      return state
        .set('activeCategory', action.props)
        .set('editModal', true);
    case HIDE_EDIT_MODAL:
      return state
        .set('activeCategory', {})
        .set('editModal', false);
    case UPDATE_CATEGORY_SUCCESS:
      return state
        .set('activeCategory', {})
        .set('editModal', false);
    case UPDATE_CATEGORY_FAILED:
      return state
        .setIn(['error', 'edit'], action.message.name);
    default:
      return state;
  }
}

export default categoryReducer;
