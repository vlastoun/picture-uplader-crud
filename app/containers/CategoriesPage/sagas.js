import { take, call, cancel, takeLatest, put } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import axios from 'axios';
import { HOST } from 'constants/host';
import {
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESSFUL,
  CREATE_CATEGORY_FAILED,
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILED,
  DELETE_CATEGORY,
  DELETE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_FAILED,
  EDIT_CATEGORY_REQUEST,
 } from './constants';

const TOKEN = localStorage.getItem('token');

export function* postCategory(action) {
  const category = action.category.toJS();
  const { name, description } = category;
  const topost = { name, description };
  const URL = `${HOST}api/ctagories?access_token=${TOKEN}`;
  try {
    yield call(axios.post, URL, topost);
    yield put({ type: CREATE_CATEGORY_SUCCESSFUL });
    yield put({ type: FETCH_CATEGORIES });
  } catch (err) {
    yield put({ type: CREATE_CATEGORY_FAILED, message: err.response.data.error.details.messages });
  }
}

export function* editCategory(action) {
  const category = action.category.toJS();
  const { name, description, id } = category;
  const topost = { name, description };
  const URL = `${HOST}api/ctagories/${id}?access_token=${TOKEN}`;
  try {
    yield call(axios.patch, URL, topost);
    yield put({ type: UPDATE_CATEGORY_SUCCESS });
    yield put({ type: FETCH_CATEGORIES });
  } catch (err) {
    yield put({ type: UPDATE_CATEGORY_FAILED, message: err.response.data.error.details.messages });
  }
}

export function* fetchCategories() {
  const URL = `${HOST}api/ctagories?access_token=${TOKEN}`;
  try {
    const response = yield call(axios.get, URL);
    yield put({ type: FETCH_CATEGORIES_SUCCESS, data: response.data });
  } catch (err) {
    yield put({ type: FETCH_CATEGORIES_FAILED, message: err.response.data.error.details.messages });
  }
}

export function* deleteCategory(action) {
  const URL = `${HOST}api/ctagories/${action.id}?access_token=${TOKEN}`;
  try {
    yield call(axios.delete, URL);
    yield put({ type: DELETE_CATEGORY_SUCCESS });
    yield put({ type: FETCH_CATEGORIES });
  } catch (err) {
    yield put({ type: FETCH_CATEGORIES_FAILED, message: err.response.data.error.details.messages });
  }
}

export function* categoryWatcher() {
  const watcher = yield takeLatest(CREATE_CATEGORY_REQUEST, postCategory);
  const watcherEdit = yield takeLatest(EDIT_CATEGORY_REQUEST, editCategory);
  const fetchWatcher = yield takeLatest(FETCH_CATEGORIES, fetchCategories);
  const deleteCategoryWatcher = yield takeLatest(DELETE_CATEGORY, deleteCategory);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
  yield cancel(fetchWatcher);
  yield cancel(deleteCategoryWatcher);
  yield cancel(watcherEdit);
}

export default [
  categoryWatcher,
];
