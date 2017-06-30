/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form/immutable'; // <--- immutable import
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import { CREATE_CATEGORY_SUCCESSFUL, CLOSE_CATEGORY } from 'containers/CategoriesPage/constants';
import { POST_CREATED } from 'containers/PostPage/constants';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  locationBeforeTransitions: null,
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload,
      });
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  return combineReducers({
    route: routeReducer,
    language: languageProviderReducer,
    form: formReducer.plugin({
      CategoriesForm: (state, action) => {
        switch (action.type) {
          case CREATE_CATEGORY_SUCCESSFUL:
            return undefined;
          case CLOSE_CATEGORY:
            return undefined;
          default:
            return state;
        }
      },
      PostForm: (state, action) => {
        switch (action.type) {
          case POST_CREATED:
            return undefined;
          default:
            return state;
        }
      },
    }),
    ...asyncReducers,
  });
}
