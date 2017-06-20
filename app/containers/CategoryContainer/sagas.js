import { take, call, cancel, takeLatest, put } from 'redux-saga/effects';
import { LOCATION_CHANGE, push } from 'react-router-redux';
import axios from 'axios';
import { HOST } from 'constants/host';
import {
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESSFUL,
  CREATE_CATEGORY_FAILED,
 } from './constants';


export function* postCategory(action) {
  const category = action.category.toJS();
  const { name, description } = category;
  const topost = { name, description };
  const URL = `${HOST}api/ctagories`;
  try {
    const response = yield call(axios.post, URL, topost);
    yield put({ type: CREATE_CATEGORY_SUCCESSFUL });
    console.log(response);
  } catch (err) {
    yield put({ type: CREATE_CATEGORY_FAILED, message: err.response.data.error.details.messages });
  }
}

export function* redirect() {
  yield put(push('/admin/login'));
}

export function* categoryWatcher() {
  const watcher = yield takeLatest(CREATE_CATEGORY_REQUEST, postCategory);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  categoryWatcher,
];
