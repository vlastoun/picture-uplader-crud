import { createSelector } from 'reselect';

const selectHome = (state) => state.get('signup');

const makeSelectUser = () => createSelector(
  selectHome,
  (homeState) => homeState.get('user')
);

const makeSelectError = () => createSelector(
  selectHome,
  (homeState) => homeState.get('error')
);

export {
  selectHome,
  makeSelectUser,
  makeSelectError,
};
