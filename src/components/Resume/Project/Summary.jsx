import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classnames from 'classnames'

export class Summary extends React.Component {
  static propTypes = {
    project: PropTypes.any,
    className: PropTypes.string
  }
  render () {
    return (_.get(this.props.project, 'summary') ? <div className={classnames(this.props.className)}>
      <i className='fas fa-quote-left mr-1' /> {_.get(this.props.project, 'summary')}
    </div> : null)
  }
}
