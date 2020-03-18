import React from 'react'
import radium from 'radium'
import PropType from 'prop-types'
import _ from 'lodash'
import classnames from 'classnames'
import Kinetic from '@buxlabs/kinetic'
import { backgrounds, mediaQueryBelow } from 'scripts/styles'

const styling = {
  mobile: {
    position: 'absolute',
    display: 'block',
    overflow: 'hidden',
    top: '5.47rem',
    left: '1.64rem',
    right: '1.64rem',
    bottom: '6.47rem',
    ...backgrounds.white,
    ...mediaQueryBelow('md', {
      top: '0',
      bottom: '0',
      left: '0',
      right: '0'
    })
  },
  laptop: {
    position: 'absolute',
    display: 'block',
    overflow: 'hidden',
    top: '2.05rem',
    left: '5.8rem',
    right: '5.4rem',
    bottom: '5.2rem',
    ...backgrounds.white,
    ...mediaQueryBelow('md', {
      top: '0',
      bottom: '0',
      left: '0',
      right: '0'
    })
  }
}

@radium
export class Inner extends React.Component {
  static propTypes = {
    device: PropType.string,
    children: PropType.any,
    style: PropType.object,
    className: PropType.string
  }

  static defaultProps = {
    style: {},
    className: ''
  }

  deviceEl

  deviceKinetic

  constructor (props) {
    super(props)
    this.setDeviceEl = this.setDeviceEl.bind(this)
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    const prevSlug = _.get(prevProps, 'project.viewing.project.slug')
    const nextSlug = _.get(this.props, 'project.viewing.project.slug')
    if (prevSlug !== nextSlug && this.deviceKinetic) {
      this.deviceKinetic.scrollTop(0)
    }
  }

  componentWillUnmount () {
    this.deviceKinetic.detach()
  }

  setDeviceEl (ref) {
    if (!ref || this.deviceEl) { return }
    this.deviceEl = ref
    this.deviceKinetic = new Kinetic(this.deviceEl)
  }

  render () {
    return (<div ref={this.setDeviceEl} className={classnames(this.props.className)} style={{...styling[this.props.device], ...this.props.style}}>
      {this.props.children}
    </div>)
  }
}
