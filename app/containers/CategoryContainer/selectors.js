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

const makeSelectShowDetails = () => createSelector(
  selectCategory,
  (homeState) => homeState.get('expandDetails')
);

const makeSelectEraseModal = () => createSelector(
  selectCategory,
  (homeState) => homeState.get('eraseModal')
);
const selectCategoryToDelete = () => createSelector(
  selectCategory,
  (homeState) => homeState.get('categoryToDelete')
);

export {
  selectCategoryToDelete,
  makeSelectEraseModal,
  makeSelectShowDetails,
  makeSelectCategories,
  selectCategory,
  makeSelectError,
  makeSelectCategoryEdit,
};
