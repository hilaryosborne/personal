import menuReducer from './Menu/reducer'

const defaultState = () => {
  return {}
}

export default (state = defaultState(), action) => {
  const newState = {
    ...state,
    menu: menuReducer(state.menu, action)
  }
  return newState
}
