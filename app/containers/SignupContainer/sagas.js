import { take, call, cancel, takeLatest, put } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import axios from 'axios';
import { CREATE_USER, CREATE_USER_FAILED } from './constants';

export function* postUser(action) {
  const user = action.user.toJS();
  const URL = 'http://localhost:8080/api/users';
  try {
    const response = yield call(axios.post, URL, user);
    console.log(response);
  } catch (err) {
    yield put({ type: CREATE_USER_FAILED, message: err.response.data.error.details.messages });
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
