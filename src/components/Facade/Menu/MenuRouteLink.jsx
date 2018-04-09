import React from 'react'
import radium from 'radium'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { colors, fonts, mediaQueryBelow } from 'scripts/styles'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const styling = {
  base: {
    padding: '.6rem',
    color: colors.white,
    ...fonts.raleway,
    ...mediaQueryBelow('md', {
      fontSize: '1.2rem'
    })
  }
}

@connect(state => state)
@withRouter
@radium
export class MenuRouteLink extends React.Component {
  static propTypes = {
    to: PropTypes.any,
    children: PropTypes.any,
    className: PropTypes.string,
    style: PropTypes.object,
    history: PropTypes.func,
    dispatch: PropTypes.func
  }

  constructor (props) {
    super(props)
    this.doClickAction = this.doClickAction.bind(this)
  }

  doClickAction (e) {
    e.preventDefault()
    this.props.history.push(this.props.to)
    this.props.dispatch({'type': 'FACADE_MENU_HIDE'})
  }

  render () {
    return (<a onClick={this.doClickAction}
      href={this.props.to}
      className={classnames('d-block d-md-inline', this.props.className)}
      style={{...styling.base, ...this.props.style}}>{this.props.children}</a>)
  }
}
