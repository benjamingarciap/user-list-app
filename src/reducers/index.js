import { combineReducers } from 'redux'

import login from './login/loginReducer'
import userList from './userList/userListReducer'
import userDetails from './userDetails/userDetailsReducer'

const rootReducer = combineReducers({
  login, userList, userDetails
})

export default rootReducer
