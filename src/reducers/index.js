import applicationReducer from './Application'

export default function update (state = {}, action) {
  return {
    application: applicationReducer(state.application, action)
  }
}
