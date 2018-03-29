import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { typography } from 'scripts/styles'

@Radium
export class H5 extends React.Component {
  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string
  }

  static defaultProps = {
    style: {},
    className: ''
  }

  render () {
    return <h5 {...this.props} style={{...typography.h5, ...this.props.style}} className={classnames(this.props.className)} />
  }
}
