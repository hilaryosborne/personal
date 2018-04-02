import React from 'react'
import radium from 'radium'
import PropType from 'prop-types'
import classnames from 'classnames'
import {typography, colors} from 'scripts/styles'

const styling = {
  el: {
    ...typography.lead,
    fontWeight: 'bold',
    fontSize: '1.4rem'
  },
  icon: {
    color: colors.tomato
  }
}

@radium
export class Tag extends React.Component {
  static propTypes = {
    children: PropType.any,
    style: PropType.object,
    className: PropType.string
  }

  static defaultProps = {
    style: {},
    className: ''
  }

  render () {
    return (<div className={classnames('d-flex align-items-center', this.props.className)} style={{...this.props.style, ...styling.el}}>
      <i className='far fa-check-circle mr-2' style={{...styling.icon}} /> {this.props.children}
    </div>)
  }
}
