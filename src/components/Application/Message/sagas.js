import {fork, takeEvery} from 'redux-saga/effects'
import {doMessageAdd} from './generators'

function * appSagaMessageAdd () {
  yield takeEvery('PERSONA_USER_GOTO_LOGIN', doMessageAdd)
}

export default [
  fork(appSagaMessageAdd)
]
