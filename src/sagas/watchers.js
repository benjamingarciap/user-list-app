import { takeLatest } from 'redux-saga/effects'
import { loginSaga } from './authenticationSaga'
import { fetchUserList } from './userListSaga'
import { fetchUserDetails, deleteUser, editUser } from './userDetailsSaga'

import * as loginTypes from '../actions/login'
import * as userListTypes from '../actions/userList/index'
import * as userDetailsTypes from '../actions/userDetails/'

export function * watchUserAuthentication () {
  yield takeLatest(loginTypes.LOGIN_USER, loginSaga)
}

export function * watchUsers () {
  yield takeLatest(userListTypes.GET_USERS_REQUESTED, fetchUserList)
}
export function * watchUserDetails () {
  yield takeLatest(userDetailsTypes.GET_USER_DETAILS_REQUESTED, fetchUserDetails)
  yield takeLatest(userDetailsTypes.DELETE_USER_REQUESTED, deleteUser)
  yield takeLatest(userDetailsTypes.EDIT_USER_REQUESTED, editUser)
}
