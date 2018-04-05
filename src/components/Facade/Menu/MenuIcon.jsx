import React from 'react'
import radium from 'radium'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { filterProps } from 'scripts/utils'
import { colors, fonts, mediaQueryBelow } from 'scripts/styles'

const styling = {
  el: {
    ...mediaQueryBelow('md', {
      fontSize: '1.4rem'
    }),
    padding: '.6rem .3rem',
    color: colors.white,
    ...fonts.raleway
  },
  current: {}
}

@connect(state => state)
@radium
export class MenuIcon extends React.Component {
  static propTypes = {
    to: PropTypes.any,
    external: PropTypes.bool,
    children: PropTypes.any,
    className: PropTypes.string,
    style: PropTypes.object
  }

  render () {
    return (this.props.external
      ? <a href={this.props.to}
        target='_blank' rel='noopener noreferrer'
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
