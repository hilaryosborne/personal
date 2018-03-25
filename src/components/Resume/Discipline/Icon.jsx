import React from 'react'
import Radium from 'radium'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const tags = {
  cando: 'far fa-check-circle',
  oldguard: 'fas fa-crosshairs',
  passionate: 'fas fa-fire'
}

class IconComponent extends React.Component {
  static propTypes = {
    tag: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.obj
  }

  static defaultProps = {
    tag: 'cando',
    className: '',
    style: {}
  }

  getTagClass () {
    return tags[this.props.tag]
  }

  render () {
    return <i style={this.props.style} className={classnames(this.props.className, this.getTagClass())} />
  }
}

export const Icon = Radium(IconComponent)
