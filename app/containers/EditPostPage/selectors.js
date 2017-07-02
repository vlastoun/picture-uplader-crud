import { createSelector } from 'reselect';

const selectHome = (state) => state.get('editPost');
const selectUser = (state) => state.get('admin');

const makeSelectUser = () => createSelector(
  selectUser,
  (homeState) => homeState.get('user')
);
const selectCategories = () => createSelector(
  selectHome,
  (homeState) => homeState.get('categories')
);
const selectImages = () => createSelector(
  selectHome,
  (homeState) => homeState.get('images')
);
const loadingState = () => createSelector(
  selectHome,
  (homeState) => homeState.get('loading')
);
const selectPostData = () => createSelector(
  selectHome,
  (homeState) => homeState.get('postData')
);
const selectOldImages = () => createSelector(
  selectHome,
  (homeState) => homeState.get('oldImages')
);
export {
  selectOldImages,
  selectPostData,
  loadingState,
  selectUser,
  makeSelectUser,
  selectImages,
  selectCategories,
  selectHome,
};
