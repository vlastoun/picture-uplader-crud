import { createSelector } from 'reselect';

const selectHome = (state) => state.get('admin');

const makeSelectUser = () => createSelector(
  selectHome,
  (homeState) => homeState.get('user')
);

const getAuthState = () => createSelector(
  selectHome,
  (homeState) => homeState.get('user')
);

export {
  getAuthState,
  selectHome,
  makeSelectUser,
};
