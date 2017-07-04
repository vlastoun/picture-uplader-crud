import { take, call, cancel, takeLatest, put } from 'redux-saga/effects';
import { LOCATION_CHANGE, push } from 'react-router-redux';
import axios from 'axios';
import { HOST } from 'constants/host';
import { CHANGE_PASSWORD_REQUEST, CHAGE_PASSWORD_FAILED } from './constants';
const TOKEN = localStorage.getItem('token');

export function* changePassword(action) {
  const URL = `${HOST}api/users/change-password?access_token=${TOKEN}`;
  const toPost = {
    oldPassword: action.data.oldPassword,
    newPassword: action.data.newPassword,
  };
  try {
    yield call(axios.post, URL, toPost);
  } catch (error) {
    console.log(error);
    yield call({ type: CHAGE_PASSWORD_FAILED, error });
  }
}

export function* redirect() {
  yield put(push('/admin/login'));
}

export function* userWatcher() {
  const watcher = yield takeLatest(CHANGE_PASSWORD_REQUEST, changePassword);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  userWatcher,
];
