import React from 'react'
import radium from 'radium'
import _ from 'lodash'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { SharedWrapper } from 'components/Shared'
import { PageMeta } from 'components/Facade'
import { ProjectBannerLayer, ProjectDetailedLayer } from 'components/Project'
import PropTypes from 'prop-types'

@connect(state => state)
@withRouter
@radium
export class Project extends React.Component {
  static propTypes = {
    project: PropTypes.any
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    const propSlug = _.get(nextProps, 'match.params.slug', '')
    const stateSlug = _.get(prevState, 'slug', '')
    if (propSlug !== stateSlug) {
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

  getProject () {
    return _.get(this.props.project, 'viewing')
  }

  render () {
    return (<SharedWrapper>
      <PageMeta title='Some Projects' />
      <ProjectBannerLayer />
      <ProjectDetailedLayer project={this.getProject()} />
    </SharedWrapper>)
  }
}
