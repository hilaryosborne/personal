import React from 'react'
import radium from 'radium'
import PropType from 'prop-types'
import classnames from 'classnames'

@radium
export class Stub extends React.Component {
  static propTypes = {
    style: PropType.object,
    className: PropType.string
  }

  static defaultProps = {
    style: {},
    className: ''
  }

  render () {
    return (<div style={{...this.props.style}} className={classnames(this.props.className)}>Component</div>)
  }
}
