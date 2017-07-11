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


export {
  selectPictures,
  selectCategory,
  selectPost,
};
