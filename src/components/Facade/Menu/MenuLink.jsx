import React from 'react'
import radium from 'radium'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { filterProps } from 'scripts/utils'
import { colors, fonts } from 'scripts/styles'
import { connect } from 'react-redux'

const styling = {
  el: {
    padding: '.6rem',
    color: colors.white,
    ...fonts.raleway
  },
  current: {}
}

@connect(state => state)
@radium
export class MenuLink extends React.Component {
  static propTypes = {
    to: PropTypes.any,
    external: PropTypes.bool,
    children: PropTypes.any,
    className: PropTypes.string,
    style: PropTypes.object,
    dispatch: PropTypes.func
  }

  constructor (props) {
    super(props)
    this.doClickAction = this.doClickAction.bind(this)
  }

  doClickAction () {
    this.props.dispatch({'type': 'FACADE_MENU_TOGGLE'})
  }

  render () {
    return (this.props.external
      ? <a href={this.props.to}
        target='_blank' rel='noopener noreferrer'
        className={classnames('d-block d-md-inline', this.props.className)}
        style={{...styling.el, ...this.props.style}}>
        {this.props.children}</a>
      : <Link {...filterProps(this.props, Link)}
        onClick={this.doClickAction}
        className={classnames('d-block d-md-inline', this.props.className)}
        style={{...styling.el, ...this.props.style}}>
        {this.props.children}
      </Link>)
  }
}
