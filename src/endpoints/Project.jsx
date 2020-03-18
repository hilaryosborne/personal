import React from 'react'
import radium from 'radium'
import _ from 'lodash'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { SharedWrapper } from 'components/Shared'
import { PageMeta } from 'components/Facade'
import { ProjectHero, ProjectDetailed } from 'features/Project'
import PropTypes from 'prop-types'
import {resetPage} from 'scripts/utils'

@connect(state => state)
@withRouter
@radium
export class Project extends React.Component {
  static propTypes = {
    project: PropTypes.object,
    dispatch: PropTypes.any
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    const propSlug = _.get(nextProps, 'match.params.slug', '')
    const stateSlug = _.get(prevState, 'slug', '')
    if (propSlug !== stateSlug) {
      resetPage()
      nextProps.dispatch({type: 'PROJECT_VIEW_LOAD', slug: propSlug})
      return {...prevState, slug: propSlug}
    }
    return prevState
  }

  constructor (props) {
    super(props)
    this.state = {
      slug: false
    }
  }

  componentDidMount () {
    resetPage()
  }

  render () {
    return (<SharedWrapper>
      <PageMeta title={_.get(this.props.project, 'viewing.project.label')} />
      <ProjectHero />
      <ProjectDetailed />
    </SharedWrapper>)
  }
}
