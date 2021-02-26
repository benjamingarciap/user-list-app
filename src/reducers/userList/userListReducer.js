import * as type from '../../actions/userList/index'

const initialState = {
  users: [],
  loading: false,
  error: null,
  userPage: 1
}

export default function users (state = initialState, action) {
  switch (action.type) {
    case type.GET_USERS_REQUESTED:
      return {
        ...state,
        loading: true
      }
    case type.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users
      }
    case type.GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message
      }
    case type.CHANGE_USERS_PAGE: {
      const button = action.data
      const prevUserPage = state.userPage
      if (button === '>') {
        return {
          ...state,
          loading: false,
          userPage: prevUserPage + 1
        }
      } else {
        return {
          ...state,
          loading: false,
          userPage: prevUserPage - 1
        }
      }
    }
    default:
      return state
  }
}
