/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectUser = () => createSelector(
  selectHome,
  (homeState) => homeState.get('user')
);

export {
  selectHome,
  makeSelectUser,
};
