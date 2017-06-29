import { createSelector } from 'reselect';

const selectHome = (state) => state.get('post');

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
export {
  selectImages,
  selectCategories,
  editorState,
  selectHome,
};
