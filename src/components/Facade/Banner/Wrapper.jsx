import React from 'react'
import radium from 'radium'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'

const styling = {
  wrapper: {
    position: 'relative'
  },
  container: {}
}

@radium
export class Wrapper extends React.Component {
  static propTypes = {
    style: PropTypes.any,
    children: PropTypes.any,
    className: PropTypes.string
  }

  getChildren () {
    return _.isArray(this.props.children) ? this.props.children : [this.props.children]
  }

  getBanners () {
    return _.filter(this.getChildren(), (child, k) => {
      return _.get(child, 'props.banner', false)
    })
  }

  getNonBanners () {
    return _.filter(this.getChildren(), (child, k) => {
      return !_.get(child, 'props.banner', false)
    })
  }

  getBanner () {
    const banners = this.getBanners()
    return _.first(banners)
  }

  render () {
    return (<div className={classnames('banner-wrapper', this.props.className)} style={{...styling.wrapper, ...this.props.style}}>
      <div style={{...styling.container}}>
        {this.getBanner()}
        {this.getNonBanners()}
      </div>
    </div>)
  }
}
