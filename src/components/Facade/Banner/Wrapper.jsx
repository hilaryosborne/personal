import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import classnames from 'classnames'

@Radium
export class Wrapper extends React.Component {
  static propTypes = {
    style: PropTypes.any,
    children: PropTypes.any,
    className: PropTypes.string
  }
  render () {
    return (<div className={classnames('banner-wrapper', this.props.className)} style={{...this.props.style}}>
      {this.props.children}
    </div>)
  }
}
