const defaultState = () => {
  return {
    toggle: false
  }
}

export default (state = defaultState(), action) => {
  const newState = {...state}
  switch (action.type) {
    case 'FACADE_MENU_SHOW': {
      newState.toggle = true
      return newState
    }
    case 'FACADE_MENU_HIDE': {
      newState.toggle = false
      return newState
    }
    case 'FACADE_MENU_TOGGLE': {
      newState.toggle = !newState.toggle
      return newState
    }
    default: return newState
  }
}
