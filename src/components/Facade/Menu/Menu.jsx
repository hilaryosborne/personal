import React from 'react'
import Radium from 'radium'
import classnames from 'classnames'
import PropTypes from 'prop-types'

@Radium
export class Menu extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    style: PropTypes.object
  }

  render () {
    return (<div
      className={classnames('d-none d-sm-flex', this.props.className)}
      style={{...this.props.style}}>
      {this.props.children}
    </div>)
  }
}
