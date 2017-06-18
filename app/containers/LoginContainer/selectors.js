import { createSelector } from 'reselect';

const selectHome = (state) => state.get('login');

const makeSelectError = () => createSelector(
  selectHome,
  (homeState) => homeState.get('error')
);

export {
  selectHome,
  makeSelectError,
};
