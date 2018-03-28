import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { FacadeLayer, FacadeBanner, FacadeBannerPanel } from 'components'

@Radium
export class BannerLayer extends React.Component {
  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string
  }
  render () {
    return (<FacadeLayer className={classnames('hero-layer', this.props.className)} style={[this.props.style]}>
      <FacadeBanner>
        <FacadeBannerPanel />
      </FacadeBanner>
    </FacadeLayer>)
  }
}
