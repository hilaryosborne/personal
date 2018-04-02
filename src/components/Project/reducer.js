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
      _.set(newState, 'viewing.project', action.project)
      return newState
    }
    case 'PROJECT_VIEW_SLIDE': {
      _.set(newState, 'viewing.slide', action.slide)
      return newState
    }
    default : return newState
  }
}
