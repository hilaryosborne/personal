import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import {withRouter} from 'react-router-dom'
import radium from 'radium'
import {colors} from 'scripts/styles'

const styling = {
  linked: {
    color: colors.tomato
  }
}

@withRouter
@radium
export class Title extends React.Component {
  static propTypes = {
    project: PropTypes.any,
    history: PropTypes.object
  }

  constructor (props) {
    super(props)
    this.doClickAction = this.doClickAction.bind(this)
  }

  isLinked () {
    return _.get(this.props, 'project.slug', false)
  }

  doClickAction (e) {
    e.preventDefault()
    if (!this.isLinked()) { return }
    this.props.history.push('/projects/' + this.props.project.slug)
  }

  getLink () {
    if (!this.isLinked()) { return }
    return '/projects/' + this.props.project.slug
  }

  getLinked () {
    if (!this.isLinked()) { return {} }
    return {...styling.linked}
  }

  render () {
    return (<a href={this.getLink()} onClick={this.doClickAction} style={{...this.getLinked()}}>
      <h3 className='d-flex'>
        {this.props.project.label}<span className='ml-auto'>{this.props.project.year}</span>
      </h3>
    </a>)
  }
}
