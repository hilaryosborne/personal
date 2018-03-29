import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import _ from 'lodash'

const styling = {
  wrapper: {
    position: 'relative'
  },
  container: {}
}

@Radium
export class Wrapper extends React.Component {
  static propTypes = {
    style: PropTypes.any,
    children: PropTypes.any,
    className: PropTypes.string
  }

  getBannerChildren () {
    return _.filter(this.props.children, (child, k) => {
      return _.get(child, 'props.banner', false)
    })
  }

  getNonBannerChildren () {
    return _.filter(this.props.children, (child, k) => {
      return !_.get(child, 'props.banner', false)
    })
  }

  getBannerChild () {
    const banners = this.getBannerChildren()
    console.log(banners)
    return _.first(banners)
  }

  render () {
    return (<div className={classnames('banner-wrapper', this.props.className)} style={{...styling.wrapper, ...this.props.style}}>
      <div style={{...styling.container}}>
        {this.getBannerChild()}
        {this.getNonBannerChildren()}
      </div>
    </div>)
  }
}
