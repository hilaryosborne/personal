import React from 'react'
import radium from 'radium'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { typography } from 'scripts/styles'

@radium
export class H1 extends React.Component {
  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string
  }

  static defaultProps = {
    style: {},
    className: ''
  }

  render () {
    return <h1 {...this.props} style={{...typography.h1, ...this.props.style}} className={classnames(this.props.className)} />
  }
}
