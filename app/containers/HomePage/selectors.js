/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('homepage');

const selectCategories = () => createSelector(
  selectHome,
  (homeState) => homeState.get('categories')
);
const selectPosts = () => createSelector(
  selectHome,
  (homeState) => homeState.get('posts')
);

const selectActiveTab = () => createSelector(
  selectHome,
  (homeState) => homeState.get('activeTab')
);

export {
  selectActiveTab,
  selectPosts,
  selectHome,
  selectCategories,
};
