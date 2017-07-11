/**
 * Gets the repositories of the user from Github
 */

import { take } from 'redux-saga/effects';

import { LOCATION_CHANGE } from 'react-router-redux';

export function* userWatcher() {
  yield take(LOCATION_CHANGE);
}

// Bootstrap sagas
export default [
  userWatcher,
];
