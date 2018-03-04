import { all } from 'redux-saga/effects'

export default function * root () {
  try {
    yield all([])
  } catch (e) {
    console.log(e)
  }
}
