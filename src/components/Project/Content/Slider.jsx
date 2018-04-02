import React from 'react'
import radium from 'radium'
import PropType from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'
import {backgrounds} from 'scripts/styles'
import {SlideNav} from './SlideNav'
import {connect} from 'react-redux'
import {Slide} from './Slide'

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
    wrapper: {
      position: 'relative',
      display: 'block',
      width: '60.2rem',
      height: '38.2rem',
      backgroundImage: 'url(/media/projects/device_laptop.png)',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain'
    },
    inner: {
      position: 'absolute',
      display: 'block',
      overflow: 'hidden',
      top: '2.7rem',
      left: '7.17rem',
      right: '6.87rem',
      bottom: '6.70rem',
      ...backgrounds.white
    }
  }
}

@radium
@connect(state => state)
export class Slider extends React.Component {
  static propTypes = {
    project: PropType.object,
    style: PropType.object,
    className: PropType.string,
    dispatch: PropType.func
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
    this.doNextSlideAction = this.doNextSlideAction.bind(this)
    this.doPrevSlideAction = this.doPrevSlideAction.bind(this)
  }

  setDeviceEl (ref) {
    if (!ref || this.deviceEl) { return }
    this.deviceEl = ref
    const Kinetic = window.VanillaKinetic
    this.deviceKinetic = new Kinetic(this.deviceEl)
  }

  getDevice () {
    return _.get(this.props.project, 'viewing.device', 'laptop')
  }

  getIndex () {
    return _.get(this.props.project, 'viewing.slide')
  }

  getSlides () {
    return _.filter(_.get(this.props.project, 'viewing.project.slides', []), {type: this.getDevice()})
  }

  getSlide () {
    const index = _.get(this.props.project, 'viewing.slide')
    return this.getSlides()[index]
  }

  doNextSlideAction () {
    const slides = this.getSlides()
    const index = this.getIndex()
    const newIndex = (index + 1) >= slides.length ? 0 : (index + 1)
    this.props.dispatch({type: 'PROJECT_VIEW_SLIDE', slide: newIndex})
  }

  doPrevSlideAction () {
    const slides = this.getSlides()
    const index = this.getIndex()
    const newIndex = (index - 1) < 0 ? (slides.length - 1) : (index - 1)
    this.props.dispatch({type: 'PROJECT_VIEW_SLIDE', slide: newIndex})
  }

  render () {
    return (<div className={classnames('d-flex justify-content-center', this.props.className)} style={{...this.props.style}}>
      <div style={{...styling[this.getDevice()].wrapper}}>
        <div ref={this.setDeviceEl} style={{...styling[this.getDevice()].inner}}>
          <Slide slide={this.getSlide()} />
        </div>
        <SlideNav direction='left' onClick={this.doPrevSlideAction} />
        <SlideNav direction='right' onClick={this.doNextSlideAction} />
      </div>
    </div>)
  }
}
