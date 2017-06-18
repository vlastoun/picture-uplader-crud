import { take, call, cancel, takeLatest, put } from 'redux-saga/effects';
import { LOCATION_CHANGE, push } from 'react-router-redux';
import { USER_LOGOUT } from './constants';

export function* logout() {
  yield call(localStorage.removeItem('token'));
}

export function* redirect() {
  yield put(push('/login'));
}

export function* adminWatcher() {
  const logoutWatcher = yield takeLatest(USER_LOGOUT, logout);
  yield take(LOCATION_CHANGE);
  yield cancel(logoutWatcher);
}

export default [
  adminWatcher,
];
