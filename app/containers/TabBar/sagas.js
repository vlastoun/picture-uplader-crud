/*eslint-disable */
import { take, call, cancel, takeLatest, put } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
  TAB_CLICKED,
  TAB_SELECTED,
 } from './constants';


export function* tabClicked(action) {

}

export function* tabBarWatcher() {
  yield takeLatest(TAB_CLICKED, tabClicked);
}

export default [
  tabBarWatcher,
];
