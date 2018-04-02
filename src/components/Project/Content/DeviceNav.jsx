import React from 'react'
import radium from 'radium'
import PropType from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'
import {colors} from 'scripts/styles'

const styling = {
  el: {
    fontSize: '2.4rem',
    opacity: '.7',
    marginLeft: '.8rem',
    marginRight: '.8rem',
    color: colors.tomato,
    ':hover': {
      opacity: '1'
    }
  },
  active: {
    opacity: '1'
  }
}

@radium
export class DeviceNav extends React.Component {
  static propTypes = {
    icon: PropType.string,
    active: PropType.bool,
    style: PropType.object,
    className: PropType.string,
    onClick: PropType.func
  }

  static defaultProps = {
    icon: 'fas fa-laptop',
    active: false,
    style: {},
    className: '',
    onClick: _.noop
  }

  getActiveStyles () {
    if (!this.props.active) { return {} }
    return {...styling.active}
  }

  render () {
    return (<i className={classnames(this.props.icon, this.props.className)} style={{...this.props.style, ...styling.el, ...this.getActiveStyles()}} onClick={this.props.onClick} />)
  }
}
