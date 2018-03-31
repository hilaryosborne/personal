import React from 'react'
import Radium from 'radium'
import classnames from 'classnames'
import PropTypes from 'prop-types'

@Radium
export class MenuDropdown extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    style: PropTypes.object
  }

  render () {
    return (<div
      className={classnames(this.props.className)}
      style={{...this.props.style}}>
      {this.props.children}
    </div>)
  }
}
