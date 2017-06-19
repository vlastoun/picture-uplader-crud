import { take, call, cancel, takeLatest, put } from 'redux-saga/effects';
import { LOCATION_CHANGE, push } from 'react-router-redux';
import axios from 'axios';
import { USER_LOGIN, USER_STORE, USER_LOGIN_FAILED } from './constants';

export function* loginUser(action) {
  const user = action.user.toJS();
  const URL = 'http://localhost:8080/api/users/login';
  try {
    const response = yield call(axios.post, URL, user);
    yield put({ type: USER_STORE, user: response.data });
    localStorage.setItem('token', `${response.data.id}`);
    localStorage.setItem('userId', `${response.data.userId}`);
  } catch (err) {
    yield put({ type: USER_LOGIN_FAILED, error: 'Wrong password or username' });
  }
}

export function* redirect() {
  yield put(push('/admin'));
}

export function* loginWatcher() {
  const watcher = yield takeLatest(USER_LOGIN, loginUser);
  const redirectWatcher = yield takeLatest(USER_STORE, redirect);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
  yield cancel(redirectWatcher);
}

export default [
  loginWatcher,
];
