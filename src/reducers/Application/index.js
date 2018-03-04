const defaultState = {
  messages: []
}

export default function update (state = defaultState, action) {
  switch (action.type) {
    case 'APPLICATION_MESSAGE_ADDED' : {
      const newState = {...state}
      newState.messages.push(action.message)
      return newState
    }
    default: {
      return state
    }
  }
};
