import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import color from 'color'
import { branding, colors } from 'scripts/styles'

export const styling = {
  base: {},
  primary: {
    background: branding.primary,
    color: colors.white,
    ':hover': {
      background: color(branding.primary).lighten(0.3).rgb().string()
    }
  }
}

export class ButtonComponent extends React.Component {
  static propTypes = {
    kind: PropTypes.oneOf(['primary']).isRequired,
    children: PropTypes.any
  }
  render () {
    return (<button style={[styling.base, styling[this.props.kind]]} className='btn'>{this.props.children}</button>)
  }
}

export const Button = Radium(ButtonComponent)
