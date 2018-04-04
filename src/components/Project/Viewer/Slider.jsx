import React from 'react'
import radium from 'radium'
import PropType from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'
import {SlideNav} from './SlideNav'
import {connect} from 'react-redux'
import {Slide} from './Slide'
import {Device} from './Device'
import {Wrapper} from './Wrapper'
import {Inner} from './Inner'

const styling = {
  device: {
    spacer: {
      marginBottom: '1rem'
    }
  }
}

@connect(state => state)
@radium
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

  constructor (props) {
    super(props)
    this.doNextSlideAction = this.doNextSlideAction.bind(this)
    this.doPrevSlideAction = this.doPrevSlideAction.bind(this)
    this.doMobileAction = this.doMobileAction.bind(this)
    this.doLaptopAction = this.doLaptopAction.bind(this)
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

  hasSlides () {
    return _.get(this.props.project, 'viewing.project.slides', []).length > 0
  }

  hasDevices () {
    const slides = _.get(this.props.project, 'viewing.project.slides', [])
    const mobileCount = _.filter(slides, {type: 'mobile'})
    const laptopCount = _.filter(slides, {type: 'laptop'})
    return mobileCount.length > 0 && laptopCount.length > 0
  }

  doNextSlideAction (e) {
    e.preventDefault()
    const slides = this.getSlides()
    const index = this.getIndex()
    const newIndex = (index + 1) >= slides.length ? 0 : (index + 1)
    this.props.dispatch({type: 'PROJECT_VIEW_SLIDE', slide: newIndex})
  }

  doPrevSlideAction (e) {
    e.preventDefault()
    const slides = this.getSlides()
    const index = this.getIndex()
    const newIndex = (index - 1) < 0 ? (slides.length - 1) : (index - 1)
    this.props.dispatch({type: 'PROJECT_VIEW_SLIDE', slide: newIndex})
  }

  doMobileAction (e) {
    e.preventDefault()
    this.props.dispatch({type: 'PROJECT_VIEW_DEVICE', device: 'mobile'})
  }

  doLaptopAction (e) {
    e.preventDefault()
    this.props.dispatch({type: 'PROJECT_VIEW_DEVICE', device: 'laptop'})
  }

  render () {
    return (this.hasSlides() ? <div className={classnames(this.props.className)} style={{...this.props.style}}>
      {this.hasDevices() ? <div className='d-flex justify-content-center' style={{...styling.device.spacer}}>
        <Device icon='fas fa-laptop' active={this.getDevice() === 'laptop'} onClick={this.doLaptopAction} />
        <Device icon='fas fa-mobile-alt' active={this.getDevice() === 'mobile'} onClick={this.doMobileAction} />
      </div> : null}
      <div className='d-flex justify-content-center'>
        <Wrapper device={this.getDevice()}>
          <Inner device={this.getDevice()}>
            <Slide slide={this.getSlide()} />
          </Inner>
          <SlideNav direction='left' onClick={this.doPrevSlideAction} />
          <SlideNav direction='right' onClick={this.doNextSlideAction} />
        </Wrapper>
      </div>
    </div> : null)
  }
}
