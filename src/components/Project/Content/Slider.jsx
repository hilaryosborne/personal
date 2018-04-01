import React from 'react'
import radium from 'radium'
import PropType from 'prop-types'
import classnames from 'classnames'
import {backgrounds} from 'scripts/styles'

const styling = {
  mobile: {
    wrapper: {
      position: 'relative',
      display: 'block',
      width: '21rem',
      height: '41rem',
      backgroundImage: 'url(/media/projects/device_mobile.png)',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain'
    },
    inner: {
      position: 'absolute',
      display: 'block',
      overflow: 'hidden',
      top: '5.47rem',
      left: '1.64rem',
      right: '1.64rem',
      bottom: '6.47rem',
      ...backgrounds.white
    }
  },
  laptop: {
    wrapper: {},
    inner: {}
  }
}

@radium
export class Slider extends React.Component {
  static propTypes = {
    // project: PropType.any,
    device: PropType.string,
    style: PropType.object,
    className: PropType.string
  }

  static defaultProps = {
    // project: false,
    device: 'mobile',
    style: {},
    className: ''
  }

  deviceEl

  constructor (props) {
    super(props)
    this.setDeviceEl = this.setDeviceEl.bind(this)
  }

  setDeviceEl (ref) {
    if (!ref || this.deviceEl) { return }
    this.deviceEl = ref

    const Kinetic = window.VanillaKinetic

    const inst = new Kinetic(this.deviceEl)
    // const something = Kinetic(this.deviceEl)
    console.log(inst)
  }

  render () {
    return (<div className={classnames('d-flex justify-content-center', this.props.className)} style={{...this.props.style}}>
      <div style={{...styling[this.props.device].wrapper}}>
        <div ref={this.setDeviceEl} style={{...styling[this.props.device].inner}}>Slide</div>
      </div>
    </div>)
  }
}
