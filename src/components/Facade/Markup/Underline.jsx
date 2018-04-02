import React from 'react'
import radium from 'radium'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {colors} from 'scripts/styles'

const styling = {
  el: {
    display: 'inline-block'
  },
  short: {
    marginTop: '.1rem',
    display: 'block',
    width: '4rem',
    background: colors.tomato,
    height: '.4rem'
  },
  full: {
    marginTop: '.1rem',
    display: 'block',
    width: '100%',
    background: colors.tomato,
    height: '.4rem'
  }
}

@radium
export class Underline extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    children: PropTypes.any,
    style: PropTypes.object,
    className: PropTypes.string
  }

  static defaultProps = {
    type: 'full',
    style: {},
    className: ''
  }

  render () {
    return <div style={{...styling.el, ...this.props.style}} className={classnames(this.props.className)}>
      {this.props.children}
      <span style={{...styling[this.props.type]}} />
    </div>
  }
}
