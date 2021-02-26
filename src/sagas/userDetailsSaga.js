
import { getApiUserDetails, getApiUserDelete, getApiUserEdit } from '../services/getUsersService'
import { call, put } from 'redux-saga/effects'

export function * fetchUserDetails (data) {
  try {
    const user = yield call(getApiUserDetails, data)
    yield put({ type: 'GET_USER_DETAILS_SUCCESS', user: user })
  } catch (e) {
    yield put({ type: 'GET_USER_DETAILS_FAILED', message: e.message })
  }
}

export function * deleteUser (data) {
  try {
    const user = yield call(getApiUserDelete, data)
    yield put({ type: 'DELETE_USER_SUCCESS', user: user })
  } catch (e) {
    yield put({ type: 'DELETE_USER_FAILED', message: e.message })
  }
};

export function * editUser (data) {
  try {
    const user = yield call(getApiUserEdit, data)
    yield put({ type: 'EDIT_USER_SUCCESS', user: user })
  } catch (e) {
    yield put({ type: 'EDIT_USER_FAILED', message: e.message })
  }
}
