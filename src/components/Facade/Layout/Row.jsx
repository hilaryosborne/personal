import React from 'react'
import radium from 'radium'
import PropTypes from 'prop-types'
import classnames from 'classnames'

@radium
export class Row extends React.Component {
  static propTypes = {
    style: PropTypes.any,
    children: PropTypes.any,
    className: PropTypes.string
  }
  render () {
    return (<div className={classnames('row', this.props.className)} style={[this.props.style]}>
      {this.props.children}
    </div>)
  }
}
