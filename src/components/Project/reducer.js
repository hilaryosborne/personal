import _ from 'lodash'

const defaultState = {
  viewing: {
    data: false,
    viewer: false
  }
}

export default (state = defaultState, action) => {
  const newState = {...state}
  switch (action.type) {
    case 'PROJECT_VIEW_LOADED': {
      _.set(newState, 'viewing.data', action.project)
      return newState
    }
    default : return newState
  }
}
