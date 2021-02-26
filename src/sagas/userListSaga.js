
import { getApiUserList } from '../services/getUsersService'
import { call, put } from 'redux-saga/effects'

export function * fetchUserList (data) {
  try {
    const users = yield call(getApiUserList, data)
    yield put({ type: 'GET_USERS_SUCCESS', users: users })
  } catch (e) {
    yield put({ type: 'GET_USERS_FAILED', message: e.message })
  }
}
