import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { GlobalStyle } from './styles'

import configureStore from './store/configureStore'

import App from './App'
import AppRoutes from './AppRoutes'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <Router>
      <App>
        <AppRoutes/>
      </App>
    </Router>
  </Provider>,
  document.getElementById('root'))
