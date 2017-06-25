import { createSelector } from 'reselect';

const selectCategory = (state) => state.get('categories');


const selectActiveCategory = () => createSelector(
  selectCategory,
  (homeState) => homeState.get('activeCategory')
);

const selectErrors = () => createSelector(
  selectCategory,
  (homeState) => homeState.get('error')
);
export {
  selectErrors,
  selectActiveCategory,
};
