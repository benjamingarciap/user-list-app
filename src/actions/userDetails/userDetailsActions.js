import * as types from './index'

export function getUserDetails (data) {
  return {
    type: types.GET_USER_DETAILS_REQUESTED,
    data
  }
}

export function deleteUser (data) {
  return {
    type: types.DELETE_USER_REQUESTED,
    data
  }
}

export function deleteUserReset () {
  return {
    type: types.DELETE_USER_RESET
  }
}

export function editUser (data) {
  return {
    type: types.EDIT_USER_REQUESTED,
    data
  }
}

export function setActiveTab (data) {
  return {
    type: types.SET_ACTIVE_TAB,
    data
  }
}
