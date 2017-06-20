/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectCategory = (state) => state.get('categories');

const makeSelectCategoryEdit = () => createSelector(
  selectCategory,
  (homeState) => homeState.get('categoryEdit')
);

export {
  selectCategory,
  makeSelectCategoryEdit,
};
