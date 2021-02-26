import { put, call } from 'redux-saga/effects'

import { loginUserService } from '../services/authenticationService'
import * as types from '../actions/login'

export function * loginSaga (payload) {
  try {
    const response = yield call(loginUserService, payload)
    if (response.error) {
      yield put({ type: types.LOGIN_USER_ERROR, error: response.error })
    } else {
      yield put({ type: types.LOGIN_USER_SUCCESS, response })
    }
  } catch (error) {
    yield put({ type: types.LOGIN_USER_ERROR, message: error.message })
  }
}
