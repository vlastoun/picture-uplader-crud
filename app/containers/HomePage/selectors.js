/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('homepage');

const makeSelectUser = () => createSelector(
  selectHome,
  (homeState) => homeState.get('user')
);

export {
  selectHome,
  makeSelectUser,
};
