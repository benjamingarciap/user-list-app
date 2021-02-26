import { fork } from 'redux-saga/effects'
import { watchUserAuthentication, watchUsers, watchUserDetails } from './watchers'

export default function * rootSaga () {
  yield fork(watchUserAuthentication)
  yield fork(watchUsers)
  yield fork(watchUserDetails)
}
