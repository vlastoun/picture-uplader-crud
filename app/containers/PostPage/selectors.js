import { createSelector } from 'reselect';

const selectHome = (state) => state.get('post');
const selectUser = (state) => state.get('admin');

const makeSelectUser = () => createSelector(
  selectUser,
  (homeState) => homeState.get('user')
);
const editorState = () => createSelector(
  selectHome,
  (homeState) => homeState.get('textEditorState')
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
export {
  loadingState,
  selectUser,
  makeSelectUser,
  selectImages,
  selectCategories,
  editorState,
  selectHome,
};
