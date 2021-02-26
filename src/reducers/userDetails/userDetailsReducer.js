import * as type from '../../actions/userDetails'

const initialState = {
  details: [],
  loading: false,
  error: null,
  userDeleted: false,
  activeTab: 'details',
  updatedAt: ''
}

export default function userDetails (state = initialState, action) {
  switch (action.type) {
    case type.GET_USER_DETAILS_REQUESTED:
      return {
        ...state,
        loading: true
      }
    case type.GET_USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        details: action.user.data
      }
    case type.GET_USER_DETAILS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message
      }
    case type.DELETE_USER_REQUESTED:
      return {
        ...state,
        loading: true
      }
    case type.DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        userDeleted: true
      }
    case type.DELETE_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message
      }
    case type.DELETE_USER_RESET:
      return {
        ...state,
        userDeleted: false
      }
    case type.EDIT_USER_REQUESTED:
      return {
        ...state,
        loading: true
      }
    case type.EDIT_USER_SUCCESS: {
      const updateDate = action.user.updatedAt
      return {
        ...state,
        loading: false,
        updatedAt: updateDate
      }
    }
    case type.EDIT_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message
      }
    case type.EDIT_USER_RESET:
      return {
        ...state,
        updatedAt: ''
      }
    case type.SET_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.data
      }
    default:
      return state
  }
};
