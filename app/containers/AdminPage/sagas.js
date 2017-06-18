import { take, call, cancel, takeLatest, put } from 'redux-saga/effects';
import { LOCATION_CHANGE, push } from 'react-router-redux';
import { USER_LOGOUT } from 'containers/LoginContainer/constants';
import { USER_LOGOUT_REQUEST } from './constants';

export function* logout() {
  try {
    yield call(localStorage.removeItem('token'));
    yield call(localStorage.removeItem('userId'));
  } catch (e) {
    console.log('error');
  }
  yield put(push('/admin/login'));
  yield put({ type: USER_LOGOUT, error: 'User logged out' });
}

export function* adminWatcher() {
  const logoutWatcher = yield takeLatest(USER_LOGOUT_REQUEST, logout);
  yield take(LOCATION_CHANGE);
  yield cancel(logoutWatcher);
}

export default [
  adminWatcher,
];
