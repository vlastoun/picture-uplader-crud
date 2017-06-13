/**
 * Gets the repositories of the user from Github
 */

import { take, call, cancel, takeLatest, put } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import axios from 'axios';
import { LOGIN_USER, STORE_USER } from './constants';
/**
 * Github repos request/response handler
 */

export function* loginUser(action) {
  // Select username from store
  const user = action.user.toJS();
  const URL = 'http://localhost:8088/api/users/login';
  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(axios.post, URL, user);
    console.log(response);
    yield put({ type: STORE_USER, user: response.data });
  } catch (err) {
    yield console.log(err);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* userWatcher() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const loginWatcher = yield takeLatest(LOGIN_USER, loginUser);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(loginWatcher);
}

// Bootstrap sagas
export default [
  userWatcher,
];
