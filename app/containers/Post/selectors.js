import { createSelector } from 'reselect';

const selectCategory = (state) => state.get('post');

const selectPost = () => createSelector(
  selectCategory,
  (homeState) => homeState.get('post')
);
const selectPictures = () => createSelector(
  selectCategory,
  (homeState) => homeState.get('pictures')
);
const modalState = () => createSelector(
  selectCategory,
  (homeState) => homeState.get('modalState')
);
const selectPictureURL = () => createSelector(
  selectCategory,
  (homeState) => homeState.get('modalURL')
);
export {
  selectPictureURL,
  modalState,
  selectPictures,
  selectCategory,
  selectPost,
};
