import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import * as types from './actions/login/loginActions'
import { isLogin } from './utils/token'

import Header from './pages/Header'

function App (props) {
  const dispatch = useDispatch()

  useEffect(() => {
    if (isLogin()) {
      dispatch(types.loginCheckTokenSuccess())
    }
  }, [dispatch])

  return (
    <div>
      <Header/>
      {props.children}
    </div>
  )
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App
