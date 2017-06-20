import { fromJS } from 'immutable';

import {
  CREATE_CATEGORY,
  CLOSE_CATEGORY,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  error: null,
  loading: false,
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
    default:
      return state;
  }
}

export default categoryReducer;
