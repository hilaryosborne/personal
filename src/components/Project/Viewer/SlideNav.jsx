import React from 'react'
import radium from 'radium'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import _ from 'lodash'
import {colors} from 'scripts/styles'

const styling = {
  el: {
    position: 'absolute',
    fontSize: '2rem',
    color: colors.tomato,
    top: '50%',
    transform: 'translateY(-50%)',
    opacity: '0.7',
    ':hover': {
      opacity: '1'
    }
  },
  direction: {
    left: {
      left: '-3rem'
    },
    right: {
      right: '-3rem'
    }
  }
}

@radium
export class SlideNav extends React.Component {
  static propTypes = {
    direction: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func
  }

  static defaultProps = {
    direction: 'left',
    className: '',
    style: {},
    onClick: _.noop
  }

  render () {
    return <i onClick={this.props.onClick} className={classnames('far', 'fa-hand-point-' + this.props.direction, this.props.className)} style={{...styling.el, ...styling.direction[this.props.direction], ...this.props.style}} />
  }
}
