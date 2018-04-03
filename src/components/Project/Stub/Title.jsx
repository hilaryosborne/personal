import React from 'react'
import PropTypes from 'prop-types'

export class Title extends React.Component {
  static propTypes = {
    project: PropTypes.any
  }

  render () {
    return (<h3 className='d-flex'>{this.props.project.label}<span className='ml-auto'>{this.props.project.year}</span></h3>)
  }
}
