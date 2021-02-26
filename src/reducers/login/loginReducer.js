import * as types from '../../actions/login'

const initialState = {
  error: false,
  loading: false,
  accessToken: '',
  isLoggedIn: false
}

export default function login (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_USER:
      return {
        ...state,
        loading: true
      }
    case types.LOGIN_USER_SUCCESS: {
      const token = action.response.token
      return {
        ...state,
        error: false,
        loading: false,
        accessToken: token,
        isLoggedIn: true
      }
    }
    case types.LOGIN_USER_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      }
    case types.LOGIN_CHECK_TOKEN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true
      }
    case types.LOGOUT_USER:
      return {
        ...state,
        isLoggedIn: false
      }
    default:
      return state
  }
}
