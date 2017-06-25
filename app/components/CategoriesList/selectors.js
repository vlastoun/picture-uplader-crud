/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectCategory = (state) => state.get('categories');


const selectActiveCategory = () => createSelector(
  selectCategory,
  (homeState) => homeState.get('activeCategory')
);
export {
  selectActiveCategory,
};
