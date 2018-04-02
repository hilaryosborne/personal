import React from 'react'
import radium from 'radium'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { filterProps } from 'scripts/utils'
import { colors, fonts } from 'scripts/styles'

const styling = {
  el: {
    padding: '.6rem',
    color: colors.white,
    ...fonts.raleway
  },
  current: {}
}

@radium
@connect(state => state)
export class MenuLink extends React.Component {
  static propTypes = {
    to: PropTypes.any,
    external: PropTypes.bool,
    children: PropTypes.any,
    className: PropTypes.string,
    style: PropTypes.object
  }

  isCurrent () {
    console.log(this.props)
  }

  render () {
    return (this.props.external
      ? <a href={this.props.to}
        className={classnames(this.props.className)}
        style={{...styling.el, ...this.props.style}}>
        {this.props.children}</a>
      : <Link {...filterProps(this.props, Link)}
        className={classnames(this.props.className)}
        style={{...styling.el, ...this.props.style}}>
        {this.props.children}
      </Link>)
  }
}
