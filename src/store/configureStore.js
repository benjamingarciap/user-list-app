
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers/index'
import rootSaga from '../sagas'

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  return {
    ...createStore(rootReducer, composeEnhancer(applyMiddleware(sagaMiddleware))),
    runSaga: sagaMiddleware.run(rootSaga)
  }
}

export default configureStore
