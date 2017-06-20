/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectCategory = (state) => state.get('categories');

const makeSelectCategoryEdit = () => createSelector(
  selectCategory,
  (homeState) => homeState.get('categoryEdit')
);

const makeSelectError = () => createSelector(
  selectCategory,
  (homeState) => homeState.get('error')
);

export {
  selectCategory,
  makeSelectError,
  makeSelectCategoryEdit,
};
