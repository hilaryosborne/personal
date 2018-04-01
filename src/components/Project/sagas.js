import _ from 'lodash'
import { put, takeLatest, fork } from 'redux-saga/effects'
import persona from 'config/persona'

function * actionView (action) {
  try {
    const project = yield _.find(persona.projects, { slug: action.slug })
    if (!project) { throw new Error('No Project Found') }
    yield put({type: 'PROJECT_VIEW_LOADED', project: project})
  } catch (e) {
    console.log('Dammit!')
  }
}

function * watchViewLoad () {
  yield takeLatest('PROJECT_VIEW_LOAD', actionView)
}

export default [
  fork(watchViewLoad)
]
