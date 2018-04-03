import React from 'react'
import radium from 'radium'
import PropType from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { Row, Col } from 'components/Facade'
import { connect } from 'react-redux'
import persona from 'config/persona'
import {colors} from 'scripts/styles'

const styling = {
  wrapper: {
    paddingTop: '2rem',
    paddingBottom: '2rem'
  },
  link: {
    color: colors.tomato
  }
}

@radium
@connect(state => state)
export class Navigation extends React.Component {
  static propTypes = {
    project: PropType.object,
    style: PropType.object,
    className: PropType.string
  }

  static defaultProps = {
    style: {},
    className: ''
  }

  getFiltered () {
    return _.filter(persona.projects, (project) => { return project.slug })
  }

  getSlug () {
    return _.get(this.props.project, 'viewing.project.slug')
  }

  getPrevious () {
    const filtered = this.getFiltered()
    let existingFound = false
    let foundProject = false
    _.each(filtered, (project, k) => {
      if (project.slug === this.getSlug()) { existingFound = true }
      if (existingFound) { return }
      foundProject = project
    })
    return foundProject !== false ? foundProject : _.last(filtered)
  }

  getNext () {
    const filtered = this.getFiltered()
    let existingFound = false
    let foundProject = false
    _.each(filtered, (project, k) => {
      if (existingFound && !foundProject) { foundProject = project }
      if (project.slug === this.getSlug()) { existingFound = true }
    })
    return foundProject !== false ? foundProject : _.first(filtered)
  }

  render () {
    this.getNext()
    this.getPrevious()
    return (<div style={{...styling.wrapper, ...this.props.style}} className={classnames(this.props.className)}>
      <Row>
        <Col md='4' className='text-left'>
          <Link title={this.getPrevious().label} to={'/projects/' + this.getPrevious().slug} style={{...styling.link}}><i className='fas fa-chevron-left mr-2' /> Previous Project</Link>
        </Col>
        <Col md='4' className='text-center'>
          <Link to='/projects' style={{...styling.link}}>View All Projects</Link>
        </Col>
        <Col md='4' className='text-right'>
          <Link title={this.getNext().label} to={'/projects/' + this.getNext().slug} style={{...styling.link}}>Next Project <i className='fas fa-chevron-right ml-2' /></Link>
        </Col>
      </Row>
    </div>)
  }
}
