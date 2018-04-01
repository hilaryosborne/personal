import React from 'react'
import radium from 'radium'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { typography } from 'scripts/styles'

@radium
export class H4 extends React.Component {
  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string
  }

  static defaultProps = {
    style: {},
    className: ''
  }

  render () {
    return <h4 {...this.props} style={{...typography.h4, ...this.props.style}} className={classnames(this.props.className)} />
  }
}
