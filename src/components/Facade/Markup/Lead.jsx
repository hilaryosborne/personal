import React from 'react'
import Radium from 'radium'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { typography } from 'scripts/styles'

@Radium
export class Lead extends React.Component {
  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string
  }

  static defaultProps = {
    style: {},
    className: ''
  }

  render () {
    return <p {...this.props} style={{...typography.p, ...typography.lead, ...this.props.style}} className={classnames('lead', this.props.className)} />
  }
}
