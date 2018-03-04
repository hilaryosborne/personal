import { put } from 'redux-saga/effects'

export function * doMessageAdd (action) {
  try {
    yield put({type: 'APPLICATION_MESSAGE_ADDED', message: action.message})
  } catch (e) {
    yield put({type: 'APPLICATION_NOTIFY_FAILED', message: e.message})
  }
}
