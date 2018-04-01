import { all } from 'redux-saga/effects'
import projectSagas from 'components/Project/sagas'

export default function * root () {
  try {
    yield all([
      ...projectSagas
    ])
  } catch (e) {
    console.log(e)
  }
}
