import React from 'react'
import radium from 'radium'
import PropType from 'prop-types'
import classnames from 'classnames'

@radium
export class Slide extends React.Component {
  static propTypes = {
    slide: PropType.object,
    style: PropType.object,
    className: PropType.string
  }

  static defaultProps = {
    style: {},
    className: ''
  }

  render () {
    return (<img src={this.props.slide.src} className={classnames(this.props.className)} style={{...this.props.style, width: '100%'}} />)
  }
}
