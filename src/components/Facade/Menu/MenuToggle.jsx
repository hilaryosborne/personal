import React from 'react'
import radium from 'radium'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { mediaQueryBelow } from 'scripts/styles'
import _ from 'lodash'

const styling = {
  el: {
    ...mediaQueryBelow('md', {
      fontSize: '1.6rem'
    })
  }
}

@connect(state => state)
@radium
export class MenuToggle extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object
  }

  constructor (props) {
    super(props)
    this.doClickAction = this.doClickAction.bind(this)
  }

  doClickAction () {
    this.props.dispatch({'type': 'FACADE_MENU_TOGGLE'})
  }

  getVisibility () {
    return _.get(this.props, 'facade.menu.toggle', false)
  }

  render () {
    return (<a
      onClick={this.doClickAction}
      className={classnames('d-sm-none px-2', this.props.className)}
      style={{...styling.el, ...this.props.style}}>
      <i className={classnames('fas', {'fa-bars': !this.getVisibility(), 'fa-times': this.getVisibility()})} />
    </a>)
  }
}
