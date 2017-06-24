import { createSelector } from 'reselect';

const selectHome = (state) => state.get('admin');

const makeSelectUser = () => createSelector(
  selectHome,
  (homeState) => homeState.get('user')
);

const getAuthState = () => createSelector(
  selectHome,
  (homeState) => homeState.get('isAuth')
);
const getDrawerState = () => createSelector(
  selectHome,
  (homeState) => homeState.get('drawerState')
);
const getActiveUrl = () => createSelector(
  selectHome,
  (homeState) => homeState.get('activeUrl')
);
export {
  getActiveUrl,
  getDrawerState,
  getAuthState,
  selectHome,
  makeSelectUser,
};
