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

const makeSelectCategories = () => createSelector(
  selectCategory,
  (homeState) => homeState.get('categories')
);

export {
  makeSelectCategories,
  selectCategory,
  makeSelectError,
  makeSelectCategoryEdit,
};
