import React from 'react'
import Radium from 'radium'
import PropType from 'prop-types'
import classnames from 'classnames'

@Radium
export class Wrapper extends React.Component {
  static propTypes = {
    children: PropType.any,
    style: PropType.object,
    className: PropType.string
  }

  static defaultProps = {
    style: {},
    className: ''
  }

  render () {
    return (<div style={{...this.props.style}} className={classnames(this.props.className)}>
      {this.props.children}
    </div>)
  }
}
