import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

export class Time extends React.Component {
  static propTypes = {
    project: PropTypes.any
  }

  render () {
    return (<span className='ml-auto'>
      {_.get(this.props.project, 'ongoing') ? 'Ongoing, ' : null}
      {_.get(this.props.project, 'hours')}hrs
    </span>)
  }
}
