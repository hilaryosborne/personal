import React from 'react'
import radium from 'radium'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { colors } from 'scripts/styles'

const styling = {
  base: {
    margin: '1rem',
    borderBottom: '1px ' + colors.white + ' solid'
  }
}

@radium
export class MenuDivider extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
  }

  render () {
    return (<div className={classnames(this.props.className)}
      style={{...styling.base, ...this.props.style}} />)
  }
}
