import React from 'react'
import Radium from 'radium'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { connect as Connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import _ from 'lodash'

const styling = {
  el: {
    padding: '.8rem 1.2rem'
  },
  current: {}
}

const filterProps = (props, Component) => {
  console.log(Component)
  return {}
}

@Radium
@Connect(state => state)
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
    this.isCurrent()
    return (<a {...filterProps(this.props, Link)}
      className={classnames(this.props.className)}
      style={{...styling.el, ...this.props.style}}>
      {this.props.children}
    </a>)
  }
}
