import * as types from './index'

export function getUsers (data) {
  return {
    type: types.GET_USERS_REQUESTED,
    data
  }
};

export function changeUserPage (data) {
  return {
    type: types.CHANGE_USERS_PAGE,
    data
  }
};
