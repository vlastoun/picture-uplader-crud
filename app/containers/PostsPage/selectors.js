import { createSelector } from 'reselect';

const selectHome = (state) => state.get('posts');

const selectPosts = () => createSelector(
  selectHome,
  (homeState) => homeState.get('posts')
);

const makeSelectError = () => createSelector(
  selectHome,
  (homeState) => homeState.get('error')
);

const eraseModalState = () => createSelector(
  selectHome,
  (homeState) => homeState.get('eraseModal')
);


const selectPostToDelete = () => createSelector(
  selectHome,
  (homeState) => homeState.get('postToDelete')
);

export {
  selectPostToDelete,
  selectHome,
  selectPosts,
  eraseModalState,
  makeSelectError,
};
