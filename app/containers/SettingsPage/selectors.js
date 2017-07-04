import { createSelector } from 'reselect';

const selectHome = (state) => state.get('admin');

const makeSelectUser = () => createSelector(
  selectHome,
  (homeState) => homeState.get('user')
);


export {
  selectHome,
  makeSelectUser,
};
