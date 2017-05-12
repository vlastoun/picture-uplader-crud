/**
 * Gets the repositories of the user from Github
 */

import { take, call, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import axios from 'axios';
import { CREATE_USER } from './constants';
/**
 * Github repos request/response handler
 */
export function* postUser(action) {
  // Select username from store
  const user = action.user.toJS();
  const URL = 'http://localhost:8088/api/users';

  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(axios.post, URL, user);
    console.log(response);
  } catch (err) {
    yield console.log(err);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* userWatcher() {
  console.warn('sagas reg');
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(CREATE_USER, postUser);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  userWatcher,
];
