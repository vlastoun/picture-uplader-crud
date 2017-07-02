import { createSelector } from 'reselect';

const selectHome = (state) => state.get('editPost');

const selectPostData = () => createSelector(
  selectHome,
  (homeState) => homeState.get('postData')
);

export {
  selectPostData,
  selectHome,
};
