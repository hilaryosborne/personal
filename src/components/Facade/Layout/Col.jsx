import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import classnames from 'classnames'

@Radium
export class Col extends React.Component {
  static propTypes = {
    xs: PropTypes.string,
    sm: PropTypes.string,
    md: PropTypes.string,
    lg: PropTypes.string,
    xl: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.any,
    className: PropTypes.string
  }

  static defaultProps = {
    xs: '12',
    style: {},
    className: ''
  }

  getCols () {
    const cols = []
    if (this.props.xs) {
      cols.push('col-' + this.props.xs)
    }
    if (this.props.sm) {
      cols.push('col-sm-' + this.props.sm)
    }
    if (this.props.md) {
      cols.push('col-md-' + this.props.md)
    }
    if (this.props.lg) {
      cols.push('col-lg-' + this.props.lg)
    }
    if (this.props.xl) {
      cols.push('col-xl-' + this.props.xl)
    }
    return cols.join(' ')
  }

  render () {
    return (<div className={classnames('col', this.getCols(), this.props.className)} style={[this.props.style]}>
      {this.props.children}
    </div>)
  }
}
