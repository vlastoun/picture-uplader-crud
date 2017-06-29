import { createSelector } from 'reselect';

const selectHome = (state) => state.get('post');

const editorState = () => createSelector(
  selectHome,
  (homeState) => homeState.get('textEditorState')
);
export {
  editorState,
  selectHome,
};
