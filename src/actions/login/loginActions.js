import * as types from './index'

export const loginUserAction = (user) => {
  return {
    type: types.LOGIN_USER,
    user
  }
}

export const loginUserError = (error) => {
  return {
    type: types.LOGIN_USER_ERROR,
    error
  }
}

export const loginCheckTokenSuccess = (token) => {
  return {
    type: types.LOGIN_CHECK_TOKEN_SUCCESS,
    token
  }
}

export const logoutUser = () => {
  return {
    type: types.LOGOUT_USER
  }
}
