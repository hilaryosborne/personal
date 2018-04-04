import React from 'react'
import radium from 'radium'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'
import color from 'color'
import { branding, colors, typography, fonts } from 'scripts/styles'

export const styling = {
  base: {
    position: 'relative',
    textTransform: 'uppercase',
    padding: '.8rem',
    ...typography.p,
    ...fonts.lora
  },
  block: {
    display: 'block',
    width: '100%'
  },
  sizes: {
    sm: {},
    md: {
      fontSize: '1rem'
    },
    lg: {}
  },
  types: {
    primary: {
      background: branding.primary,
      color: colors.white,
      ':hover': {
        background: color(branding.primary).lighten(0.3).rgb().string()
      }
    }
  }
}

@radium
export class Btn extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    block: PropTypes.bool,
    size: PropTypes.string,
    children: PropTypes.any,
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func
  }

  static defaultProps = {
    size: 'md',
    block: false,
    type: 'primary',
    onClick: _.noop
  }

  getSizeStyles () {
    return {...styling.sizes[this.props.size]}
  }

  getTypeStyles () {
    return {...styling.types[this.props.type]}
  }

  getBlockStyles () {
    if (!this.props.block) { return {} }
    return {...styling.block}
  }

  render () {
    return (<button onClick={this.props.onClick} style={{...styling.base, ...this.getTypeStyles(), ...this.getBlockStyles(), ...this.getSizeStyles(), ...this.props.style}} className={classnames('btn', this.props.className)}>{this.props.children}</button>)
  }
}
