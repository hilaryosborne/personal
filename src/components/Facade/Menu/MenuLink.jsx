import React from 'react'
import radium from 'radium'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { filterProps } from 'scripts/utils'

const styling = {
  el: {
    padding: '.8rem 1.2rem'
  },
  current: {}
}

@radium
@connect(state => state)
export class MenuLink extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    style: PropTypes.object
  }

  isCurrent () {
    console.log(this.props)
  }

  render () {
    return (<Link {...filterProps(this.props, Link)}
      className={classnames(this.props.className)}
      style={{...styling.el, ...this.props.style}}>
      {this.props.children}
    </Link>)
  }
}
