import { take, call, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import axios from 'axios';
import { CREATE_USER } from './constants';

export function* postUser(action) {
  const user = action.user.toJS();
  const URL = 'http://localhost:8080/api/users';
  try {
    const response = yield call(axios.post, URL, user);
    console.log(response);
  } catch (err) {
    yield console.log(err);
  }
}

export function* userWatcher() {
  const watcher = yield takeLatest(CREATE_USER, postUser);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  userWatcher,
];
