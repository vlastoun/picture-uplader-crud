import { createSelector } from 'reselect';

const selectHome = (state) => state.get('tab');

const makeSelectCurrentTab = () => createSelector(
  selectHome,
  (homeState) => homeState.get('tabActive')
);

export {
  selectHome,
  makeSelectCurrentTab,
};
