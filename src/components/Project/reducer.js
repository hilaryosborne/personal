import _ from 'lodash'

const defaultState = {
  viewing: {
    project: false,
    device: 'laptop',
    slide: 0
  }
}

export default (state = defaultState, action) => {
  const newState = {...state}
  switch (action.type) {
    case 'PROJECT_VIEW_LOADED': {
      newState.viewing = {
        ...newState.viewing,
        project: action.project,
        device: 'laptop',
        slide: 0
      }
      return newState
    }
    case 'PROJECT_VIEW_DEVICE': {
      _.set(newState, 'viewing.slide', 0)
      _.set(newState, 'viewing.device', action.device)
      return newState
    }
    case 'PROJECT_VIEW_SLIDE': {
      _.set(newState, 'viewing.slide', action.slide)
      return newState
    }
    default : return newState
  }
}
