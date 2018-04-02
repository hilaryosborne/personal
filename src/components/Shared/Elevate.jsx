import React from 'react'
import radium from 'radium'
import PropType from 'prop-types'
import classnames from 'classnames'
import {backgrounds} from 'scripts/styles'

const styling = {
  wrapper: {
    ...backgrounds.white,
    position: 'relative',
    padding: '.6rem 1.5rem',
    margin: '-3.5rem -1.5rem 0 -1.5rem'
  }
}

@radium
export class Elevate extends React.Component {
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
    return (<div
      style={{...styling.wrapper, ...this.props.style}}
      className={classnames(this.props.className)}>
      {this.props.children}
    </div>)
  }
}
